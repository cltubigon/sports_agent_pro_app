'use client'
import Button from '@/app/components/Button'
import LoginSignupContainer from '@/app/components/LoginSignupContainer'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Toast from '@/app/components/Toast'
import { useSearchParams } from 'next/navigation'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import InputPasswordVisibility from '@/app/components/inputsFields/InputGroup/InputPasswordVisibility'
import { createClient } from '@/config/supabase/supabaseClient'

const ClientResetPassword = () => {
  const { register, handleSubmit, formState } = useForm()
  const [showPassword, setshowPassword] = useState(null)
  const [toast, settoast] = useState(null)
  const [loading, setloading] = useState(null)

  const { errors } = formState
  const onSubmit = async (data) => {
    const supabase = createClient()
    setloading(true)
    const { password, confirmPassword } = data
    if (password !== confirmPassword) {
      settoast({
        description: 'Passwords did not match',
        status: 'error',
      })
      setloading(false)
      return
    }

    const { data: updatedUser, error } = await supabase.auth.updateUser({
      password: password,
    })
    if (updatedUser) {
      settoast({
        description: 'Successfully updated your password!',
        status: 'success',
        redirect: '/dashboard',
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
        <div className={'flex flex-col gap-4 w-full'}>
          <div>
            <label htmlFor="password">Password:</label>
            <InputGroup>
              <Input
                error={errors?.password?.message}
                type={!showPassword ? 'password' : 'text'}
                className="border-[#D1D5DB]"
                id="password"
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <InputPasswordVisibility onClick={showHideClicked}>
                {!showPassword ? 'show' : 'hide'}
              </InputPasswordVisibility>
            </InputGroup>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Input
              error={errors?.confirmPassword?.message}
              type={!showPassword ? 'password' : 'text'}
              className="border-[#D1D5DB]"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Confirm password',
              })}
            />
          </div>
          <Button type="submit" className="w-full">
            <div className={'relative'}>
              Reset Password{' '}
              {loading && (
                <Icon_spinner className="animate-spin absolute right-[-35px] top-0 bottom-0 my-auto" />
              )}
            </div>
          </Button>
        </div>
      </form>
    </LoginSignupContainer>
  )
}

export default ClientResetPassword
