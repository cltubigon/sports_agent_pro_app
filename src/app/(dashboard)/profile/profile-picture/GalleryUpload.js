/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { fetchGalleryImages, updateProfilePicture } from '../actions'
import ButtonLoader from '@/app/components/ButtonLoader'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'

const GalleryUpload = ({
  parameters: { user, images, setimages, setpopup },
}) => {
  const { settoast } = useStore(utilityStore)
  const [loading, setloading] = useState(null)

  useEffect(() => {
    const initialFetch = async () => {
      setimages(await fetchGalleryImages(user))
    }
    initialFetch()
  }, [])

  const handleSelect = async (id) => {
    setloading({ id: 'selectButton' })
    const { data, error } = await updateProfilePicture(id)
    if (data) {
      setimages(await fetchGalleryImages(user))
      setloading(null)
      setpopup(false)
      settoast({
        description: 'Profile updated',
        status: 'success',
      })
    }
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
  }
  return (
    <div className={''}>
      <div className={'grid grid-cols-2 md:grid-cols-3 gap-2 mt-5'}>
        {images
          ?.sort((a, b) => {
            const dateA = new Date(a?.created_at)
            const dateB = new Date(b?.created_at)
            return dateA - dateB
          })
          .map((img, index) => {
            const { id, fullPath, blurDataURL } = img
            return (
              <div
                key={index}
                className={'group relative w-full h-[150px] md:h-[160px]'}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${fullPath}`}
                  alt="user images"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  quality={100}
                  fill
                  className="object-cover group-hover:brightness-50"
                />
                {/* <Button
                onClick={() => handleSelect(id)}
                className="absolute opacity-0 md:hover:bg-white top-0 bottom-0 right-0 left-0 m-auto w-[80%] group-hover:opacity-100 transition-opacity duration-300"
                variant="button2"
              >
                Select
              </Button> */}
                <ButtonLoader
                  variant="button2"
                  onClick={() => handleSelect(id)}
                  parameters={{ id: 'selectButton', loading, setloading }}
                  className="absolute opacity-0 md:hover:bg-white top-0 bottom-0 right-0 left-0 m-auto w-[80%] group-hover:opacity-100 transition-opacity duration-300"
                >
                  Select
                </ButtonLoader>
              </div>
            )
          })}
      </div>
      {images?.length <= 0 && (
        <div
          className={
            'p-10 w-full border-[1px] border-neutral-200 bg-neutral-50 rounded-md'
          }
        >
          <p className={'text-center'}>You do not have photos to show.</p>
        </div>
      )}
    </div>
  )
}

export default GalleryUpload
