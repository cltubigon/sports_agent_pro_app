'use client'
import Button from '@/app/components/Button'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Toast from '@/app/components/Toast'
import { validatePassword } from '@/utilities/validatePassword'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { updatePassword } from './actions'
import { logout } from '@/app/(auth)/signOut/actions'
import InputPasswordVisibility from '@/app/components/inputsFields/InputGroup/InputPasswordVisibility'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'

const ResetPasswordForm = () => {
  const [isLoading, setisLoading] = useState(null)
  const [toast, settoast] = useState(null)
  const [showPassword, setshowPassword] = useState(false)
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState

  const onSubmit = async (data) => {
    const { newPassword, confirmPassword } = data
    if (newPassword !== confirmPassword) {
      settoast({
        description: 'Passwords did not match',
        status: 'error',
      })
      return
    } else {
      setisLoading(true)
      const { error } = await updatePassword({ data })
      setisLoading(false)
      if (error) {
        settoast({
          description: error,
          status: 'error',
        })
        return
      }
      await logout()
    }
  }

  const showHideClicked = () => {
    setshowPassword(() => !showPassword)
  }

  return (
    <div className="w-full">
      <Toast parameters={{ toast, settoast }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-10 px-5 w-full flex flex-col gap-2">
          <h5 className={'text-xl md:text-2xl font-bold mb-2'}>
            Reset your password
          </h5>
          {/* new password */}
          <InputGroup>
            <Input
              id="newPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="New password"
              error={errors?.newPassword?.message}
              {...register('newPassword', {
                required: 'New password is required',
                validate: validatePassword,
              })}
            />
            <InputPasswordVisibility onClick={showHideClicked}>
              {!showPassword ? 'show' : 'hide'}
            </InputPasswordVisibility>
          </InputGroup>
          {/* Old password */}
          <Input
            id="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            error={errors?.confirmPassword?.message}
            {...register('confirmPassword')}
          />
          <Button type="submit" className="mt-2 px-12 relative w-fit">
            Update password{' '}
            {isLoading && (
              <Icon_spinner className="absolute top-0 bottom-0 my-auto right-4 animate-spin" />
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ResetPasswordForm
