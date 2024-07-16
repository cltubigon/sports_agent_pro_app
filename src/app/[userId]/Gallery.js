import Image from 'next/image'
import React from 'react'
import ImagePreview from '../components/ImagePreview'

const Gallery = ({ user, images }) => {
  return (
    <div className={'py-3 md:py-1'}>
      <ImagePreview />
      <div className={'max-w-[1500px] mx-auto px-3 md:px-6 2xl:px-0'}>
        <div className={'flex gap-[1%] overflow-x-auto md:overflow-x-hidden'}>
          {images
            ?.sort((a, b) => {
              const dateA = new Date(a?.created_at)
              const dateB = new Date(b?.created_at)
              return dateA - dateB
            })
            ?.map((item, index) => {
              const { fullPath, blurDataURL } = item
              return (
                <div
                  key={index}
                  className={
                    'relative w-full min-w-[43%] md:min-w-[19.2%]  max-w-[43%] md:max-w-[25%] h-[144px] md:h-[138px] lg:h-[200px] xl:h-[267px] rounded-md overflow-hidden'
                  }
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${fullPath}`}
                    alt="user images"
                    placeholder={'blur'}
                    blurDataURL={blurDataURL}
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Gallery
