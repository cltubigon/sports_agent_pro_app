'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import basketball from './images/basketball-bg.jpg'
import basketaball2 from './images/basketball.png'
import basketballtext from './images/basketball-text.png'
import baseball from './images/baseball-bg.jpg'
import baseball2 from './images/baseball.png'
import baseballtext from './images/baseball-text.png'
import football from './images/football-bg.jpg'
import football2 from './images/football.png'
import footballtext from './images/football-text.png'
import soccer from './images/soccer-bg.jpg'
import soccer2 from './images/soccer.png'
import soccertext from './images/soccer-text.png'
import useIntersection from '@/app/Hooks/useIntersection'

const HomepageSection4 = () => {
  const img1Ref = useRef(null)
  const { isVisible } = useIntersection(img1Ref)

  return (
    <div className={'pt-10 pb-10 md:pt-[65px] md:pb-20 overflow-hidden'}>
      <div className={'max-w-[1380px] mx-auto px-3 md:px-6 lg:px-10 xl:px-5'}>
        <h3
          className={
            'text-center text-4xl md:text-5xl font-bold text-secondary text-balance mb-12'
          }
        >
          Branding Packages for Every
          <span className="text-white bg-primary rounded-lg px-1 lg:py-1 text-nowrap">
            Sport
          </span>
        </h3>
        <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'}>
          <div className={' mx-auto'}>
            <div className={'relative'}>
              <Image
                src={basketball}
                alt="basketball"
                quality={100}
                className="shadow-custom2 rounded-[10px]"
              />
              <Image
                src={basketaball2}
                alt="basketball"
                quality={100}
                className="absolute -top-[44px] -right-5 min-w-[447px]"
              />
              <Image
                ref={img1Ref}
                src={basketballtext}
                alt="basketball"
                quality={100}
                className={`absolute bottom-[31px] right-[14px] mx-auto transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              />
            </div>
            <p className={'text-[28px] font-bold mt-5'}>Basketball</p>
          </div>
          <div className={' mx-auto'}>
            <div className={'relative'}>
              <Image
                src={baseball}
                alt="baseball"
                quality={100}
                className="shadow-custom2 rounded-[10px]"
              />
              <Image
                src={baseball2}
                alt="baseball"
                quality={100}
                className="absolute top-[14px] -left-5 min-w-[358px]"
              />
              <Image
                src={baseballtext}
                alt="baseball"
                quality={100}
                className={`absolute bottom-[10px] left-0 right-0 mx-auto transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              />
            </div>
            <p className={'text-[28px] font-bold mt-5'}>Baseball</p>
          </div>
          <div className={' mx-auto'}>
            <div className={'relative'}>
              <Image
                src={football}
                alt="football"
                quality={100}
                className="shadow-custom2 rounded-[10px]"
              />
              <Image
                src={football2}
                alt="football"
                quality={100}
                className="absolute top-[10px] -left-5 min-w-[358px]"
              />
              <Image
                src={footballtext}
                alt="football"
                quality={100}
                className={`absolute bottom-[34px] left-0 right-0 mx-auto transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              />
            </div>
            <p className={'text-[28px] font-bold mt-5'}>Football</p>
          </div>
          <div className={' mx-auto'}>
            <div className={'relative'}>
              <Image
                src={soccer}
                alt="soccer"
                quality={100}
                className="shadow-custom2 rounded-[10px]"
              />
              <Image
                src={soccer2}
                alt="soccer"
                quality={100}
                className="absolute -top-[34px] -left-[10px] min-w-[358px]"
              />
              <Image
                src={soccertext}
                alt="soccer"
                quality={100}
                className={`absolute bottom-[29px] left-0 right-0 mx-auto transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              />
            </div>
            <p className={'text-[28px] font-bold mt-5'}>Soccer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageSection4
