import Card from '@/app/components/ThisWebsiteOnly/card-container/Card'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import placeholder from '@/app/images/placeholder-image.svg'
import Button from '@/app/components/Button'
import Icon_left from '@/app/components/icons/Icon_left'
import Icon_right from '@/app/components/icons/Icon_right'

const Content = ({
  courseId,
  moduleId,
  lessonId,
  arrItems,
  cardStyle,
  lessonData,
  selectedModule,
}) => {
  let url
  if (moduleId) {
    url = `/courses/${courseId}/${moduleId}`
  } else if (courseId) {
    url = `/courses/${courseId}`
  } else if (!courseId) {
    url = `/courses`
  }
  const isFirst = selectedModule?.lessons[0].id === lessonId
  const isLast =
    selectedModule?.lessons[selectedModule?.lessons.length - 1].id === lessonId
  const currentIndex = selectedModule?.lessons.findIndex(
    (item) => item.id === lessonId
  )
  return (
    <div
      className={`w-full py-8 lg:py-[unset] ${
        !lessonData &&
        'grid grid-cols-1 md:grid-cols-3 px-5 2xl:grid-cols-5 gap-3'
      }`}
    >
      {!lessonData &&
        arrItems.map((item, index) => {
          const { image, title, id, description, content } = item
          return (
            <Link href={`${url}/${id}`} key={index}>
              <Card className={cardStyle}>
                <div className={'relative h-[160px]'}>
                  <Image
                    src={image || placeholder}
                    fill
                    sizes="100vw"
                    alt="lesson image"
                    className="object-cover"
                  />
                </div>
                <div className={'px-4 pt-4 pb-6'}>
                  {title && <p className={'font-oswald text-xl'}>{title}</p>}
                  {(content || description) && (
                    <p className={'text-neutral-400 line-clamp-5'}>
                      {description || content[0]}
                    </p>
                  )}
                </div>
              </Card>
            </Link>
          )
        })}
      {lessonData && (
        <div className={'bg-white px-5 2xl:px-[unset] lg:py-6'}>
          <div className="w-full max-w-[840px] mx-auto">
            <h3
              className={
                'font-oswald text-3xl md:text-4xl font-bold mb-5 lg:mb-[unset] lg:py-5'
              }
            >
              {lessonData.title}
            </h3>
            <div
              className={'relative h-[280px] md:h-[350px] xl:h-[430px] 2xl:h-[530px] mb-6'}
            >
              <Image
                src={lessonData.image || placeholder}
                fill
                sizes="100vw"
                alt="lesson image"
                className="object-cover"
              />
            </div>
            <div className={'flex flex-col gap-5'}>
              {lessonData.content.map((item, index) => {
                return (
                  <p key={index} className={''}>
                    {item}
                  </p>
                )
              })}
            </div>
            <div
              className={`flex mt-10 md:mt-20 ${
                !isFirst && !isLast && 'justify-between'
              } ${!isLast && 'justify-end'}`}
            >
              {!isFirst && (
                <div className={'w-fit'}>
                  <Link
                    href={`${url}/${
                      selectedModule?.lessons[
                        selectedModule?.lessons.findIndex(
                          (item) => item.id === lessonId
                        ) - 1
                      ].id
                    }`}
                  >
                    <Button>
                      <Icon_left />
                      Previous
                    </Button>
                  </Link>
                </div>
              )}
              {!isLast && (
                <div className={'w-fit'}>
                  <Link
                    href={`${url}/${
                      selectedModule?.lessons[
                        selectedModule?.lessons.findIndex(
                          (item) => item.id === lessonId
                        ) + 1
                      ].id
                    }`}
                  >
                    <Button>
                      Next <Icon_right />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Content
