'use client'
import React, { useEffect, useState } from 'react'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Divider from '@/app/components/Divider'
import Icon_google from '@/app/components/icons/Icon_google'
import Button from '@/app/components/Button'
import Checkbox from '@/app/components/inputsFields/Checkbox'
import { useForm } from 'react-hook-form'
import { handleLoginWithOAuth, login } from './actions'
import Toast from '@/app/components/Toast'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import InputPasswordVisibility from '@/app/components/inputsFields/InputGroup/InputPasswordVisibility'
import LoginSignupContainer from '@/app/components/LoginSignupContainer'
import Link from 'next/link'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import { useSearchParams } from 'next/navigation'
// import Icon_linkedin from '@/app/components/icons/Icon_linkedin'
// import Icon_facebook from '@/app/components/icons/Icon_facebook'

const ClientLogin = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: async () => {
      const localData = JSON.parse(localStorage.getItem('saved password'))
      return {
        email: localData?.myLocalData?.email,
        password: localData?.myLocalData?.password,
      }
    },
  })
  const [toast, settoast] = useState(null)
  const [loading, setloading] = useState(null)
  const [showPassword, setshowPassword] = useState(false)
  const [localData, setlocalData] = useState(null)

  useEffect(() => {
    setlocalData(JSON.parse(localStorage.getItem('saved password')))
  }, [])

  const searchParams = useSearchParams().get('next')

  const onSubmit = (data) => {
    setloading(true)
    const initiateLogin = async () => {
      const error = await login({ data, redirectTo: searchParams })
      if (error) {
        setloading(false)
        settoast({
          description: error,
          status: 'error',
        })
      } else {
        setloading(false)
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
    }
    initiateLogin()
  }
  const showHideClicked = () => {
    setshowPassword(() => !showPassword)
  }

  return (
    <LoginSignupContainer>
      <Toast parameters={{ toast, settoast }} />
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-4'}>
          <div>
            <label htmlFor="email">Email address:</label>
            <Input
              className="border-[#D1D5DB]"
              id="email"
              defaultValue={localData?.email}
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
                type={!showPassword ? 'password' : 'text'}
                defaultValue={localData?.password}
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
            <div className={'flex justify-between mt-1 mb-3'}>
              <Checkbox id="savePassword" {...register('savePassword')}>
                Remember me
              </Checkbox>
              <Link href="/forgot-password">
                <p className={'text-primary select-none'}>Forgot password?</p>
              </Link>
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full">
              <div className={'relative'}>
                Sign In{' '}
                {loading && (
                  <div
                    className={`w-fit ${
                      !loading && 'hidden'
                    } absolute right-[-35px] top-0 bottom-0 my-auto`}
                  >
                    <Icon_spinner className={``} />
                  </div>
                )}
              </div>
            </Button>
            <Link href={'/signup'}>
              <p
                className={'text-center mt-1 text-primary'}
              >{`Don't have an account?`}</p>
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

export default ClientLogin
