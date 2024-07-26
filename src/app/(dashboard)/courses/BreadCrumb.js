import Icon_right from '@/app/components/icons/Icon_right'
import Link from 'next/link'
import React from 'react'

const BreadCrumb = ({
  courseTitle,
  moduleTitle,
  lessonTitle,
  selectedModule,
  selectedCourse,
}) => {
  return (
    <div className={'flex items-center gap-1 md:gap-3 z-50'}>
      <Link href={moduleTitle ? `/courses/${selectedCourse?.id}` : '#'}>
        <p className={''}>{courseTitle}</p>
      </Link>
      {moduleTitle && (
        <Link
          href={
            lessonTitle
              ? `/courses/${selectedCourse?.id}/${selectedModule?.id}`
              : '#'
          }
          className="flex items-center gap-1 md:gap-3"
        >
          <Icon_right className="size-4 text-neutral-400" />
          <p className={''}>{moduleTitle}</p>
        </Link>
      )}
      {lessonTitle && (
        <>
          <Icon_right className="size-4 text-neutral-400" />
          <p className={''}>{lessonTitle}</p>
        </>
      )}
    </div>
  )
}

export default BreadCrumb
