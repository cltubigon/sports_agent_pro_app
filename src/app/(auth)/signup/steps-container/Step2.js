'use client'
import Button from '@/app/components/Button'
import Icon_email from '@/app/components/icons/Icon_email'
import Icon_eye_closed from '@/app/components/icons/Icon_eye_closed'
import Icon_eye_opened from '@/app/components/icons/Icon_eye_opened'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import Icon_phone from '@/app/components/icons/Icon_phone'
import Icon_user2 from '@/app/components/icons/Icon_user2'
import Checkbox from '@/app/components/inputsFields/Checkbox'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import InputPasswordVisibility from '@/app/components/inputsFields/InputGroup/InputPasswordVisibility'
import Toast from '@/app/components/Toast'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signup } from '../actions'
import { useStore } from 'zustand'
import signupStore from '@/utilities/store/signupStore'
import ButtonLoader from '@/app/components/ButtonLoader'

const Step2 = () => {
  const { register, handleSubmit, formState } = useForm()
  const { accountType, setsubmittedData } = useStore(signupStore)
  const { errors } = formState
  const [showPassword, setshowPassword] = useState(false)
  const [toast, settoast] = useState(null)
  const [loading, setloading] = useState(null)

  const onSubmit = async (submittedData) => {
    const data = { ...submittedData, accountType }
    if (!accountType) {
      settoast({
        description: 'You must select account type.',
        status: 'error',
      })
      return
    }
    if (!data?.terms) {
      settoast({
        description: 'You must a agree to our terms and conditions to sign up.',
        status: 'error',
      })
      return
    }
    const { email, password, confirmPassword } = data
    if (password !== confirmPassword) {
      settoast({
        description: 'Passwords did not match',
        status: 'error',
      })
      return
    }
    setsubmittedData(data)
    setloading({ id: 'signup' })
    const error = await signup(data)
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
    setloading(null)
  }

  const showHideClicked = () => {
    setshowPassword(() => !showPassword)
  }
  return (
    <div className={'max-sm:py-5 md:h-full flex flex-col justify-center'}>
      <Toast parameters={{ toast, settoast }} />
      <h3
        className={
          'max-sm:text-center font-oswald text-3xl md:text-[50px] leading-[51px] font-bold mb-[29px] max-sm:mt-3'
        }
      >
        CREATE YOUR ACCOUNT
      </h3>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={'flex flex-col gap-5'}
        >
          <div className={'flex flex-col md:flex-row gap-5'}>
            <div className={'w-full flex flex-col'}>
              <label
                htmlFor="first_name"
                className={'text-lg mb-[2px] text-neutral-400'}
              >
                First name<span className="text-primary">*</span>
              </label>
              <InputGroup data-icon="left">
                <Input
                  error={errors?.first_name?.message}
                  id="first_name"
                  {...register('first_name', {
                    required: 'First name is required',
                  })}
                />
                <Icon_user2 className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300" />
              </InputGroup>
            </div>
            <div className={'w-full flex flex-col'}>
              <label
                htmlFor="last_name"
                className={'text-lg mb-[2px] text-neutral-400'}
              >
                Last name<span className="text-primary">*</span>
              </label>
              <InputGroup data-icon="left">
                <Input
                  error={errors?.last_name?.message}
                  id="last_name"
                  {...register('last_name', {
                    required: 'Last name is required',
                  })}
                />
                <Icon_user2 className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300" />
              </InputGroup>
            </div>
          </div>
          <div className={'flex flex-col md:flex-row gap-5'}>
            <div className={'w-full flex flex-col'}>
              <label
                htmlFor="phoneNumber"
                className={'text-lg mb-[2px] text-neutral-400'}
              >
                Phone number<span className="text-primary">*</span>
              </label>
              <InputGroup data-icon="left">
                <Input
                  error={errors?.phoneNumber?.message}
                  id="phoneNumber"
                  type="number"
                  {...register('phoneNumber', {
                    required: 'Phone number is required',
                  })}
                />
                <Icon_phone className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300" />
              </InputGroup>
            </div>
            <div className={'w-full flex flex-col'}>
              <label
                htmlFor="email"
                className={'text-lg mb-[2px] text-neutral-400'}
              >
                Email<span className="text-primary">*</span>
              </label>
              <InputGroup data-icon="left">
                <Input
                  error={errors?.email?.message}
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
                <Icon_email className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300" />
              </InputGroup>
            </div>
          </div>
          <div className={'flex flex-col md:flex-row gap-5'}>
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
          <Checkbox defaultChecked id="terms" {...register('terms')}>
            I agree with Sports Agent Pro{' '}
            <Link href={'#'} className="text-primary">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href={'#'} className="text-primary">
              Privacy Policy
            </Link>
          </Checkbox>
          {/* <Button type="submit" className="mt-[10px] max-sm:mb-6">
            Continue
          </Button> */}
          <ButtonLoader
            type="submit"
            parameters={{ id: 'signup', loading, setloading }}
            className="mt-[10px] max-sm:mb-6"
          >
            CONTINUE
          </ButtonLoader>
        </form>
      </div>
    </div>
  )
}

export default Step2
