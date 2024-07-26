import React from 'react'

const ContentSection = ({ children }) => {
  return (
    <div className="md:px-5 lg:py-8 flex flex-col lg:flex-row gap-5 relative">
      {children}
    </div>
  )
}

export default ContentSection
