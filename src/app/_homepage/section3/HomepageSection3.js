'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import React, { useState } from 'react'
import website from './images/03 1.png'
import videos from './images/04 1.png'
import prints from './images/06 1.png'
import mediakit from './images/Media Kit.png'
import social from './images/Social - Tennis.png'
import apparel from './images/t-shirt-nurse-512251 1.png'
import Icon_right_arrow from '@/app/components/icons/Icon_right_arrow'
import Icon_left_arrow from '@/app/components/icons/Icon_left_arrow'
import useDeviceSize from '@/app/Hooks/useDeviceSize'

const HomepageSection3 = () => {
  console.log('section 3')
  const [swiper, setswiper] = useState(null)
  const { deviceSize } = useDeviceSize()
  const handlePrev = () => {
    swiper?.slidePrev()
  }
  const handleNext = () => {
    swiper?.slideNext()
  }
  console.log('deviceSize', deviceSize)
  return (
    <div className={'pt-10 pb-10 md:pt-[71px] md:pb-20'}>
      <div className={'px-3 md:px-6 lg:px-10 xl:px-5'}>
        <h3
          className={
            'text-center text-4xl md:text-5xl font-bold text-secondary text-balance mb-12'
          }
        >
          We Help Athletes Get Things{' '}
          <span className="text-white bg-primary rounded-lg px-1 lg:py-1 text-nowrap">
            Done!
          </span>
        </h3>
        {/* <div
          className={
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'
          }
        > */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={
            (['md', 'lg', 'xl', '2xl'].includes(deviceSize) && 20) ||
            (['sm'].includes(deviceSize) && 10)
          }
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          slidesPerView={2.25}
          onSwiper={(swiper) => setswiper(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1441: {
              slidesPerView: 6,
            },
          }}
          className="relative"
          // onSlideChange={(swiper) => {
          //   setactiveIndex(swiper?.realIndex)
          // }}
        >
          <SwiperSlide>
            <div
              className={
                'flex flex-col py-[18px] px-3 bg-secondary-50 pb-4 rounded-[10px] w-full min-h-[235px] 2xl:min-h-[434px]'
              }
            >
              <p className={'text-lg md:text-[28px] font-bold text-center'}>
                Media Kit
              </p>
              <Image
                src={mediakit}
                alt="mediakit"
                className="mx-auto mt-3 md:mt-[13px] lg:mt-[15px] xl:mt-4 2xl:mt-5"
                quality={100}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                'flex flex-col py-[18px] px-3 bg-primary-50 pb-4 rounded-[10px] w-full min-h-[235px] 2xl:min-h-[434px]'
              }
            >
              <p className={'text-lg md:text-[28px] font-bold text-center'}>
                Social
              </p>
              <Image
                src={social}
                alt="social"
                className="mx-auto mt-5 md:mt-[26px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-5"
                quality={100}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: 'auto' }}>
            <div
              className={
                'flex flex-col py-[18px] px-3 bg-secondary-50 pb-4 rounded-[10px] w-full min-h-[235px] 2xl:min-h-[434px]'
              }
            >
              <p className={'text-lg md:text-[28px] font-bold text-center'}>
                Website
              </p>
              <Image
                src={website}
                alt="website"
                className="mx-auto mt-3 md:mt-4 lg:mt-[14px] xl:mt-4 2xl:mt-3"
                quality={100}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                'flex flex-col py-[18px] px-3 bg-primary-50 pb-4 rounded-[10px] w-full min-h-[235px] 2xl:min-h-[434px]'
              }
            >
              <p className={'text-lg md:text-[28px] font-bold text-center'}>
                Videos
              </p>
              <Image
                src={videos}
                alt="videos"
                className="mx-auto mt-1"
                quality={100}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                'flex flex-col py-[18px] px-3 bg-secondary-50 pb-4 rounded-[10px] w-full min-h-[235px] 2xl:min-h-[434px]'
              }
            >
              <p className={'text-lg md:text-[28px] font-bold text-center'}>
                Apparel
              </p>
              <Image
                src={apparel}
                alt="apparel"
                className="mx-auto mt-4 md:mt-[22px] lg:mt-5 xl:mt-[25px] 2xl:mt-3"
                quality={100}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                'flex flex-col py-[18px] px-3 bg-primary-50 pb-4 rounded-[10px] w-full min-h-[235px] 2xl:min-h-[434px]'
              }
            >
              <p className={'text-lg md:text-[28px] font-bold text-center'}>
                Prints
              </p>
              <Image
                src={prints}
                alt="prints"
                className="mx-auto mt-4 md:mt-5 lg:mt-[19px] xl:mt-[23px] 2xl:mt-8"
                quality={100}
              />
            </div>
          </SwiperSlide>
          <div className={'hidden md:flex 2xl:hidden'}>
            <div
              onClick={handlePrev}
              className={
                'absolute top-0 bottom-0 my-auto left-5 md:left-[50px] z-10 bg-white rounded-full size-10 flex justify-center items-center shadow-md cursor-pointer select-none'
              }
            >
              <Icon_left_arrow className="text-black" />
            </div>
            <div
              onClick={handleNext}
              className={
                'absolute top-0 bottom-0 my-auto right-5 md:right-[50px] z-10 bg-white rounded-full size-10 flex justify-center items-center shadow-md cursor-pointer select-none'
              }
            >
              <Icon_right_arrow className="text-black" />
            </div>
          </div>
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  )
}

export default HomepageSection3
