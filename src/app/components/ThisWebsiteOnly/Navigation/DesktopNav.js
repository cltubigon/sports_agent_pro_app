'use client'
import Link from 'next/link'
// import { usePathName } from 'next/navigation'

const DesktopNav = ({ parameters: { nav, pathName } }) => {
  return (
    <div className={'hidden xl:flex gap-10 flex-wrap gap-y-3 items-center'}>
      {nav.map((item, index) => {
        const { name, path } = item
        return (
          <div key={index} className={'group/main relative'}>
            <div className="font-semibold relative">
              {path ? (
                <Link
                  href={path}
                  className={`${pathName === path && 'text-primary'}`}
                >
                  {name}
                </Link>
              ) : (
                name
              )}
              <div
                className={`absolute -bottom-1 h-[1px] ${
                  pathName === path ? 'w-full' : 'w-0'
                } group-hover/main:w-full ease-in-out bg-primary transition-all duration-300`}
              ></div>
            </div>
            <div
              className={
                'hidden group-hover/main:block absolute pt-10 left-0 w-fit z-20 text-paragraph leading-[22px] text-[14px] font-semibold'
              }
            >
              <div
                className={
                  'bg-white shadow-md divide-y-[1px] divide-neutral-100'
                }
              >
                {item?.array?.map((sub, i) => {
                  return (
                    <div
                      key={i}
                      className={'group/sub relative hover:bg-neutral-100'}
                    >
                      {sub?.path ? (
                        <Link
                          href={sub?.path || ''}
                          className="hover:text-secondary"
                        >
                          <p
                            className={'px-5 py-[11px] w-[210px] 2xl:w-[260px]'}
                          >
                            {sub.name}
                          </p>
                        </Link>
                      ) : (
                        <p className={'px-5 py-[11px] w-[210px] 2xl:w-[260px]'}>
                          {sub.name}
                        </p>
                      )}
                      <div
                        className={
                          'hidden group-hover/sub:block absolute top-0 right-[-210px] 2xl:right-[-260px] w-fit z-20 leading-[22px] text-[14px] font-semibold '
                        }
                      >
                        <div
                          className={
                            'bg-white shadow-md divide-y-[1px] divide-neutral-100'
                          }
                        >
                          {sub?.array?.map((sub2, i) => {
                            return (
                              <div key={i} className={'relative'}>
                                {sub2?.path ? (
                                  <Link
                                    href={sub2?.path || ''}
                                    className="hover:text-secondary"
                                  >
                                    <p className="px-5 py-[11px] w-[210px] 2xl:w-[260px]">
                                      {sub2.name}
                                    </p>
                                  </Link>
                                ) : (
                                  <p className="px-5 py-[11px] w-[210px] 2xl:w-[260px]">
                                    {sub2.name}
                                  </p>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DesktopNav
