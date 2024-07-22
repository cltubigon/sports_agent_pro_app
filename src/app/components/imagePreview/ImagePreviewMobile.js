import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CustomNavigation from '../swiperjs/CustomNavigation'
// import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const ImagePreviewMobile = ({ parameters: { images } }) => {
  const [swiper, setswiper] = useState(null)

  const handlePrev = () => {
    swiper?.slidePrev()
  }
  const handleNext = () => {
    swiper?.slideNext()
  }
  return (
    <div
      className={
        'group/swiper flex lg:hidden items-center w-full h-screen bg-black'
      }
    >
      <Swiper
        // modules={[Autoplay]}
        // initialSlide={2}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        slidesPerView={1}
        onSwiper={(swiper) => setswiper(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          //   1024: {
          //     slidesPerView: 3,
          //   },
          //   1280: {
          //     slidesPerView: 3.97,
          //   },
        }}
        className="relative"
        // onSlideChange={(swiper) => {
        //   console.log('swiper', swiper)
        //   setactiveIndex(swiper?.realIndex)
        // }}
      >
        {images.map((item, i) => {
          const { fullPath, blurDataURL } = item
          return (
            <SwiperSlide key={i} className="m-auto">
              <div className="group cursor-pointer flex flex-col items-center bg-[#F6F6F6]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${fullPath}`}
                  alt="user images"
                  placeholder={'blur'}
                  blurDataURL={blurDataURL}
                  quality={100}
                  width={400}
                  height={400}
                  className="select-none w-auto h-auto"
                />
              </div>
            </SwiperSlide>
          )
        })}
        <CustomNavigation
          className={'hidden md:block'}
          parameters={{
            handlePrev,
            handleNext,
          }}
        />
      </Swiper>
    </div>
  )
}

export default ImagePreviewMobile
