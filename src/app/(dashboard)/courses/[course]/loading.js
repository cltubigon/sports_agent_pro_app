import React from 'react'
import HeaderContainer from '@/app/(dashboard)/courses/HeaderContainer'
import ContentSection from '@/app/(dashboard)/courses/ContentSection'

const CoursesLoader = () => {
  return (
    <>
      <HeaderContainer className={'items-center'}>
        <div className={'flex gap-3'}>
          <div
            className={
              'w-[100px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'w-[100px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
        </div>
      </HeaderContainer>
      <ContentSection>
        <div className={'hidden lg:w-[250px] lg:flex flex-col gap-3'}>
          <div
            className={
              'w-full max-w-[196px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-10 rounded-md'
            }
          />
          <div
            className={
              'w-full max-w-[196px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-10 rounded-md'
            }
          />
          <div
            className={
              'w-full max-w-[196px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-10 rounded-md'
            }
          />
        </div>
        <div
          className={
            'mt-8 lg:mt-0 w-full grid grid-cols-1 md:grid-cols-3 px-5 2xl:grid-cols-5 gap-3'
          }
        >
          <div
            className={
              'w-full min-h-[350px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'w-full min-h-[350px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'w-full min-h-[350px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'w-full min-h-[350px] hidden xl:block bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'w-full min-h-[350px] hidden xl:block bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
        </div>
      </ContentSection>
    </>
  )
}

export default CoursesLoader
