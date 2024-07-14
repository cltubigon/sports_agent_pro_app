/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import SectionContainer from './SectionContainer'
import Icon_image from '@/app/components/icons/Icon_image'
import CltDropzone from '@/app/components/dropzone/Dropzone'
import Button from '@/app/components/Button'
import { uploadImagesToSupabase } from '@/app/components/dropzone/uploadImagesToSupabase'
import Image from 'next/image'
import Popup from '@/app/components/Popup'
import Icon_trash from '@/app/components/icons/Icon_trash'
import {
  deletePhoto,
  fetchGalleryImages,
  revalidatePathCustom,
} from './actions'
import ButtonLoader from '@/app/components/ButtonLoader'
import Toast from '@/app/components/Toast'

const Media = ({ user, images: imagesFromSupabase }) => {
  const [images, setimages] = useState(imagesFromSupabase)
  const [toast, settoast] = useState(null)
  const [selectedImages, setSelectedImages] = useState([])
  const [loading, setloading] = useState(null)
  const [imagesWithBlurDataUrl, setImagesWithBlurDataUrl] = useState(null)
  const [popup, setpopup] = useState(null)
  const [tempImageRemove, settempImageRemove] = useState(images)
  const [imagesToRemove, setimagesToRemove] = useState([])

  const handleUpload = async () => {
    if (!imagesWithBlurDataUrl) return
    setloading({ id: 'uploadImages' })
    const { data, error } = await uploadImagesToSupabase({
      folder: 'gallery',
      images: imagesWithBlurDataUrl,
      userId: user?.id,
      pageToRevalidate: '/profile',
    })
    if (data) {
      revalidatePathCustom('/profile')
      setSelectedImages([])
      setImagesWithBlurDataUrl(null)
      setloading(null)
      setpopup(false)
      settoast({
        description: 'Uploaded successful.',
        status: 'success',
      })
      setimages(await fetchGalleryImages(user))
    } else if (error) {
      settoast({
        description: error?.message,
        status: 'error',
      })
    }
  }

  useEffect(() => {
    settempImageRemove(images)
  }, [images])

  const handleEdit = () => {
    setpopup(true)
  }

  const handleCancel = () => {
    settempImageRemove(images)
    setimagesToRemove([])
    setpopup(false)
  }

  const handleSaveChanges = async () => {
    setloading({ id: 'saveChanges' })
    const error = await deletePhoto({
      path: imagesToRemove?.map((item) => item.path),
      bucket: 'gallery',
    })
    if (error) {
      console.log('error', error)
      settoast({
        description: error?.message,
        status: 'error',
      })
      return
    }
    revalidatePathCustom('/profile')
    setimages(tempImageRemove)
    setloading(null)
    setimagesToRemove([])
    setpopup(false)
    settoast({
      description: 'Changes saved',
      status: 'success',
    })
  }

  const handleTrash = async (path) => {
    setimagesToRemove([
      ...imagesToRemove,
      images?.find((item) => item.path === path),
    ])
    settempImageRemove(tempImageRemove?.filter((img) => img.path !== path))
  }

  return (
    <SectionContainer data={{ title: 'Media', Icon: Icon_image }}>
      <Toast parameters={{ toast, settoast }} />
      <div className={'border-t-[1px] border-neutral-300'}>
        <p className={'font-bold mt-5'}>Featured photos</p>
        <p className={'text-sm'}>
          Showcase additional visuals about you by uploading at least 4 photos.
        </p>
        {images?.length <= 0 && (
          <>
            <CltDropzone
              parameters={{
                selectedImages,
                setSelectedImages,
                imagesWithBlurDataUrl,
                setImagesWithBlurDataUrl,
                containerStyle: 'mt-5 py-4 border-neutral-400 bg-neutral-50',
              }}
            />
            {imagesWithBlurDataUrl?.length > 0 && (
              <ButtonLoader
                className={'px-10 mt-4 ml-auto'}
                onClick={handleUpload}
                parameters={{ id: 'uploadImages', loading, setloading }}
              >
                Upload
              </ButtonLoader>
            )}
          </>
        )}
        {popup && (
          <Popup data={{ setpopup, bgNotClickable: true, noScrollbar: true }}>
            <div className="p-6 pb-10">
              <div className={'w-full'}>
                <h5 className={'md:text-lg font-bold'}>
                  Upload your featured photos
                </h5>
                <p className={'text-sm'}>
                  Showcase yourself or something important.
                </p>
                {images?.length < 10 && (
                  <>
                    <CltDropzone
                      parameters={{
                        selectedImages,
                        setSelectedImages,
                        imagesWithBlurDataUrl,
                        setImagesWithBlurDataUrl,
                        containerStyle:
                          'mt-5 py-4 border-neutral-400 bg-neutral-50',
                      }}
                    />
                    {imagesWithBlurDataUrl?.length > 0 && (
                      // <Button
                      //   onClick={handleUpload}
                      //   className="px-10 mt-4 relative ml-auto w-full mb-10"
                      // >
                      //   Upload
                      //   {loading && (
                      //     <Icon_spinner className="top-0 bottom-0 right-3 my-auto absolute animate-spin" />
                      //   )}
                      // </Button>
                      <ButtonLoader
                        className={'px-10 mt-4 ml-auto w-full mb-10'}
                        onClick={handleUpload}
                        parameters={{
                          id: 'uploadImages',
                          loading,
                          setloading,
                        }}
                      >
                        Upload
                      </ButtonLoader>
                    )}
                  </>
                )}
              </div>
              <div className={'mt-5'}>
                <p className={'text-sm mb-5'}>
                  Note: The order you upload your photos will be the order they
                  appear on your profile.
                </p>
                <div className={'grid grid-cols-2 md:grid-cols-3 gap-2'}>
                  {tempImageRemove
                    ?.sort((a, b) => {
                      const dateA = new Date(a?.created_at)
                      const dateB = new Date(b?.created_at)
                      return dateA - dateB
                    })
                    ?.map((img, index) => {
                      const { fullPath, blurDataURL, path } = img
                      return (
                        <div
                          key={index}
                          className={
                            'group/edit relative w-full h-[150px] md:h-[160px]'
                          }
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${fullPath}`}
                            alt="user images"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            quality={100}
                            fill
                            className="object-cover group-hover/edit:brightness-50 transition-all duration-300"
                          />
                          <Icon_trash
                            onClick={() => handleTrash(path)}
                            className="cursor-pointer absolute top-3 right-3 z-10 text-white shadow-lg"
                          />
                        </div>
                      )
                    })}
                </div>

                {imagesToRemove?.length > 0 && (
                  <div className="flex gap-2 mt-5 flex-col md:flex-row">
                    <Button
                      className="w-full"
                      variant="button2"
                      onClick={handleCancel}
                    >
                      Cancel Changes
                    </Button>
                    <ButtonLoader
                      parameters={{
                        id: 'saveChanges',
                        loading,
                      }}
                      className="w-full"
                      onClick={handleSaveChanges}
                    >
                      Save Changes
                    </ButtonLoader>
                  </div>
                )}
              </div>
            </div>
          </Popup>
        )}
      </div>
      {images?.length > 0 && (
        <Button
          variant="button2"
          className="w-full mb-4 mt-6"
          onClick={handleEdit}
        >
          Edit photos
        </Button>
      )}
      <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'}>
        {images
          ?.sort((a, b) => {
            const dateA = new Date(a?.created_at)
            const dateB = new Date(b?.created_at)
            return dateA - dateB
          })
          .map((img, index) => {
            const { fullPath, blurDataURL } = img
            return (
              <div
                key={index}
                className={
                  'relative w-full h-[150px]  md:h-[200px] lg:h-[130px] xl:h-[190px] 2xl:h-[260px]'
                }
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${fullPath}`}
                  alt="user images"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  quality={100}
                  fill
                  className="object-cover"
                />
              </div>
            )
          })}
      </div>
    </SectionContainer>
  )
}

export default Media
