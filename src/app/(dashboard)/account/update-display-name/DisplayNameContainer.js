'use client'
import Button from '@/app/components/Button'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { updateDisplayName } from './actions'
import Toast from '@/app/components/Toast'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'

const DisplayNameContainer = ({ currentUser }) => {
  const [loading, setloading] = useState(false)
  const [toast, settoast] = useState(null)

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm()

  const displayNameField = watch('displayName')
  const display_name = currentUser?.display_name

  const onSubmit = async (data) => {
    setloading(true)
    const { data: userData, error } = await updateDisplayName({
      ...data,
      id: currentUser?.id,
    })
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
    if (userData) {
      settoast({
        description: 'Your name is set.',
        status: 'success',
      })
    }
    setloading(false)
  }
  return (
    <>
      <Toast parameters={{ toast, settoast }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 overflow-hidden">
          <Input
            id="displayName"
            placeholder="Enter your name"
            // disabled={display_name && true}
            defaultValue={capitalizeAllFirstLetter(display_name) || undefined}
            className="border-neutral-200 placeholder:text-neutral-200"
            {...register('displayName', {
              required: 'This is required',
            })}
            error={errors?.displayName?.message}
          />
          <Button
            type="submit"
            disabled={!displayNameField}
            className={`h-auto ${
              displayNameField ? 'w-[114px]' : 'w-0 -mr-[88px]'
            } relative`}
          >
            Update{' '}
            {loading && (
              <Icon_spinner className="animate-spin transition-all duration-700" />
            )}
          </Button>
        </div>
      </form>
    </>
  )
}

export default DisplayNameContainer
