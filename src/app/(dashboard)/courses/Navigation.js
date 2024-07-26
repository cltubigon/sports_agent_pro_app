import Link from 'next/link'
import React from 'react'

const Navigation = ({ arrItems, courseId, moduleId, lessonId }) => {
  let url
  if (lessonId) {
    url = `/courses/${courseId}/${moduleId}`
  } else if (moduleId) {
    url = `/courses/${courseId}`
  } else if (courseId) {
    url = `/courses`
  }
  return (
    <div
      className={
        'hidden sticky top-20 h-fit lg:w-[250px] lg:border-r-[1px] lg:pr-4 border-neutral-300 lg:block'
      }
    >
      {arrItems.map((item, index) => {
        const { id, title, description } = item
        return (
          <Link href={`${url}/${id}`} key={index}>
            <div
              className={`relative rounded-md py-3 px-4 border-l-[2px] ${
                moduleId === id || courseId === id || lessonId === id
                  ? 'border-secondary shadow-custom1 bg-white'
                  : 'border-transparent'
              }`}
            >
              {title && (
                <p
                  className={`text-xl font-oswald line-clamp-1 ${
                    (moduleId === id || courseId === id) && 'text-secondary'
                  }`}
                >
                  {title}
                </p>
              )}
              {description && (
                <p className={'text-sm text-neutral-400 line-clamp-1'}>
                  {description}
                </p>
              )}
              {(moduleId === id || courseId === id) && (
                <div
                  className={
                    'absolute w-[2px] h-full top-0 -right-4 bg-secondary'
                  }
                />
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Navigation
