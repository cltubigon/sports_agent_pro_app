/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { convertToZeroFirst } from '@/utilities/date-and-time/convertToZero'
import { useEffect, useState } from 'react'

// Accepts time in seconds or an integer
const useCountdownTimer = (totalSeconds) => {
  const [initialTime, setinitialTime] = useState(totalSeconds)
  const [days, setdays] = useState(
    convertToZeroFirst(Math.floor(initialTime / 86000) % 24)
  )
  const [hours, sethours] = useState(
    convertToZeroFirst(Math.floor(initialTime / 3600) % 24)
  )
  const [minutes, setminutes] = useState(
    convertToZeroFirst(Math.floor(initialTime / 60) % 60)
  )
  const [seconds, setseconds] = useState(convertToZeroFirst(initialTime % 60))

  useEffect(() => {
    setdays(convertToZeroFirst(Math.floor(initialTime / 86000) % 24))
    sethours(convertToZeroFirst(Math.floor(initialTime / 3600) % 24))
    setminutes(convertToZeroFirst(Math.floor(initialTime / 60) % 60))
    setseconds(convertToZeroFirst(initialTime % 60))
  }, [initialTime])

  for (let index = 0; index < initialTime; index++) {
    setTimeout(() => {
      setinitialTime(initialTime - 1)
    }, 1000)
  }
  return { seconds, minutes, hours, days }
}

export default useCountdownTimer
