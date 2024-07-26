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
        <div className={'mt-8 lg:mt-0 w-full bg-white py-6'}>
          <div className={'mt-8 lg:mt-0 w-full max-w-[840px] mx-auto'}>
            <div
              className={
                'w-[200px] mb-5 h-5 bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse rounded-md'
              }
            />
            <div
              className={
                'w-full h-[280px] md:h-[350px] lg:h-[530px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse rounded-md'
              }
            />
            <div className={'flex flex-col mt-5 gap-3'}>
              <div
                className={
                  'w-full bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
                }
              />
              <div
                className={
                  'w-full bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
                }
              />
              <div
                className={
                  'w-[50%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
                }
              />
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}

export default CoursesLoader
