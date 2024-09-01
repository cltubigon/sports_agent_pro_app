import Image from 'next/image'
import React from 'react'
import graphics from './images/graphics.jpg'
import socmeddom from './images/socmeddom.png'
import sponstrat from './images/sponstrat.png'
import webdev from './images/Website-Development-icon.png'
import Button from '@/app/components/Button'

const HomepageSection5 = () => {
  return (
    <div className={'pt-10 pb-14 md:pt-[49px] md:pb-[150px]'}>
      <div
        className={
          'max-w-[1235px] w-full mx-auto px-3 md:px-6 lg:px-10 xl:px-0'
        }
      >
        <div
          className={
            'flex flex-col xl:flex-row gap-8 xl:gap-[100px] items-center'
          }
        >
          <Image src={graphics} alt="graphics" quality={100} />
          <div className={'flex flex-col'}>
            <h3
              className={
                'text-4xl md:text-5xl font-bold text-secondary text-balance mb-4 lg:mb-[26px]'
              }
            >
              Done For You
            </h3>
            <p className={'text-xl font-light 2xl:text-nowrap mb-6'}>
              Gain the competitive edge by signing up today.
            </p>
            <div className={'flex flex-col gap-4 mb-4 lg:mb-8 lg:-ml-6'}>
              <div className={'flex gap-2 items-center'}>
                <div className="min-w-[65px] flex justify-end">
                  <Image
                    src={socmeddom}
                    alt="social media domination"
                    quality={100}
                  />
                </div>
                <p className={'text-[22px] font-bold'}>
                  Social Media Domination
                </p>
              </div>
              <div className={'flex gap-2 items-center'}>
                <div className="min-w-[65px] flex justify-end">
                  <Image src={webdev} alt="website development" quality={100} />
                </div>
                <p className={'text-[22px] font-bold'}>Website Development</p>
              </div>
              <div className={'flex gap-2 items-center'}>
                <div className="min-w-[65px] flex justify-end">
                  <Image
                    src={sponstrat}
                    alt="sponsorship strategy"
                    quality={100}
                  />
                </div>
                <p className={'text-[22px] font-bold'}>Sponsorship Strategy</p>
              </div>
            </div>
            <Button className="text-lg mt-4 md:h-[53px] rounded-[10px] px-[30px]">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageSection5
