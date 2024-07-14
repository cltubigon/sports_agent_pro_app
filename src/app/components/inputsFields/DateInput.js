import { forwardRef } from 'react'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import { convertToZeroFirst } from '@/utilities/date-and-time/convertToZero'

const converToDateInputFormat = (data) => {
  const date = new Date(data)
  const month = convertToZeroFirst(date.getMonth() + 1)
  const day = convertToZeroFirst(date.getDate())
  const year = convertToZeroFirst(date.getFullYear())
  const formatDate = `${year}-${month}-${day}`
  return formatDate
}

const DateInput = forwardRef(function DateInput({ children, ...props }, ref) {
  console.log('props', props)
  return (
    <Input
      ref={ref}
      type="date"
      defaultValue={converToDateInputFormat(props?.default)}
      {...props}
    />
  )
})

export default DateInput
