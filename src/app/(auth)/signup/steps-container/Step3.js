/* eslint-disable react-hooks/exhaustive-deps */
import Input from '@/app/components/inputsFields/InputGroup/Input'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import signupStore from '@/utilities/store/signupStore'
import React, { useEffect, useRef, useState } from 'react'
import { useStore } from 'zustand'
import { verifyOtp } from '../actions'
import Toast from '@/app/components/Toast'
import ResendOtp from '../resend-otp/ResendOtp'

const Step3 = () => {
  const oneRef = useRef(null)
  const twoRef = useRef(null)
  const threeRef = useRef(null)
  const fourRef = useRef(null)
  const fiveRef = useRef(null)
  const sixRef = useRef(null)
  const { submittedData, setsubmittedData, setaccountType } =
    useStore(signupStore)
  const [one, setone] = useState(null)
  const [two, settwo] = useState(null)
  const [three, setthree] = useState(null)
  const [four, setfour] = useState(null)
  const [five, setfive] = useState(null)
  const [six, setsix] = useState(null)
  const [sending, setsending] = useState(false)
  const [toast, settoast] = useState(null)

  const removeResendLocalStorage = () => {
    localStorage.removeItem('resendOTP')
  }

  const verify = async () => {
    if (!submittedData) return
    setsending(true)
    const { email } = submittedData
    const token = `${one}${two}${three}${four}${five}${six}`
    const data = { email, token }
    const { error } = await verifyOtp(data)
    if (!error) {
      removeResendLocalStorage()
      setsubmittedData(null)
      setaccountType(null)
      settoast({
        description: 'You are verified',
        status: 'success',
        redirect: '/signup?step=4',
        duration: 1000,
      })
    } else if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
    setsending(false)
  }

  useEffect(() => {
    if (one) {
      twoRef.current.focus()
    }
    if (two) {
      threeRef.current.focus()
    }
    if (three) {
      fourRef.current.focus()
    }
    if (four) {
      fiveRef.current.focus()
    }
    if (five) {
      sixRef.current.focus()
    }
    if (one && two && three && four && five && six) {
      verify()
    }
  }, [one, two, three, four, five, six])

  const handleChange = ({ e, fieldName }) => {
    if (fieldName === 'one') {
      setone(e.target.value)
    }
    if (fieldName === 'two') {
      settwo(e.target.value)
    }
    if (fieldName === 'three') {
      setthree(e.target.value)
    }
    if (fieldName === 'four') {
      setfour(e.target.value)
    }
    if (fieldName === 'five') {
      setfive(e.target.value)
    }
    if (fieldName === 'six') {
      setsix(e.target.value)
    }
  }

  return (
    <div className={'max-sm:py-5 md:h-full flex flex-col justify-center'}>
      <Toast parameters={{ toast, settoast }} />
      <h3
        className={
          'max-sm:text-center font-oswald text-3xl md:text-[50px] leading-[51px] font-bold mb-[14px] max-sm:mt-3'
        }
      >
        Secure your account
      </h3>
      <div className={'text-neutral-400'}>
        <p className={'text-lg'}>Enter the code sent to your phone or email</p>
        <p className={'text-lg mt-5 mb-[2px]'}>Enter Code</p>
      </div>
      <div className={'relative grid grid-cols-6 max-w-[375px] gap-1 md:gap-4'}>
        {sending && (
          <p
            className={
              'text-secondary absolute -bottom-7 left-0 right-0 mx-auto'
            }
          >
            Verifying your code...
          </p>
        )}
        <InputGroup>
          <Input
            maxLength="1"
            onChange={(e) => handleChange({ e, fieldName: 'one' })}
            ref={oneRef}
            id="one"
            className="text-center text-2xl"
            //   maxLength="1"
          />
          <div
            className={
              'hidden peer-focus:block w-[30px] h-[2px] bg-secondary absolute bottom-2 left-0 right-0 mx-auto z-20'
            }
          />
        </InputGroup>
        <InputGroup>
          <Input
            maxLength="1"
            onChange={(e) => handleChange({ e, fieldName: 'two' })}
            ref={twoRef}
            id="two"
            className="text-center text-2xl"
            //   maxLength="1"
          />
          <div
            className={
              'hidden peer-focus:block w-[30px] h-[2px] bg-secondary absolute bottom-2 left-0 right-0 mx-auto z-20'
            }
          />
        </InputGroup>
        <InputGroup>
          <Input
            maxLength="1"
            onChange={(e) => handleChange({ e, fieldName: 'three' })}
            ref={threeRef}
            id="three"
            className="text-center text-2xl"
            //   maxLength="1"
          />
          <div
            className={
              'hidden peer-focus:block w-[30px] h-[2px] bg-secondary absolute bottom-2 left-0 right-0 mx-auto z-20'
            }
          />
        </InputGroup>

        <InputGroup>
          <Input
            maxLength="1"
            onChange={(e) => handleChange({ e, fieldName: 'four' })}
            ref={fourRef}
            id="four"
            className="text-center text-2xl"
            //   maxLength="1"
          />
          <div
            className={
              'hidden peer-focus:block w-[30px] h-[2px] bg-secondary absolute bottom-2 left-0 right-0 mx-auto z-20'
            }
          />
        </InputGroup>
        <InputGroup>
          <Input
            maxLength="1"
            onChange={(e) => handleChange({ e, fieldName: 'five' })}
            ref={fiveRef}
            id="five"
            className="text-center text-2xl"
            //   maxLength="1"
          />
          <div
            className={
              'hidden peer-focus:block w-[30px] h-[2px] bg-secondary absolute bottom-2 left-0 right-0 mx-auto z-20'
            }
          />
        </InputGroup>
        <InputGroup>
          <Input
            maxLength="1"
            onChange={(e) => handleChange({ e, fieldName: 'six' })}
            ref={sixRef}
            id="six"
            className="text-center text-2xl"
            //   maxLength="1"
          />
          <div
            className={
              'hidden peer-focus:block w-[30px] h-[2px] bg-secondary absolute bottom-2 left-0 right-0 mx-auto z-20'
            }
          />
        </InputGroup>
      </div>
      <div
        className={
          'relative w-fit max-sm:mx-auto mt-10 flex flex-col-reverse items-center'
        }
      >
        {/* <Button
          onClick={handleResendClick}
          className={`${
            !remainingTimeVerify &&
            'bg-primary-400 hover:bg-primary-400 active:bg-primary-400'
          }`}
          disabled={!remainingTimeVerify}
        >
          RESEND CODE
        </Button> */}
        <ResendOtp parameters={{ settoast }} />
      </div>
    </div>
  )
}

export default Step3
