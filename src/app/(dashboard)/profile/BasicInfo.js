'use client'
import Button from '@/app/components/Button'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  listCurrentTeam,
  listGenderIdentities,
  listSports,
  listWhichBestDescribesYou,
} from './listOfArray'

const BasicInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [whichBestDescribesYou, setwhichBestDescribesYou] = useState([])
  const [genderIdentity, setgenderIdentity] = useState([])
  const [sports, setsports] = useState([])
  const [currentTeams, setcurrentTeams] = useState([])

  const onSubmit = (formVal) => {
    const data = {
      ...formVal,
      whichBestDescribesYou: whichBestDescribesYou[0]?.value,
      genderIdentity: genderIdentity[0]?.value,
      sports,
      currentTeams,
    }
    console.log('data', data)
  }
  return (
    <div className={'rounded-md mt-8 p-4 border-[1px] border-neutral-200'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col md:flex-row gap-4 md:gap-5'}>
            <Input
              id="firstName"
              placeholder="First name"
              {...register('firstName', {
                required: 'First name is required',
              })}
              error={errors?.firstName?.message}
            />
            <Input
              id="lastName"
              placeholder="Last name"
              {...register('lastName', {
                required: 'Last name is required',
              })}
              error={errors?.lastName?.message}
            />
          </div>
          <Select_Custom
            parameters={{
              options: listWhichBestDescribesYou,
              selectedItem: whichBestDescribesYou,
              setselectedItem: setwhichBestDescribesYou,
              containerHeight: 220,
              placeholder: `-- Which best describes you? --`,
              classModalId: 'clt-describes-you',
            }}
          />
          <Input
            type="date"
            id="dateOfBirth"
            placeholder="Date of birth"
            {...register('dateOfBirth')}
          />
          <Select_Custom
            parameters={{
              options: listGenderIdentities,
              selectedItem: genderIdentity,
              setselectedItem: setgenderIdentity,
              containerHeight: 220,
              placeholder: '-- Gender identity --',
              classModalId: 'clt-gender',
            }}
          />
          <Select_Custom
            parameters={{
              options: listSports,
              selectedItem: sports,
              setselectedItem: setsports,
              containerHeight: 220,
              placeholder: '-- Sports --',
              classModalId: 'clt-sports',
              multiSelect: true,
            }}
          />
          <Select_Custom
            parameters={{
              options: listCurrentTeam,
              selectedItem: currentTeams,
              setselectedItem: setcurrentTeams,
              containerHeight: 220,
              placeholder: '-- Current Team --',
              classModalId: 'clt-current-team',
              multiSelect: true,
            }}
          />
          <Button type="submit">Update Basic Info</Button>
        </div>
      </form>
    </div>
  )
}

export default BasicInfo
