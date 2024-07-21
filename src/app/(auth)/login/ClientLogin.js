'use client'
import React, { useState } from 'react'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import { useForm } from 'react-hook-form'
import { login } from './actions'
import Toast from '@/app/components/Toast'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import InputPasswordVisibility from '@/app/components/inputsFields/InputGroup/InputPasswordVisibility'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import OAuthGoogleSignIn from './OAuthGoogleSignIn'
import Icon_eye_opened from '@/app/components/icons/Icon_eye_opened'
import Icon_eye_closed from '@/app/components/icons/Icon_eye_closed'
import Icon_email from '@/app/components/icons/Icon_email'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import ButtonLoader from '@/app/components/ButtonLoader'
import Checkbox from '@/app/components/inputsFields/Checkbox'

const ClientLogin = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: async () => {
      const localData = JSON.parse(localStorage.getItem('saved password'))
      return {
        email: localData?.email,
        password: localData?.password,
        savePassword: localData?.savePassword,
      }
    },
  })
  const { errors } = formState
  const [toast, settoast] = useState(null)
  const [loading, setloading] = useState(false)
  const [showPassword, setshowPassword] = useState(false)

  // useEffect(() => {
  //   setlocalData(JSON.parse(localStorage.getItem('saved password')))
  // }, [])

  const searchParams = useSearchParams().get('next')

  const onSubmit = async (data) => {
    setloading({ id: 'login' })
    const error = await login({ data, redirectTo: searchParams })
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    } else {
      if (data.savePassword) {
        const { email, password } = data
        localStorage.setItem(
          'saved password',
          JSON.stringify({
            email,
            password,
            savePassword: data?.savePassword,
          })
        )
      } else {
        localStorage.removeItem('saved password')
      }
    }
    setloading(null)
  }
  const showHideClicked = () => {
    setshowPassword(() => !showPassword)
  }

  return (
    <>
      <div
        className={`pt-5 pb-[40px] md:pt-20 md:pb-20 md:h-auto lg:h-full flex flex-col justify-center`}
      >
        <h3
          className={
            'font-oswald text-3xl md:text-[50px] leading-[51px] font-bold mb-[30px] max-sm:mt-3'
          }
        >
          LOG IN
        </h3>
        <Toast parameters={{ toast, settoast }} />
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <div className={'flex flex-col gap-4'}>
            <div className={'w-full flex flex-col'}>
              <label
                htmlFor="first_name"
                className={'text-lg mb-[2px] text-neutral-400'}
              >
                Email<span className="text-primary">*</span>
              </label>
              <InputGroup data-icon="left">
                <Input
                  className="border-[#D1D5DB]"
                  error={errors?.email?.message}
                  id="email"
                  {...register('email', {
                    required: 'Enter your email address',
                    pattern: {
                      value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                <Icon_email className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300" />
              </InputGroup>
            </div>
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
              <div className={'flex my-[6px] justify-between'}>
                <Checkbox
                  id="savePassword"
                  className="text-lg text-neutral-400"
                  {...register('savePassword')}
                >
                  Save password
                </Checkbox>
                <Link
                  href={'/forgot-password'}
                  className={'text-lg text-neutral-400 w-fit'}
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div>
              <ButtonLoader
                type="submit"
                parameters={{ id: 'login', loading, setloading }}
              >
                LOG IN
              </ButtonLoader>
            </div>
          </div>
          <p className={'text-lg text-neutral-400 mt-1'}>
            {`Don't have any account? `}
            <Link
              href={'/signup'}
              className="text-primary hover:underline"
              prefetch
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div
        className={`relative min-h-[110px] border-t-[1px] w-full border-neutral-300 flex flex-col justify-center`}
      >
        <p className={'bg-white absolute text-lg -top-4 pr-3 left-0 w-fit'}>
          Or continue with
        </p>
        <OAuthGoogleSignIn className={'max-w-[280px] mr-auto'}>
          Login with Google
        </OAuthGoogleSignIn>
      </div>
    </>
  )
}

export default ClientLogin
