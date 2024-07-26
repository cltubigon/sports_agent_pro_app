'use client'
import Button from '@/app/components/Button'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  listBrandCategories,
  listBrandWhichBestDescribesYou,
  listCurrentTeam,
  listGenderIdentities,
  listSports,
  listWhichBestDescribesYou,
} from '../listOfArray'
import { updateProfileInformation } from '../actions'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import SectionContainer from '../SectionContainer'
import Icon_user_details2 from '@/app/components/icons/Icon_user_details2'
import Toast from '@/app/components/Toast'

const BrandProfile = ({ user }) => {
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
  const [brandCategory, setbrandCategory] = useState(user?.brandCategory)

  const onSubmit = async (formVal) => {
    const data = {
      ...formVal,
      whichBestDescribesYou,
      genderIdentity,
      sports,
      currentTeams,
      brandCategory,
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
    <SectionContainer data={{ title: 'Basic info', Icon: Icon_user_details2 }}>
      <Toast parameters={{ toast, settoast }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-4 pb-10'}>
          <div className={'flex flex-col md:flex-row gap-4 md:gap-5'}>
            <Input
              id="first_name"
              defaultValue={user?.first_name}
              placeholder="First name"
              {...register('first_name', {
                required: 'First name is required',
              })}
              error={errors?.first_name?.message}
            />
            <Input
              id="last_name"
              defaultValue={user?.last_name}
              placeholder="Last name"
              {...register('last_name', {
                required: 'Last name is required',
              })}
              error={errors?.last_name?.message}
            />
          </div>
          <div className={''}>
            <p className={'mb-1'}>Which best describes you?</p>
            <Select_Custom
              parameters={{
                options: listBrandWhichBestDescribesYou,
                selectedItem: whichBestDescribesYou,
                setselectedItem: setwhichBestDescribesYou,
                containerHeight: 220,
                classModalId: 'clt-describes-you',
              }}
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
          <div className={''}>
            <p className={'mb-1'}>Brand category</p>
            <Select_Custom
              parameters={{
                options: listBrandCategories,
                selectedItem: brandCategory,
                setselectedItem: setbrandCategory,
                containerHeight: 220,
                classModalId: 'clt-brand-categories',
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

export default BrandProfile