import React, { useState } from 'react'
import LocalUpload from './LocalUpload'
import GalleryUpload from './GalleryUpload'

const UploadProfile = ({
  parameters: { user, images, setimages, setpopup },
}) => {
  const [tab, settab] = useState('local')
  const handleTabClick = (tabName) => {
    settab(tabName)
  }
  return (
    <div className="p-6 w-full">
      <div
        className={
          'grid grid-cols-2 border-b-[1px] border-neutral-200 divide-x-[1px] cursor-default'
        }
      >
        <p
          onClick={() => handleTabClick('local')}
          className={`w-full px-5 text-center py-6 ${
            tab === 'local' ? 'bg-secondary-100' : 'hover:bg-neutral-100'
          }`}
        >
          Upload from storage
        </p>
        <p
          onClick={() => handleTabClick('gallery')}
          className={`w-full px-5 text-center py-6 ${
            tab === 'gallery' ? 'bg-secondary-100' : 'hover:bg-neutral-100'
          }`}
        >
          Select from gallery
        </p>
      </div>
      {tab === 'local' && (
        <LocalUpload parameters={{ user, setpopup }} />
      )}
      {tab === 'gallery' && (
        <GalleryUpload parameters={{ user, images, setimages, setpopup }} />
      )}
    </div>
  )
}

export default UploadProfile
