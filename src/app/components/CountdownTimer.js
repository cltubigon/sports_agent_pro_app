/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect } from 'react'
import useCountdownTimer from '../Hooks/useCountdownTimer'
import { twMerge } from 'tailwind-merge'

// !!! Trigger setResendLocalStorage()

// const [remainingTimeVerify, setremainingTimeVerify] = useState(null)

// const setResendLocalStorage = () => {
//   if (!remainingTimeVerify) {
//     const timeNow = Date.now() / 1000 + 60 // 65 is in seconds
//     setremainingTimeVerify(timeNow - Date.now() / 1000)
//     console.log('timeNow', timeNow)
//     localStorage.setItem('resendOTP', JSON.stringify(timeNow))
//   }
// }

// useEffect(() => {
//   const resendOTP = JSON.parse(localStorage.getItem('resendOTP'))
//   if (resendOTP) {
//     console.log('run')
//     setremainingTimeVerify(Math.floor(resendOTP - Date.now() / 1000))
//   }
// }, [])

// {remainingTimeVerify && (
//   <CountdownTimer
//     className="md:absolute top-0 bottom-0 my-auto -right-16"
//     parameters={{ remainingTimeVerify, setremainingTimeVerify }}
//   />
// )}

export const CountdownTimer = ({
  parameters: { remainingTimeVerify, setremainingTimeVerify },
  className,
}) => {
  const { days, hours, minutes, seconds } =
    useCountdownTimer(remainingTimeVerify)

  useEffect(() => {
    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
      setremainingTimeVerify(null)
      localStorage.removeItem('resendOTP')
    }
  }, [seconds])
  return (
    <>
      <p className={twMerge('h-fit', className)}>
        {days > 0 && <span>{days} : </span>}
        {hours > 0 && <span>{hours} :</span>}{' '}
        {minutes && <span>{minutes}</span>} :{' '}
        {seconds && <span>{seconds}</span>}
      </p>
    </>
  )
}

export default CountdownTimer
