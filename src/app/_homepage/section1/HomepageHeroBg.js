'use client'
import footballPlayer from '@/app/images/football-player.png'
import soccerPlayer from '@/app/images/soccer-player.png'
import tennisPlayer from '@/app/images/tennis-player.png'
import flame from '@/app/images/Flame.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const HomepageHeroBg = () => {
  const [hasStarted, sethasStarted] = useState(false)
  useEffect(() => {
    sethasStarted(true)
  }, [])
  return (
    <>
      <Image
        src={tennisPlayer}
        quality={100}
        alt="tennisPlayer"
        className={`absolute 2xl:min-w-[508px] ${
          hasStarted
            ? 'xl:translate-x-[200px] 2xl:translate-x-[400px] -xl:translate-y-[130px] 2xl:translate-y-[130px]'
            : 'xl:translate-x-[260px] 2xl:translate-x-[330px] xl:translate-y-[0px] 2xl:translate-y-[100px]'
        } transition-all duration-700`}
      />
      <Image
        src={soccerPlayer}
        quality={100}
        alt="soccer player"
        className={`absolute 2xl:min-w-[553px] ${
          hasStarted
            ? '-xl:translate-x-[100px] 2xl:-translate-x-[140px] xl:translate-y-[100px] 2xl:translate-y-[110px]'
            : 'xl:translate-x-[50px] xl:translate-y-[150px] 2xl:-translate-x-[80px] 2xl:translate-y-[70px]'
        } transition-all duration-700`}
      />
      <Image
        src={footballPlayer}
        quality={100}
        alt="football player"
        className="absolute bottom-0 xl:left-[160px] 2xl:-left-[110px] 2xl:min-w-[852px]"
      />
      <Image
        src={flame}
        quality={100}
        alt="flame background"
        className={`mix-blend-lighten absolute bottom-0 -left-[370px] xl:min-w-[1000px] 2xl:min-w-[1308px] transition-all duration-700 ${
          !hasStarted ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </>
  )
}

export default HomepageHeroBg
