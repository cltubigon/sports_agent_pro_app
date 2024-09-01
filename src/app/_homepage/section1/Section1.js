import Image from 'next/image'
import coloredLogo from '@/app/images/SAP-logo-colored.png'
import heroBg from '@/app/images/hero-bg.jpg'

import HomepageHeroBg from './HomepageHeroBg'
import Button from '@/app/components/Button'

const HomepageSection1 = () => {
  return (
    <div
      className={
        'relative py-10 lg:py-20 xl:py-[unset] sm:h-[90vh] md:h-[70vh] lg:h-[90vh] xl:h-[89vh] 2xl:h-[896px] overflow-hidden'
      }
    >
      <div
        className={
          'max-w-[1500px] 2xl:max-w-[1620px] z-20 mx-auto px-3 md:px-6 2xl:px-0 flex h-full'
        }
      >
        <div
          className={
            'flex flex-col text-white lg:min-w-[840px] text-center justify-center mx-auto'
          }
        >
          <p className={'md:text-xl mb-4 xl:-mt-6'}>
            Allstar Brand Development
          </p>
          <h1
            className={
              'text-4xl md:text-5xl font-bold md:leading-[58px] lg:max-w-[600px] mx-auto lg:leading-tight z-10'
            }
          >
            Build Your{' '}
            <span className="bg-primary rounded-lg px-1 lg:py-1 text-nowrap">
              Athlete Brand
            </span>{' '}
            without Breaking the Bank
          </h1>
          <p className={'text-lg md:text-xl font-light mt-3  lg:max-w-[600px] mx-auto'}>
            Gain more followers, discover new sponsorship opportunities and be
            proud of how you look online when fans search your name.
          </p>
          <Button className="text-lg mx-auto mt-4 md:h-[53px] rounded-[10px] px-[30px]">
            Get Started
          </Button>
        </div>
        <div
          className={
            'hidden xl:block relative min-h-full w-full pointer-events-none select-none'
          }
        >
          <HomepageHeroBg />
        </div>
      </div>
      <Image
        src={heroBg}
        fill
        sizes="100vw"
        quality={100}
        alt="hero-background"
        className="object-cover -z-10"
      />
    </div>
  )
}

export default HomepageSection1
