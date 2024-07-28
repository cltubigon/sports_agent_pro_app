import React from 'react'
import NavigationBuild from './navigation/NavigationBuild'
import ContentBuild from './content/ContentBuild'

const BuildPage = () => {
  return (
    <>
      <div className={'flex h-screen text-white'}>
        <NavigationBuild />
        <ContentBuild />
      </div>
    </>
  )
}

export default BuildPage
