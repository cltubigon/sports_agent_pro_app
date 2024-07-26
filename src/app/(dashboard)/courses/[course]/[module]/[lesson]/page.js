import React from 'react'
import HeaderContainer from '@/app/(dashboard)/courses/HeaderContainer'
import BreadCrumb from '@/app/(dashboard)/courses/BreadCrumb'
import Title from '@/app/(dashboard)/courses/Title'
import ContentSection from '@/app/(dashboard)/courses/ContentSection'
import Navigation from '@/app/(dashboard)/courses/Navigation'
import Content from '@/app/(dashboard)/courses/Content'
import { courseList } from '@/app/(dashboard)/courses/courseList'
import { notFound } from 'next/navigation'

export const revalidate = 605800

const LessonPage = ({ params }) => {
  const { course, module, lesson } = params
  const selectedCourse = courseList.find((item) => item.id === course)
  const selectedModule = selectedCourse.module.find(
    (item) => item.id === module
  )
  const selectedLesson = selectedModule.lessons.find(
    (item) => item.id === lesson
  )
  if (!selectedLesson) return notFound()
  return (
    <>
      <HeaderContainer>
        <BreadCrumb
          courseTitle={selectedCourse.title}
          moduleTitle={selectedModule.title}
          lessonTitle={selectedLesson.title}
          selectedCourse={selectedCourse}
          selectedModule={selectedModule}
        />
        <Title
          selectedModule={selectedModule}
          courseId={selectedCourse.id}
          lessonId={selectedLesson.id}
        />
      </HeaderContainer>
      <ContentSection>
        <Navigation
          courseId={selectedCourse.id}
          moduleId={selectedModule.id}
          lessonId={selectedLesson.id}
          arrItems={selectedModule.lessons}
        />
        <Content
          courseId={selectedCourse.id}
          moduleId={selectedModule.id}
          lessonId={selectedLesson.id}
          lessonData={selectedLesson}
          cardStyle={'min-h-[350px]'}
          selectedModule={selectedModule}
        />
      </ContentSection>
    </>
  )
}

export default LessonPage
