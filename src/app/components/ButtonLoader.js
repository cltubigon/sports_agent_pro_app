/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Button from './Button'
import Icon_spinner from './icons/Icon_spinner'
import { twMerge } from 'tailwind-merge'

// const [loading, setloading] = useState(null)

// // use success when status is ok and use only id if not.
// setloading({ id: 'saveChanges' })
// setloading(null)

{
  /* <ButtonLoader parameters={{ id: 'uploadImages', loading, setloading }}>
Uploadimages
</ButtonLoader> */
}

const ButtonLoader = ({ children, className, parameters, ...props }) => {
  const { loading } = parameters

  return (
    <Button className={twMerge('', className)} {...props}>
      <div className={'w-fit relative px-5'}>
        {children}
        {loading?.id === parameters?.id && (
          <Icon_spinner className=" top-0 bottom-0 -right-2 my-auto absolute animate-spin" />
        )}
      </div>
    </Button>
  )
}

export default ButtonLoader
