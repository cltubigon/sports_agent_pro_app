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
import { formatDateToUTCString } from '@/utilities/date-and-time/formatDateToUTCString'
import { revalidatePathCustom, updateBasicInfo } from './actions'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import DateInput from '@/app/components/inputsFields/DateInput'
import SectionContainer from './SectionContainer'
import Icon_user_details2 from '@/app/components/icons/Icon_user_details2'
import Toast from '@/app/components/Toast'

const BasicInfo = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [loading, setloading] = useState(false)
  const [whichBestDescribesYou, setwhichBestDescribesYou] = useState(
    user?.whichBestDescribesYou
  )
  const [genderIdentity, setgenderIdentity] = useState(user?.genderIdentity)
  const [sports, setsports] = useState(user?.sports)
  const [toast, settoast] = useState(null)
  const [currentTeams, setcurrentTeams] = useState(user?.currentTeams)

  const onSubmit = async (formVal) => {
    const data = {
      ...formVal,
      whichBestDescribesYou,
      genderIdentity,
      sports,
      currentTeams,
      dateOfBirth: formatDateToUTCString(formVal?.dateOfBirth),
    }
    setloading(true)
    const { error } = await updateBasicInfo({ id: user?.id, data })
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
    <SectionContainer data={{ title: 'Basic info', Icon: Icon_user_details2 }}>
      <Toast parameters={{ toast, settoast }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col md:flex-row gap-4 md:gap-5'}>
            <Input
              id="firstName"
              defaultValue={user?.firstName}
              placeholder="First name"
              {...register('firstName', {
                required: 'First name is required',
              })}
              error={errors?.firstName?.message}
            />
            <Input
              id="lastName"
              defaultValue={user?.lastName}
              placeholder="Last name"
              {...register('lastName', {
                required: 'Last name is required',
              })}
              error={errors?.lastName?.message}
            />
          </div>
          <div className={''}>
            <p className={'mb-1'}>Which best describes you?</p>
            <Select_Custom
              parameters={{
                options: listWhichBestDescribesYou,
                selectedItem: whichBestDescribesYou,
                setselectedItem: setwhichBestDescribesYou,
                containerHeight: 220,
                classModalId: 'clt-describes-you',
              }}
            />
          </div>
          <div className={''}>
            <p className={'mb-1'}>Date of birth</p>
            {/* <Input
              type="date"
              defaultValue={user?.dateOfBirth}
              id="dateOfBirth"
              {...register('dateOfBirth')}
            /> */}
            <DateInput
              default={user?.dateOfBirth}
              {...register('dateOfBirth')}
            />
          </div>
          <div className={''}>
            <p className={'mb-1'}>Gender identity</p>
            <Select_Custom
              parameters={{
                options: listGenderIdentities,
                selectedItem: genderIdentity,
                setselectedItem: setgenderIdentity,
                containerHeight: 220,
                classModalId: 'clt-gender',
              }}
            />
          </div>
          <div className={''}>
            <p className={'mb-1'}>Sports</p>
            <Select_Custom
              parameters={{
                options: listSports,
                selectedItem: sports,
                setselectedItem: setsports,
                containerHeight: 220,
                classModalId: 'clt-sports',
                multiSelect: true,
              }}
            />
          </div>
          <div className={''}>
            <p className={'mb-1'}>Current Team</p>
            <Select_Custom
              parameters={{
                options: listCurrentTeam,
                selectedItem: currentTeams,
                setselectedItem: setcurrentTeams,
                containerHeight: 220,
                classModalId: 'clt-current-team',
                multiSelect: true,
              }}
            />
          </div>
          <Button type="submit" className="px-10 relative ml-auto">
            Update Basic Info
            {loading && (
              <Icon_spinner className="top-0 bottom-0 right-3 my-auto absolute animate-spin" />
            )}
          </Button>
        </div>
      </form>
    </SectionContainer>
  )
}

export default BasicInfo
