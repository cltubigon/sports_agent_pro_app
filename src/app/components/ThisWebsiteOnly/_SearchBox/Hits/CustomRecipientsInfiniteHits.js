import React from 'react'
import { useInfiniteHits } from 'react-instantsearch'
import Icon_down from '../../../icons/Icon_down'
import Link from 'next/link'
import { Highlight } from 'react-instantsearch'
import Icon_right from '../../../icons/Icon_right'

function CustomRecipientsInfiniteHits(props) {
  const { hits, sendEvent, showPrevious, showMore, isFirstPage, isLastPage } =
    useInfiniteHits(props)
  return (
    <div>
      {hits?.length > 0 && (
        <div className={'py-4'}>
          <h2 className="text-xl font-semibold pl-5 my-4">Recipients</h2>
          <ol>
            {hits.map((hit) => {
              const { first_name, sub_title, profile_picture, path_url } = hit
              return (
                <li
                  key={hit.objectID}
                  onClick={() => sendEvent('click', hit, 'Hit Clicked')}
                  onAuxClick={() => sendEvent('click', hit, 'Hit Clicked')}
                >
                  <Link
                    href={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${path_url}`}
                  >
                    <div
                      className={
                        'flex justify-between items-center gap-3 shadow-sm py-3 px-5 rounded-md w-full my-2 bg-[#F8FAFC] hover:bg-primary hover:text-white'
                      }
                    >
                      <div className={''}>
                        <Highlight
                          attribute="first_name"
                          className="text-bold"
                          hit={hit}
                          classNames={{
                            highlighted: 'bg-primary text-white',
                            nonHighlighted: 'font-semibold',
                          }}
                        />
                        <p className={''}>{sub_title}</p>
                      </div>
                      <Icon_right className="min-w-4 min-h-4" />
                    </div>
                  </Link>
                </li>
              )
            })}
          </ol>
          {!isLastPage && (
            <div
              onClick={showMore}
              className="flex justify-center mt-5 cursor-pointer items-center gap-1 text-sm"
            >
              Show more <Icon_down className="size-4" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default CustomRecipientsInfiniteHits
