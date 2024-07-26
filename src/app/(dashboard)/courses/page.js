import React from 'react'
import HeaderContainer from '@/app/(dashboard)/courses/HeaderContainer'
import ContentSection from '@/app/(dashboard)/courses/ContentSection'
import { courseList } from './courseList'
import Content from '@/app/(dashboard)/courses/Content'

export const revalidate = 605800

const CoursesPage = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <ContentSection>
        <Content arrItems={courseList} cardStyle={'min-h-[350px]'} />
      </ContentSection>
    </>
  )
}

export default CoursesPage
