'use client'
import React, { useState } from 'react'
import SectionContainer from './SectionContainer'
import Icon_image from '@/app/components/icons/Icon_image'
import CltDropzone from '@/app/components/dropzone/Dropzone'
import Button from '@/app/components/Button'
import { uploadImagesToSupabase } from '@/app/components/dropzone/uploadImagesToSupabase'
import Icon_spinner from '@/app/components/icons/Icon_spinner'

const Media = ({ user, images }) => {
  console.log('images', images)
  const [selectedImages, setSelectedImages] = useState([])
  const [loading, setloading] = useState(null)
  const [imagesWithBlurDataUrl, setImagesWithBlurDataUrl] = useState(null)
  console.log({ selectedImages, imagesWithBlurDataUrl })
  const handleUpload = async () => {
    const { data, error } = await uploadImagesToSupabase({
      images: imagesWithBlurDataUrl,
      userId: user?.id,
    })
    console.log({ data, error })
  }
  return (
    <SectionContainer data={{ title: 'Media', Icon: Icon_image }}>
      <div className={'border-t-[1px] border-neutral-300'}>
        <p className={'font-bold mt-5'}>Featured photos</p>
        <p className={'text-sm'}>
          Showcase additional visuals about you by uploading at least 4 photos.
        </p>
        <CltDropzone
          parameters={{
            selectedImages,
            setSelectedImages,
            imagesWithBlurDataUrl,
            setImagesWithBlurDataUrl,
            containerStyle: 'mt-5 py-4 border-neutral-400 bg-neutral-50',
          }}
        />
        <Button onClick={handleUpload} className="px-10 mt-4 relative ml-auto">
          Upload
          {loading && (
            <Icon_spinner className="top-0 bottom-0 right-3 my-auto absolute animate-spin" />
          )}
        </Button>
      </div>
    </SectionContainer>
  )
}

export default Media
