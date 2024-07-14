'use client'
import ButtonLoader from '@/app/components/ButtonLoader'
import CltDropzone from '@/app/components/dropzone/Dropzone'
import {
  uploadImagesToSupabase,
  uploadProfilePicture,
} from '@/app/components/dropzone/uploadImagesToSupabase'
import Toast from '@/app/components/Toast'
import React, { useState } from 'react'
import { fetchGalleryImages, revalidatePathCustom } from '../actions'
import { formatDateToUTCString } from '@/utilities/date-and-time/formatDateToUTCString'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'

const LocalUpload = ({ parameters: { user, images, setimages, setpopup } }) => {
  const [selectedImages, setSelectedImages] = useState([])
  const [imagesWithBlurDataUrl, setImagesWithBlurDataUrl] = useState(null)
  const { toast, settoast } = useStore(utilityStore)
  const [loading, setloading] = useState(null)

  const handleClick = async () => {
    if (!imagesWithBlurDataUrl) return
    setloading({ id: 'uploadProfile' })
    const { data, error } = await uploadProfilePicture({
      folder: 'gallery',
      images: imagesWithBlurDataUrl,
      userId: user?.id,
    })
    if (data) {
      revalidatePathCustom('/profile')
      setpopup(false)
      settoast({
        description: 'Profile updated',
        status: 'success',
      })
    } else if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
    setloading(null)
  }
  return (
    <div className="py-5">
      <Toast parameters={{ toast, settoast }} />
      <h5 className={'font-tinos md:text-lg font-bold md:text-center'}>
        Choose a profile that best describes yourself.
      </h5>
      <p className={'text-sm mt-1 text-neutral-500 md:text-center'}>
        The uploaded image will be added to your media uploads.
      </p>
      <CltDropzone
        parameters={{
          selectedImages,
          setSelectedImages,
          imagesWithBlurDataUrl,
          setImagesWithBlurDataUrl,
          containerStyle:
            'min-h-[300px] mt-5 md:max-w-[70%] mx-auto rounded-md',
          quantityLimit: 1,
          selectedContainerStyle: 'grid-cols-1 md:grid-cols-1',
          placeholder: 'Click to upload file, or drag & drop file here.',
        }}
      />
      <div className={'md:max-w-[70%] md:mx-auto mt-3'}>
        <ButtonLoader
          onClick={handleClick}
          className={'w-full'}
          parameters={{ id: 'uploadProfile', loading, setloading }}
        >
          Upoad
        </ButtonLoader>
      </div>
    </div>
  )
}

export default LocalUpload
