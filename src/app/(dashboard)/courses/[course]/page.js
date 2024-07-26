import React from 'react'
import { courseList } from '../courseList'
import HeaderContainer from '@/app/(dashboard)/courses/HeaderContainer'
import BreadCrumb from '@/app/(dashboard)/courses/BreadCrumb'
import ContentSection from '@/app/(dashboard)/courses/ContentSection'
import Content from '@/app/(dashboard)/courses/Content'
import { notFound } from 'next/navigation'
import Navigation from '@/app/(dashboard)/courses/Navigation'

export async function generateStaticParams() {
  return courseList
}

const CoursePage = ({ params }) => {
  const course = courseList.find((item) => item.id === params.course)
  if (!course) return notFound()
  return (
    <>
      <HeaderContainer>
        <BreadCrumb courseTitle={course.title} />
      </HeaderContainer>
      <ContentSection>
        <Navigation arrItems={courseList} courseId={course.id} />
        <Content
          courseId={course.id}
          arrItems={course.module}
          cardStyle={'min-h-[350px]'}
        />
      </ContentSection>
    </>
  )
}

export default CoursePage
