'use client'
import Button from '@/app/components/Button'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import Textarea from '@/app/components/inputsFields/Textrea'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import { listEthnicity, listInterests, listLanguages } from '../listOfArray'
import { updateProfileInformation } from '../actions'
import SectionContainer from '../SectionContainer'
import Icon_user_details from '@/app/components/icons/Icon_user_details'
import Toast from '@/app/components/Toast'

const AboutYou = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [loading, setloading] = useState(false)
  const [identifiers, setidentifiers] = useState(user?.identifiersInterests)
  const [language, setlanguage] = useState(user?.language)
  const [ethnicity, setethnicity] = useState(user?.ethnicity)
  const [toast, settoast] = useState(null)

  const onSubmit = async (formVal) => {
    const data = {
      ...formVal,
      identifiersInterests: identifiers,
      language,
      ethnicity,
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
    <SectionContainer data={{ title: 'About you', Icon: Icon_user_details }}>
      <Toast parameters={{ toast, settoast }} />
      <p className={'-mt-4 text-sm'}>
        Get discovered by adding more profile information.
      </p>

      <p className={'mt-4 font-bold'}>Bio</p>
      <p className={'mb-4 text-sm'}>
        Tell others more about you. Consider linking websites, charities, or
        articles.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-4'}>
          <Textarea
            id="bio"
            defaultValue={user?.bio}
            placeholder="Bio"
            {...register('bio', {
              required: 'Bio is required',
            })}
            error={errors?.bio?.message}
          />
          <div className={''}>
            <p className={'mb-1'}>Identifiers / Interests</p>
            <Select_Custom
              parameters={{
                options: listInterests,
                selectedItem: identifiers,
                setselectedItem: setidentifiers,
                containerHeight: 220,
                multiSelect: true,
                classModalId: 'clt-identifiers',
              }}
            />
          </div>
          <div className={''}>
            <p className={'mb-1'}>Language</p>
            <Select_Custom
              parameters={{
                options: listLanguages,
                selectedItem: language,
                setselectedItem: setlanguage,
                containerHeight: 220,
                multiSelect: true,
                classModalId: 'clt-language',
              }}
            />
          </div>
          <div className={''}>
            <p className={'mb-1'}>Ethnicity</p>
            <Select_Custom
              parameters={{
                options: listEthnicity,
                selectedItem: ethnicity,
                setselectedItem: setethnicity,
                containerHeight: 220,
                multiSelect: true,
                classModalId: 'clt-ethnicity',
              }}
            />
          </div>
          <Button type="submit" className="px-10 relative ml-auto">
            Update Bio
            {loading && (
              <Icon_spinner className="top-0 bottom-0 right-3 my-auto absolute animate-spin" />
            )}
          </Button>
        </div>
      </form>
    </SectionContainer>
  )
}

export default AboutYou
