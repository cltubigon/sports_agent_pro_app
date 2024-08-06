/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@/app/components/Button'
import DateInput from '@/app/components/inputsFields/DateInput'
import { addDaysToDate } from '@/utilities/date-and-time/addDateTime'
import buildStore from '@/utilities/store/buildStore'
import { useEffect } from 'react'
import { useStore } from 'zustand'

const ExpirationDate = () => {
  const { briefDateOpen, setbriefDateOpen, expirationDate, setexpirationDate } =
    useStore(buildStore)
  const handleexpirationDate = ({ target: { value } }) => {
    const dateNow = Date.now()
    const addedDate = addDaysToDate(dateNow, 1)
    const requiredDate = new Date(addedDate)

    const inputDate = new Date(value)

    if (inputDate > requiredDate) {
      setexpirationDate(value)
    } else {
      setexpirationDate(null)
    }
  }
  useEffect(() => {
    if (!briefDateOpen) return
    const e = {
      target: {
        value: new Date(addDaysToDate(new Date(), 2))
          .toISOString()
          .slice(0, 10),
      },
    }
    handleexpirationDate(e)
  }, [briefDateOpen])

  const handleClick = () => {
    setbriefDateOpen(true)
  }
  return (
    <>
      {briefDateOpen && (
        <div className={''}>
          <p htmlFor="dealName">Expiration date</p>
          <p className={'text-xs text-neutral-400 mb-2'}>
            The opportunity will close and no longer allow applications after
            this date.
          </p>
          <DateInput
            id="expirationDate"
            onChange={handleexpirationDate}
            default={
              expirationDate ||
              new Date(addDaysToDate(new Date(), 2)).toISOString().slice(0, 10)
            }
          />
        </div>
      )}
      {!briefDateOpen && (
        <Button
          variant="button2"
          className="max-w-[250px] min-h-[42px]"
          onClick={handleClick}
        >
          Add expiration date
        </Button>
      )}
    </>
  )
}

export default ExpirationDate
