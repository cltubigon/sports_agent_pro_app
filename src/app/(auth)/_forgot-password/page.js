'use client'
import Button from '@/app/components/Button'
import Toast from '@/app/components/Toast'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import LoginSignupContainer from '@/app/components/LoginSignupContainer'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { resetPasswordForEmail } from './actions'

const ForgotPasswordPage = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const [emailSent, setemailSent] = useState(null)
  const [loading, setloading] = useState(false)
  const [toast, settoast] = useState(null)

  const onSubmit = async (data) => {
    setloading(true)
    const error = await resetPasswordForEmail(data)
    if (!error) {
      setemailSent(data.email)
    } else {
      settoast({
        description: error,
        status: 'error',
      })
    }
    setloading(false)
  }
  return (
    <LoginSignupContainer parameters={{ formTitle: `Request password reset` }}>
      <Toast parameters={{ toast, settoast }} />
      {emailSent ? (
        <p className={'text-xl text-primary text-center mx-auto'}>
          Email sent to {emailSent}
        </p>
      ) : (
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
              <Button type="submit" className="w-full">
                <div className={'relative'}>
                  Send me a reset link{' '}
                  {loading && (
                    <Icon_spinner className="animate-spin absolute right-[-35px] top-0 bottom-0 my-auto" />
                  )}
                </div>
              </Button>
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
