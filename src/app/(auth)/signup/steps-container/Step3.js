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
  const formRef = useRef(null)
  const { submittedData, setsubmittedData, setaccountType } =
    useStore(signupStore)
  const [one, setone] = useState('')
  const [two, settwo] = useState('')
  const [three, setthree] = useState('')
  const [four, setfour] = useState('')
  const [five, setfive] = useState('')
  const [six, setsix] = useState('')
  const [sending, setsending] = useState(false)
  const [toast, settoast] = useState(null)

  const numberOfDigits = [
    {
      refBefore: sixRef,
      ref: oneRef,
      refAfter: twoRef,
      label: 'one',
      state: one,
      set: setone,
      setBefore: setsix,
    },
    {
      refBefore: oneRef,
      ref: twoRef,
      refAfter: threeRef,
      label: 'two',
      state: two,
      set: settwo,
      setBefore: setone,
    },
    {
      refBefore: twoRef,
      ref: threeRef,
      refAfter: fourRef,
      label: 'three',
      state: three,
      set: setthree,
      setBefore: settwo,
    },
    {
      refBefore: threeRef,
      ref: fourRef,
      refAfter: fiveRef,
      label: 'four',
      state: four,
      set: setfour,
      setBefore: setthree,
    },
    {
      refBefore: fourRef,
      ref: fiveRef,
      refAfter: sixRef,
      label: 'five',
      state: five,
      set: setfive,
      setBefore: setfour,
    },
    {
      refBefore: fiveRef,
      ref: sixRef,
      refAfter: oneRef,
      label: 'six',
      state: six,
      set: setsix,
      setBefore: setfive,
    },
  ]

  const removeResendLocalStorage = () => {
    localStorage.removeItem('resendOTP')
  }

  const resetFields = () => {
    formRef.current.reset()
    for (const obj of numberOfDigits) {
      const { set } = obj
      set('')
    }
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
    resetFields()
    oneRef.current.focus()
    setsending(false)
  }

  useEffect(() => {
    if (one && two && three && four && five && six) {
      console.log({ one, two, three, four, five, six })
      verify()
    }
  }, [one, two, three, four, five, six])

  const allowedCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  const triggeredFunction = (e) => {
    if (e.key === 'Backspace') {
      for (const obj of numberOfDigits) {
        const { label, ref, set, setBefore, refBefore } = obj
        if (e.target.id === label) {
          if (ref.current.value) {
            set('')
          } else {
            if (numberOfDigits[0].label != label) {
              setBefore('')
            }
            if (e.target.id !== numberOfDigits[0].label) {
              refBefore.current.focus()
            }
          }
        }
      }
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', triggeredFunction)

    return () => document.removeEventListener('click', triggeredFunction)
  }, [])

  const handleChange = ({ e, fieldName }) => {
    if (one && two && three && four && five && six) return
    if (!allowedCharacters.some((item) => item == e?.nativeEvent?.data)) return
    for (const obj of numberOfDigits) {
      const { label, set, refAfter } = obj
      if (fieldName === label) {
        set(e.target.value)
        if (fieldName !== numberOfDigits[numberOfDigits.length - 1].label) {
          refAfter.current.focus()
        }
      }
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
        <p className={''}>
          {one} {two} {three} {four} {five} {six}
        </p>
      </div>
      <form
        ref={formRef}
        className="relative grid grid-cols-6 max-w-[375px] gap-1 md:gap-4"
      >
        {sending && (
          <p
            className={
              'text-secondary absolute -bottom-7 left-0 right-0 mx-auto'
            }
          >
            Verifying your code...
          </p>
        )}
        {numberOfDigits?.map((item, index) => {
          const { ref, state, label } = item
          return (
            <InputGroup key={index}>
              <Input
                maxLength="1"
                type="number"
                onChange={(e) => handleChange({ e, fieldName: label })}
                ref={ref}
                value={state}
                id={label}
                className="text-center text-2xl"
              />
              <div
                className={
                  'hidden peer-focus:block w-[30px] h-[2px] bg-secondary absolute bottom-2 left-0 right-0 mx-auto z-20'
                }
              />
            </InputGroup>
          )
        })}
        {/* <InputGroup>
          <Input
            maxLength="1"
            onChange={(e) => handleChange({ e, fieldName: 'two' })}
            ref={twoRef}
            value={two}
            id="two"
            className="text-center text-2xl"
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
            value={three}
            id="three"
            className="text-center text-2xl"
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
            value={four}
            id="four"
            className="text-center text-2xl"
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
            value={five}
            id="five"
            className="text-center text-2xl"
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
            value={six}
            id="six"
            className="text-center text-2xl"
          />
          <div
            className={
              'hidden peer-focus:block w-[30px] h-[2px] bg-secondary absolute bottom-2 left-0 right-0 mx-auto z-20'
            }
          />
        </InputGroup> */}
      </form>
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
