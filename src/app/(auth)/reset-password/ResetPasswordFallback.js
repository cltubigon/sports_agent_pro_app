'use client'
import Button from '@/app/components/Button'
import LoginSignupContainer from '@/app/components/LoginSignupContainer'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import React, { useState } from 'react'
import Toast from '@/app/components/Toast'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import InputPasswordVisibility from '@/app/components/inputsFields/InputGroup/InputPasswordVisibility'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import Icon_eye_opened from '@/app/components/icons/Icon_eye_opened'
import Icon_eye_closed from '@/app/components/icons/Icon_eye_closed'

const ResetPasswordFallback = () => {
  const [showPassword, setshowPassword] = useState(null)
  const [toast, settoast] = useState(null)
  return (
    <LoginSignupContainer parameters={{ formTitle: `Reset password` }}>
      <Toast parameters={{ toast, settoast }} />
      <form style={{ width: '100%' }}>
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
                id="password"
                type="password"
              />
              <Icon_padlock className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300 size-[18px]" />
              <InputPasswordVisibility>
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
              <Input type="password" id="confirmPassword" />
              <Icon_padlock className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300 size-[18px]" />
            </InputGroup>
          </div>
        </div>
        <Button className="mt-5">Reset Password</Button>
      </form>
    </LoginSignupContainer>
  )
}

export default ResetPasswordFallback
