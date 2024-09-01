import Image from 'next/image'
import React from 'react'
import website from './images/03 1.png'
import videos from './images/04 1.png'
import prints from './images/06 1.png'
import mediakit from './images/Media Kit.png'
import social from './images/Social - Tennis.png'
import apparel from './images/t-shirt-nurse-512251 1.png'

const HomepageSection3 = () => {
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
        <div
          className={
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'
          }
        >
          <div
            className={
              'flex flex-col py-[18px] px-3 bg-secondary-50 pb-4 rounded-[10px] w-full'
            }
          >
            <p className={'text-[28px] font-bold text-center'}>Media Kit</p>
            <Image
              src={mediakit}
              alt="mediakit"
              className="mx-auto mt-[13px]"
              quality={100}
            />
          </div>
          <div
            className={
              'flex flex-col py-[18px] px-3 bg-primary-50 pb-4 rounded-[10px] w-full'
            }
          >
            <p className={'text-[28px] font-bold text-center'}>Social</p>
            <Image
              src={social}
              alt="social"
              className="mx-auto mt-[13px]"
              quality={100}
            />
          </div>
          <div
            className={
              'flex flex-col py-[18px] px-3 bg-secondary-50 pb-4 rounded-[10px] w-full'
            }
          >
            <p className={'text-[28px] font-bold text-center'}>Website</p>
            <Image
              src={website}
              alt="website"
              className="mx-auto mt-[5px]"
              quality={100}
            />
          </div>
          <div
            className={
              'flex flex-col py-[18px] px-3 bg-primary-50 pb-4 rounded-[10px] w-full'
            }
          >
            <p className={'text-[28px] font-bold text-center'}>Videos</p>
            <Image
              src={videos}
              alt="videos"
              className="mx-auto -mt-[3px]"
              quality={100}
            />
          </div>
          <div
            className={
              'flex flex-col py-[18px] px-3 bg-secondary-50 pb-4 rounded-[10px] w-full'
            }
          >
            <p className={'text-[28px] font-bold text-center'}>Apparel</p>
            <Image
              src={apparel}
              alt="apparel"
              className="mx-auto mt-2"
              quality={100}
            />
          </div>
          <div
            className={
              'flex flex-col py-[18px] px-3 bg-primary-50 pb-4 rounded-[10px] w-full'
            }
          >
            <p className={'text-[28px] font-bold text-center'}>Prints</p>
            <Image
              src={prints}
              alt="prints"
              className="mx-auto mt-[25px]"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageSection3
