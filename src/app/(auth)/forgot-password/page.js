/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Toast from '@/app/components/Toast'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import LoginSignupContainer from '@/app/components/LoginSignupContainer'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { signInWithOtp } from './actions'
import OTPCode from '@/app/components/OTPCode'
import { verifyOtp } from '../signup/actions'
import ButtonLoader from '@/app/components/ButtonLoader'

const ForgotPasswordPage = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const [emailSent, setemailSent] = useState(null)
  const [loading, setloading] = useState(false)
  const [toast, settoast] = useState(null)
  const [OTP, setOTP] = useState(null)
  const [sending, setsending] = useState(false)

  const verify = async () => {
    if (!emailSent || !OTP) return
    setsending(true)
    const data = {
      email: emailSent,
      token: OTP,
    }
    const error = await verifyOtp({ data, hasRedirect: '/reset-password' })
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
    setsending(false)
  }

  useEffect(() => {
    verify()
  }, [OTP])

  const onSubmit = async (dataFromForm) => {
    const data = { ...dataFromForm, options: { shouldCreateUser: false } }
    setloading({ id: 'resetpassword' })
    const error = await signInWithOtp({ data })
    if (!error) {
      setemailSent(data.email)
    } else {
      if (error == 'Signups not allowed for otp') {
        settoast({
          description: 'Email does not exist',
          status: 'error',
        })
      } else {
        settoast({
          description: error,
          status: 'error',
        })
      }
      setloading(null)
    }
  }
  return (
    <LoginSignupContainer parameters={{ formTitle: `Request password reset` }}>
      <Toast parameters={{ toast, settoast }} />
      {emailSent ? (
        <>
          <h5 className={'text-lg md:text-xl mb-5'}>
            Enter the code we sent to your email.
          </h5>
          <OTPCode parameters={{ setOTP, sending }} />
          {sending && (
            <p className={'text-secondary'}>Your code is being verified.</p>
          )}
        </>
      ) : (
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <div className={'flex flex-col gap-4 w-full'}>
            <div className="relative">
              <label htmlFor="email">Email address:</label>
              <div className={'relative'}>
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
            </div>
            <div>
              <ButtonLoader
                type="submit"
                className={'w-full'}
                parameters={{ id: 'resetpassword', loading, setloading }}
              >
                Send me a reset link
              </ButtonLoader>
              <p className={'mt-1 text-center text-primary text-sm'}>
                {`We'll send you a link to create a new one.`}
              </p>
            </div>
          </div>
        </form>
      )}
    </LoginSignupContainer>
  )
}

export default ForgotPasswordPage
