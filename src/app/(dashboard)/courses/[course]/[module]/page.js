import React from 'react'

import HeaderContainer from '@/app/(dashboard)/courses/HeaderContainer'
import BreadCrumb from '@/app/(dashboard)/courses/BreadCrumb'
import ContentSection from '@/app/(dashboard)/courses/ContentSection'
import Navigation from '@/app/(dashboard)/courses/Navigation'
import Content from '@/app/(dashboard)/courses/Content'
import { courseList } from '../../courseList'
import { notFound } from 'next/navigation'

export const revalidate = 605800

const ModulePage = ({ params }) => {
  const { course, module } = params
  const selectedCourse = courseList.find((item) => item.id === course)
  const selectedModule = selectedCourse.module.find(
    (item) => item.id === module
  )
  if (!selectedModule) return notFound()
  return (
    <div>
      <HeaderContainer>
        <BreadCrumb
          courseTitle={selectedCourse.title}
          moduleTitle={selectedModule.title}
          selectedCourse={selectedCourse}
        />
        {/* <Title /> */}
      </HeaderContainer>
      <ContentSection>
        <Navigation
          courseId={selectedCourse.id}
          moduleId={selectedModule.id}
          arrItems={selectedCourse.module}
        />
        <Content
          courseId={selectedCourse.id}
          moduleId={selectedModule.id}
          arrItems={selectedModule.lessons}
          cardStyle={'min-h-[350px]'}
        />
      </ContentSection>
    </div>
  )
}

export default ModulePage
