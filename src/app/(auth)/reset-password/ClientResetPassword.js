'use client'
import LoginSignupContainer from '@/app/components/LoginSignupContainer'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Toast from '@/app/components/Toast'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import InputPasswordVisibility from '@/app/components/inputsFields/InputGroup/InputPasswordVisibility'
import { createClient } from '@/config/supabase/supabaseClient'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import Icon_eye_opened from '@/app/components/icons/Icon_eye_opened'
import Icon_eye_closed from '@/app/components/icons/Icon_eye_closed'
import ButtonLoader from '@/app/components/ButtonLoader'

const ClientResetPassword = () => {
  const { register, handleSubmit, formState } = useForm()
  const [showPassword, setshowPassword] = useState(null)
  const [toast, settoast] = useState(null)
  const [loading, setloading] = useState(null)

  const { errors } = formState
  const onSubmit = async (data) => {
    const supabase = createClient()
    setloading({ id: 'resetpassword' })
    const { password, confirmPassword } = data
    if (password !== confirmPassword) {
      settoast({
        description: 'Passwords did not match',
        status: 'error',
      })
      setloading(null)
      return
    }

    const { data: updatedUser, error } = await supabase.auth.updateUser({
      password: password,
    })
    if (updatedUser) {
      settoast({
        description: 'Successfully updated your password!',
        status: 'success',
        redirect: '/network',
        duration: 1700,
      })
    }
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
    setloading(false)
  }

  const showHideClicked = () => {
    setshowPassword(() => !showPassword)
  }

  return (
    <LoginSignupContainer parameters={{ formTitle: `Reset password` }}>
      <Toast parameters={{ toast, settoast }} />
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-5'}>
          <div className={'w-full flex flex-col'}>
            <label
              htmlFor="password"
              className={'text-lg mb-[2px] text-neutral-400'}
            >
              Password<span className="text-primary">*</span>
            </label>
            <InputGroup data-icon="leftright">
              <Input
                error={errors?.password?.message}
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <Icon_padlock className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300 size-[18px]" />
              <InputPasswordVisibility onClick={showHideClicked}>
                {!showPassword ? (
                  <Icon_eye_opened className="size-4" />
                ) : (
                  <Icon_eye_closed className="size-4" />
                )}
              </InputPasswordVisibility>
            </InputGroup>
          </div>
          <div className={'w-full flex flex-col'}>
            <label
              htmlFor="confirmPassword"
              className={'text-lg mb-[2px] text-neutral-400'}
            >
              Confirm password<span className="text-primary">*</span>
            </label>
            <InputGroup data-icon="leftright">
              <Input
                error={errors?.confirmPassword?.message}
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                {...register('confirmPassword')}
              />
              <Icon_padlock className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300 size-[18px]" />
            </InputGroup>
          </div>
        </div>
        <ButtonLoader
          type="submit"
          className="mt-5"
          parameters={{ id: 'resetpassword', loading, setloading }}
        >
          Reset password
        </ButtonLoader>
      </form>
    </LoginSignupContainer>
  )
}

export default ClientResetPassword
