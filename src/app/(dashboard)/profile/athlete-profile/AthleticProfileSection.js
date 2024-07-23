'use client'
import Button from '@/app/components/Button'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import React, { useState } from 'react'
import {
  listAthleticAccolades,
  listDiscipline,
  listExperience,
  listLeagueConferences,
  listPosition,
  listPreviousTeams,
} from '../listOfArray'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import SectionContainer from '../SectionContainer'
import { updateProfileInformation } from '../actions'
import Icon_running from '@/app/components/icons/Icon_running'
import Toast from '@/app/components/Toast'

const AthleticProfileSection = ({ user }) => {
  const [loading, setloading] = useState(false)
  const [position, setposition] = useState(user?.position)
  const [previousTeams, setpreviousTeams] = useState(user?.previousTeams)
  const [experience, setexperience] = useState(user?.experience)
  const [leaguesAndConferences, setleaguesAndConferences] = useState(
    user?.leaguesAndConferences
  )
  const [toast, settoast] = useState(null)
  const [athleticAccolades, setathleticAccolades] = useState(
    user?.athleticAccolades
  )
  const [discipline, setdiscipline] = useState(user?.discipline)
  const handleSubmit = async () => {
    const data = {
      position,
      previousTeams,
      experience,
      leaguesAndConferences,
      athleticAccolades,
      discipline,
    }
    setloading(true)
    const { error } = await updateProfileInformation({ id: user?.id, data })
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    } else {
      setloading(false)
      settoast({
        description: 'Update successful',
        status: 'success',
      })
    }
  }
  return (
    <SectionContainer data={{ title: 'Athletic profile', Icon: Icon_running }}>
      <Toast parameters={{ toast, settoast }} />
      <div className={'flex flex-col gap-4'}>
        <div className={''}>
          <p className={'mb-1'}>Position</p>
          <Select_Custom
            parameters={{
              options: listPosition,
              selectedItem: position,
              setselectedItem: setposition,
              containerHeight: 220,
              multiSelect: true,
              classModalId: 'clt-position',
            }}
          />
        </div>
        <div className={''}>
          <p className={'mb-1'}>Previous Teams</p>
          <Select_Custom
            parameters={{
              options: listPreviousTeams,
              selectedItem: previousTeams,
              setselectedItem: setpreviousTeams,
              containerHeight: 220,
              multiSelect: true,
              classModalId: 'clt-previousTeams',
            }}
          />
        </div>
        <div className={''}>
          <p className={'mb-1'}>League & Conferences</p>
          <Select_Custom
            parameters={{
              options: listLeagueConferences,
              selectedItem: leaguesAndConferences,
              setselectedItem: setleaguesAndConferences,
              containerHeight: 220,
              multiSelect: true,
              classModalId: 'clt-leaguesAndConferences',
            }}
          />
        </div>
        <div className={''}>
          <p className={'mb-1'}>Athletic Accolades</p>
          <Select_Custom
            parameters={{
              options: listAthleticAccolades,
              selectedItem: athleticAccolades,
              setselectedItem: setathleticAccolades,
              containerHeight: 220,
              multiSelect: true,
              classModalId: 'clt-athleticAccolades',
            }}
          />
        </div>
        <div className={''}>
          <p className={'mb-1'}>Experience</p>
          <Select_Custom
            parameters={{
              options: listExperience,
              selectedItem: experience,
              setselectedItem: setexperience,
              containerHeight: 220,
              classModalId: 'clt-experience',
            }}
          />
        </div>
        <div className={''}>
          <p className={'mb-1'}>Athletic Accolades</p>
          <Select_Custom
            parameters={{
              options: listDiscipline,
              selectedItem: discipline,
              setselectedItem: setdiscipline,
              containerHeight: 220,
              multiSelect: true,
              classModalId: 'clt-discipline',
            }}
          />
        </div>
        <Button onClick={handleSubmit} className="px-10 relative ml-auto">
          Update Athletic Profile
          {loading && (
            <Icon_spinner className="top-0 bottom-0 right-3 my-auto absolute animate-spin" />
          )}
        </Button>
      </div>
    </SectionContainer>
  )
}

export default AthleticProfileSection
