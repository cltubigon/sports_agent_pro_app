'use client'
import Button from '@/app/components/Button'
import Divider from '@/app/components/Divider'
import LoginSignupContainer from '@/app/components/LoginSignupContainer'
import Toast from '@/app/components/Toast'
import Icon_google from '@/app/components/icons/Icon_google'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import InputPasswordVisibility from '@/app/components/inputsFields/InputGroup/InputPasswordVisibility'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import { signup } from './actions'
import { createClient } from '@/config/supabase/supabaseClient'

const ClientSignup = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const [toast, settoast] = useState(null)
  const [loading, setloading] = useState(null)
  const [showPassword, setshowPassword] = useState(false)

  const onSubmit = async (data) => {
    const { email, password, confirmPassword } = data
    if (password !== confirmPassword) {
      settoast({
        description: 'Passwords did not match',
        status: 'error',
      })
      return
    }
    setloading(true)
    const error = await signup(data)
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
      setloading(false)
    }
  }

  const showHideClicked = () => {
    setshowPassword(() => !showPassword)
  }

  const handleLoginWithOAuth = async (provider) => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + '/confirm-signup/callback',
      },
    })
  }
  return (
    <LoginSignupContainer parameters={{ formTitle: 'Create an account' }}>
      <Toast parameters={{ toast, settoast }} />
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-4 w-full'}>
          <div>
            <label htmlFor="email">Email address:</label>
            <Input
              error={errors?.email?.message}
              className="border-[#D1D5DB]"
              id="email"
              {...register('email', {
                required: 'Enter your email address',
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />
          </div>
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
          <div>
            <Button type="submit" className="w-full">
              <div className={'relative'}>
                Create Account{' '}
                {loading && (
                  <Icon_spinner className="animate-spin absolute right-[-35px] top-0 bottom-0 my-auto" />
                )}
              </div>
            </Button>
            <Link href={'/login'}>
              <p className={'mt-1 text-center text-primary'}>
                Already have an account?
              </p>
            </Link>
          </div>
          <div className="my-2">
            <Divider className="border-b-[1px] border-[#E5E7EB] mt-3">
              <span className="px-4">Or continue with</span>
            </Divider>
          </div>
          <div className={'flex gap-4 select-none'}>
            <div
              className={
                'flex cursor-pointer rounded-md w-full justify-center shadow-sm border-[1px] py-[10px] px-3 border-[#D1D5DB] gap-2'
              }
              onClick={() => handleLoginWithOAuth('google')}
            >
              <Icon_google className="size-6" />
              Google
            </div>
          </div>
        </div>
      </form>
    </LoginSignupContainer>
  )
}

export default ClientSignup