import React from 'react'
import background from './images/background.jpg'
import Image from 'next/image'
import Button from '@/app/components/Button'

const HomepageSection6 = () => {
  return (
    <div className={'pb-10 pt-10 md:pt-[113px] md:pb-[108px] relative'}>
      <div className={'container md:px-6 lg:px-10 xl:px-0 '}>
        <div className={'flex flex-col gap-7'}>
          <h3
            className={
              'text-4xl md:text-5xl font-bold text-secondary text-center'
            }
          >
            Athlete Marketing Playbook
          </h3>
          <p className={'text-xl text-center'}>
            Athletes with larger social media followings attract more
            sponsorship opportunities. Maximize your marketability and follow
            the game plan to achieve online greatness.
          </p>
          <Button className="text-lg mt-4 md:h-[53px] rounded-[10px] px-[30px] mx-auto">
            Free Download
          </Button>
        </div>
      </div>
      <Image
        src={background}
        alt="background image"
        quality={100}
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />
    </div>
  )
}

export default HomepageSection6
