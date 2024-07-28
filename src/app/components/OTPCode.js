/* eslint-disable react-hooks/exhaustive-deps */
import Input from '@/app/components/inputsFields/InputGroup/Input'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import React, { useEffect, useRef, useState } from 'react'

{/* <OTPCode parameters={{ setOTP, sending }} /> */}

const OTPCode = ({ parameters: { setOTP, sending } }) => {
  const [code, setcode] = useState(new Array(6).fill(''))
  const [activeIndex, setactiveIndex] = useState(0)
  const inputRef = useRef(null)
  const otpRef = useRef(null)

  const handleChange = ({ e: { target }, index }) => {
    const { value } = target
    const isgreater = value >= 0
    if (!value || !isgreater || sending) return
    let newCode = [...code]
    newCode[index] = value[value.length - 1]
    setcode(newCode)
    if (index !== code.length - 1) {
      setactiveIndex(index + 1)
    }
  }

  const handleKeyDown = ({ e: { key }, index }) => {
    if (key === 'Backspace') {
      let newCode = [...code]
      newCode[index] = ''
      setcode(newCode)
      if (index !== 0) setactiveIndex(index - 1)
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [activeIndex])

  useEffect(() => {
    if (activeIndex !== 0 && !sending) {
      setcode(new Array(6).fill(''))
      setactiveIndex(0)
    }
  }, [sending])

  useEffect(() => {
    if (!code.some((item) => item === '') && !sending) {
      setOTP(code.join(''))
    }
  }, [code])

  return (
    <form ref={otpRef} className="w-full grid grid-cols-6 gap-1 md:gap-4">
      {code.map((item, index) => {
        return (
          <InputGroup key={index}>
            <Input
              ref={index === activeIndex ? inputRef : null}
              value={item}
              onKeyDown={(e) => handleKeyDown({ e, index })}
              onChange={(e) => handleChange({ e, index })}
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
    </form>
  )
}

export default OTPCode
