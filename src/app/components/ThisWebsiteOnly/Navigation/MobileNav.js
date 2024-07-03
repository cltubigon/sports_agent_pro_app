'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, LazyMotion, m } from 'framer-motion'
import Icon_menu from '../../icons/Icon_menu'
import Icon_close from '../../icons/Icon_close'
import Link from 'next/link'
import Icon_up from '../../icons/Icon_up'
import Icon_down from '../../icons/Icon_down'
const loadFeatures = () =>
  import('@/utilities/framerMotion/features').then((res) => res.default)

const MobileNav = ({ parameters: { nav, pathName } }) => {
  const [activeMainItem, setactiveMainItem] = useState('')
  const [activeSubItem, setactiveSubItem] = useState('')
  const [mobileIsOpen, setmobileIsOpen] = useState(false)

  useEffect(() => {
    setmobileIsOpen(false)
  }, [pathName])

  const handleMainMenu = (path) => {
    if (path === activeMainItem) {
      setactiveMainItem('')
      return
    }
    setactiveMainItem(path)
  }
  const handleSubMenu = (path) => {
    if (path === activeSubItem) {
      setactiveSubItem('')
      return
    }
    setactiveSubItem(path)
  }

  const handleStatus = (e) => {
    e.preventDefault()
    setmobileIsOpen(() => !mobileIsOpen)
  }

  const animateDropdown = {
    inactive: {
      height: '0',
      marginTop: 0,
      transition: {
        duration: 0.3,
      },
    },
    active: {
      height: 'auto',
      marginTop: '11px',
      transition: {
        duration: 0.3,
      },
    },
  }
  const animateSlideIn = {
    inactive: {
      x: '-80vw',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    active: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <div className={'relative z-50 xl:hidden'}>
      <Icon_menu
        onClick={handleStatus}
        className="size-7 md:size-10 cursor-pointer"
      />
      <LazyMotion features={loadFeatures}>
        <AnimatePresence>
          {mobileIsOpen && (
            <div
              className={
                'w-full fixed top-0 left-0 z-50 h-full backdrop-blur-sm bg-neutral-400 bg-opacity-20'
              }
            >
              <m.div
                variants={animateSlideIn}
                initial="inactive"
                animate="active"
                exit="inactive"
                className={
                  'block xl:hidden px-[30px] pt-[15px] bg-white z-50 w-[80vw] md:w-[40vw] min-h-full text-[#262b2e] shadow-md'
                }
              >
                <div
                  onClick={handleStatus}
                  className={
                    'p-[2px] bg-primary w-fit ml-auto mr-[-15px] cursor-pointer'
                  }
                >
                  <Icon_close className="text-white" />
                </div>
                {/* Mobile */}
                <div className={'flex flex-col divide-y divide-[#e5e5e5]'}>
                  {nav?.map((item, index) => {
                    const { name, path } = item
                    console.log('path', path)
                    return (
                      <div
                        key={index}
                        className="flex-col font-semibold py-[13px]"
                      >
                        <div
                          onClick={() => handleMainMenu(path || name)}
                          className={
                            'active:text-primary flex w-full items-center justify-between'
                          }
                        >
                          {path ? (
                            <Link href={path}>{name}</Link>
                          ) : (
                            <p>{name}</p>
                          )}
                          {item?.array &&
                            (activeMainItem === path ||
                            activeMainItem === name ? (
                              <Icon_up className="text-[#dfdfdf]" />
                            ) : (
                              <Icon_down className="size-5 text-[#dfdfdf]" />
                            ))}
                        </div>
                        <AnimatePresence>
                          {(activeMainItem === path ||
                            activeMainItem === name) &&
                            item?.array && (
                              <m.div
                                variants={animateDropdown}
                                initial="inactive"
                                animate="active"
                                exit={'inactive'}
                                className={
                                  'overflow-y-hidden text-[13px] divide-y-[1px]'
                                }
                              >
                                {item?.array?.map((subItem, index) => {
                                  return (
                                    <div key={index}>
                                      <div
                                        onClick={() =>
                                          handleSubMenu(subItem?.path)
                                        }
                                        className={
                                          'flex justify-between items-center py-1'
                                        }
                                      >
                                        <p
                                          className={
                                            'active:text-primary py-1 pl-5'
                                          }
                                        >
                                          {subItem?.path ? (
                                            <Link
                                              href={subItem?.path}
                                              className="w-full"
                                            >
                                              {subItem?.name}
                                            </Link>
                                          ) : (
                                            subItem?.name
                                          )}
                                        </p>
                                        {subItem?.array && (
                                          <Icon_down className="size-5 text-[#dfdfdf]" />
                                        )}
                                      </div>
                                      <AnimatePresence>
                                        {subItem?.array &&
                                          activeSubItem === subItem.path && (
                                            <m.div
                                              variants={animateDropdown}
                                              initial="inactive"
                                              animate="active"
                                              exit={'inactive'}
                                              className={
                                                'text-[13px] overflow-y-hidden'
                                              }
                                            >
                                              {subItem?.array?.map(
                                                (subItem3, index) => {
                                                  return (
                                                    <>
                                                      {subItem3?.path ? (
                                                        <Link
                                                          key={index}
                                                          href={subItem3?.path}
                                                        >
                                                          <p
                                                            className={
                                                              'active:text-primary py-1 pl-10'
                                                            }
                                                          >
                                                            {subItem3?.name}
                                                          </p>
                                                        </Link>
                                                      ) : (
                                                        <p
                                                          className={
                                                            'py-1 pl-10'
                                                          }
                                                        >
                                                          {subItem3?.name}
                                                        </p>
                                                      )}
                                                    </>
                                                  )
                                                }
                                              )}
                                            </m.div>
                                          )}
                                      </AnimatePresence>
                                    </div>
                                  )
                                })}
                              </m.div>
                            )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
                {/* End of mobile */}
              </m.div>
            </div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  )
}

export default MobileNav
