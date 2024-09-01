'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { restrictedPathsFooter } from '@/app/lib/restrictFooterNavigation'
import logo from '@/app/images/SAP_logo.png'
import Image from 'next/image'
import Icon_facebook2 from '../../icons/Icon_facebook2'
import Icon_instagram from '../../icons/Icon_instagram'
import Icon_youtube from '../../icons/Icon_youtube'
import Icon_LinkedIn2 from '../../icons/Icon_LinkedIn2'
import Input from '../../inputsFields/InputGroup/Input'
import InputGroup from '../../inputsFields/InputGroup/InputGroup'
import Icon_right_arrow from '../../icons/Icon_right_arrow'

const Footer = () => {
  const pathName = usePathname()
  const restricted = restrictedPathsFooter.some((restrictedPath) =>
    pathName.includes(restrictedPath)
  )
  if (restricted) return

  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <div
        className={'pt-10 pb-5 md:pt-[99px] md:pb-5 bg-secondary text-white'}
      >
        <div
          className={
            'max-w-[1320px] w-full mx-auto px-3 md:px-6 lg:px-10 xl:px-10 flex flex-col gap-10 lg:gap-20'
          }
        >
          <div className={'flex flex-col gap-10 xl:flex-row justify-between'}>
            <div className={'xl:w-[600px]'}>
              <div className={'flex flex-col gap-6 xl:max-w-[410px]'}>
                <Image src={logo} alt="Sports Agent Pro logo" quality={100} />
                <p className={'font-extralight text-xl'}>
                  Sports Agent Pro helps athletes build powerful personal
                  brands, maximize NIL opportunities, and plan successful
                  post-sports careers. We empower athletes to achieve their full
                  potential on and off the field.
                </p>
                <div className={'flex gap-5'}>
                  <div
                    className={
                      'relative size-[50px] text-black bg-white rounded-full'
                    }
                  >
                    <Icon_facebook2 className="absolute top-0 right-0 bottom-0 left-0 m-auto" />
                  </div>
                  <div
                    className={
                      'relative size-[50px] text-black bg-white rounded-full'
                    }
                  >
                    <Icon_instagram className="absolute top-0 right-0 bottom-0 left-0 m-auto" />
                  </div>
                  <div
                    className={
                      'relative size-[50px] text-black bg-white rounded-full'
                    }
                  >
                    <Icon_LinkedIn2 className="absolute top-0 right-0 bottom-0 left-0 m-auto" />
                  </div>
                  <div
                    className={
                      'relative size-[50px] text-black bg-white rounded-full'
                    }
                  >
                    <Icon_youtube className="absolute top-0 right-0 bottom-0 left-0 m-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                'flex justify-between gap-10 lg:gap-[81px] flex-col lg:flex-row'
              }
            >
              <div className={'flex flex-col w-fit'}>
                <p className={'font-bold text-[28px] mb-[13px]'}>Resources</p>
                <div className={'flex flex-col text-xl font-extralight gap-3'}>
                  <p className={''}>Canva</p>
                  <p className={''}>E-Learning</p>
                  <p className={''}>Free</p>
                </div>
              </div>
              <div className={'flex flex-col w-fit'}>
                <p className={'font-bold text-[28px] mb-[13px]'}>Services</p>
                <div className={'flex flex-col text-xl font-extralight gap-3'}>
                  <p className={''}>{`FAQ's`}</p>
                  <p className={''}>Websites</p>
                  <p className={''}>Social Media</p>
                  <p className={'text-nowrap'}>Graphic Design</p>
                </div>
              </div>
              <div className={'flex flex-col w-fit max-w-[328px]'}>
                <p className={'font-bold text-[28px] mb-[13px]'}>Join Us</p>
                <div className={'flex flex-col text-xl font-extralight gap-3'}>
                  <p className={'mb-3'}>
                    Enter to have a chance at winning exclusive merch
                  </p>
                  <InputGroup data-icon="right">
                    <Input
                      placeholder="Email Address"
                      className="placeholder:text-black placeholder:text-xl placeholder:font-normal md:h-[51px]"
                    />
                    <Icon_right_arrow className="size-6 text-primary absolute top-0 bottom-0 my-auto right-[18px]" />
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex font-extralight flex-col lg:flex-row text-xl justify-between border-t border-white pt-6 gap-3'
            }
          >
            <p className={''}>©{year}</p>
            <p className={''}>All Rights Reserved.</p>
            <div className={'flex gap-3 lg:gap-[44px] flex-col md:flex-row'}>
              <p className={''}>Data Protection Policy</p>
              <p className={''}>Terms of Service</p>
              <p className={''}>Privacy Policy</p>
              <p className={''}>Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
