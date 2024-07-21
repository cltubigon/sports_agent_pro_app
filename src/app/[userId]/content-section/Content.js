import React from 'react'
import Sec1 from './col-1/Sec1'
import AthleteAbout from './col-1/About'
import AthleteInterests from './col-1/Interests'

const Content = ({ person }) => {
  return (
    <div className={'py-3 md:py-5'}>
      <div
        className={
          'max-w-[1500px] mx-auto px-3 md:px-6 2xl:px-0 flex flex-col md:flex-row md:gap-4 lg:gap-20'
        }
      >
        {/* First Column */}
        <div className={'divide-y-[1px] divide-neutral-400 w-full'}>
          <Sec1 person={person} />
          <AthleteAbout person={person} />
          <AthleteInterests person={person} />
        </div>
        {/* Second Column */}
        <div
          className={
            'flex flex-col gap-6 min-w-full md:min-w-[280px] lg:min-w-[358px] xl:min-w-[418px]'
          }
        >
          <div
            className={
              'flex flex-col justify-center h-[400px] rounded-md border-[1px] border-neutral-400 shadow-md'
            }
          >
            <p className={'font-bold text-secondary text-lg text-center'}>
              Coming Soon!
            </p>
          </div>
          <div
            className={
              'flex flex-col justify-center h-[184px] rounded-md border-[1px] border-neutral-400 shadow-md'
            }
          >
            <p className={'font-bold text-secondary text-lg text-center'}>
              Coming Soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
