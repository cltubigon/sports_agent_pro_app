'use client'
import Icon_down from '@/app/components/icons/Icon_down'
import Menu from '@/app/components/Menu'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const Title = ({ courseId, lessonId, selectedModule }) => {
  const [showModal, setShowModal] = useState(false)
  const buttonRef = useRef(null)
  console.log({ courseId, lessonId, selectedModule })
  return (
    <div className={'relative flex items-center'}>
      <div
        className={'all-lessons flex items-center gap-2 select-none'}
        ref={buttonRef}
        onClick={() => setShowModal(!showModal)}
      >
        <Icon_down className='size-6 mr-5' />
        {/* <p className={''}>Show All</p> */}
      </div>
      {showModal && (
        <Menu
          showModal={showModal}
          setShowModal={setShowModal}
          referenceElement={buttonRef}
          containerHeight={230}
          className="w-[300px] shadow border-neutral-100"
          classId="all-lessons"
          containerWidth={350} //optional
          spaceFromElement={28} //optional
        >
          {selectedModule?.lessons?.map((item, index) => {
            const { title, id } = item
            return (
              <Link
                href={`/courses/${courseId}/${selectedModule?.id}/${item?.id}`}
                className={`py-3 px-4 border-b-[1px] hover:bg-neutral-50 hover:rounded-md ${
                  lessonId === id
                    ? '!border-secondary shadow-custom1 bg-secondary-50 border-[1px] rounded-md'
                    : 'border-neutral-50'
                }`}
                key={index}
              >
                {title}
              </Link>
            )
          })}
        </Menu>
      )}
    </div>
  )
}

export default Title
