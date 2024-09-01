import Image from 'next/image'
import React from 'react'
import highschool from './images/Highschool.png'
import college from './images/College.png'
import professional from './images/Professional.png'
import retired from './images/Retired.png'
import Button from '@/app/components/Button'

const HomepageSection2 = () => {
  return (
    <div className={'pt-10 pb-10 md:pt-20 md:pb-20 xl:pt-[156px] xl:pb-20'}>
      <div className={'max-w-[1295px] mx-auto px-3 md:px-6 lg:px-10'}>
        <h3
          className={
            'text-center text-4xl md:text-5xl font-bold text-secondary text-balance'
          }
        >
          Gain The{' '}
          <span className="text-white bg-primary rounded-lg px-1 lg:py-1 text-nowrap">
            Competitive
          </span>{' '}
          Edge
        </h3>
        <div
          className={
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 xl:gap-12 mt-10 lg:mt-[62px]'
          }
        >
          <div className={'relative pb-20 flex flex-col'}>
            <Image
              src={highschool}
              alt="Highschool"
              className="mx-auto"
              quality={100}
            />
            <p className={'text-[28px] text-black font-bold text-center mt-4'}>
              Highschool
            </p>
            <p
              className={
                ' text-center text-[19px] leading-[25px] font-light text-pretty mt-[7px]'
              }
            >
              Increase recruitment opportunities, stand out to college scouts,
              and build a professional image early on
            </p>
            <Button className="absolute bottom-[3px] left-0 right-0 text-lg mx-auto mt-4 md:h-[53px] rounded-[10px] px-[30px]">
              Learn More
            </Button>
          </div>
          <div className={'relative pb-20 flex flex-col'}>
            <Image
              src={college}
              alt="College"
              className="mx-auto"
              quality={100}
            />
            <p className={'text-[28px] text-black font-bold text-center mt-4'}>
              College
            </p>
            <p
              className={
                ' text-center text-[19px] leading-[25px] font-light text-pretty mt-[7px]'
              }
            >
              Attract NIL deals, enhance player marketability, boost visibility
              and prepare for professional opportunities
            </p>
            <Button className="absolute bottom-[3px] left-0 right-0 text-lg mx-auto mt-4 md:h-[53px] rounded-[10px] px-[30px]">
              Learn More
            </Button>
          </div>
          <div className={'relative pb-20 flex flex-col'}>
            <Image
              src={professional}
              alt="Profprofessional"
              className="mx-auto"
              quality={100}
            />
            <p className={'text-[28px] text-black font-bold text-center mt-4'}>
              Profprofessional
            </p>
            <p
              className={
                ' text-center text-[19px] leading-[25px] font-light text-pretty mt-[7px]'
              }
            >
              Maximize endorsement deals, turn achievements into long-term value
              and build a profitable legacy
            </p>
            <Button className="absolute bottom-[3px] left-0 right-0 text-lg mx-auto mt-4 md:h-[53px] rounded-[10px] px-[30px]">
              Learn More
            </Button>
          </div>
          <div className={'relative pb-20 flex flex-col'}>
            <Image
              src={retired}
              alt="Retretired"
              className="mx-auto"
              quality={100}
            />
            <p className={'text-[28px] text-black font-bold text-center mt-4'}>
              Retretired
            </p>
            <p
              className={
                ' text-center text-[19px] leading-[25px] font-light text-pretty mt-[7px]'
              }
            >
              Smoothly transition into securing post-career ventures in
              business, media, coaching, and philanthropy
            </p>
            <Button className="absolute bottom-[3px] left-0 right-0 text-lg mx-auto mt-4 md:h-[53px] rounded-[10px] px-[30px]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageSection2
