import React, { useEffect } from 'react'
import Icon_close from './icons/Icon_close'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'

// const [toast, settoast] = useState(null)

// settoast({
//    description: 'Lorem ipsum',
//    status: 'error',
//    redirect: '/path',        // optional
//    duration: 3000            // optional
// })

// Example: <Toast parameters={{ toast, settoast }} />

const getBackground = (status) => {
  if (status === 'error') {
    return 'bg-red-100 text-red-600 border-red-600 border-[1px]'
  } else if (status === 'success') {
    return 'bg-green-100 text-green-600 border-green-600 border-[1px]'
  } else {
    return 'bg-blue-100 text-blue-600 border-blue-600 border-[1px]'
  }
}
const closeIcon = (status) => {
  if (status === 'error') {
    return 'text-red-600'
  } else if (status === 'success') {
    return 'text-green-600'
  } else {
    return 'text-blue-600'
  }
}

const Toast = ({ parameters: { toast, settoast } }) => {
  const router = useRouter()
  const handleCloseClick = () => {
    if (!toast?.redirect) {
      settoast(null)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      settoast(null)
      if (toast?.redirect) {
        router.push(toast?.redirect)
      }
    }, toast?.duration || 3000)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast])

  const statusBackground = getBackground(toast?.status)
  const closeIconStyle = closeIcon(toast?.status)
  return (
    <>
      {toast && (
        <div
          className={twMerge(
            'z-[999] rounded-md shadow-md pl-6 pr-2 py-4 w-[290px] fixed top-4 left-0 right-0 mx-auto md:top-4 md:bottom-[unset] md:left-[unset] md:right-8 flex-wrap',
            statusBackground
          )}
        >
          <div className={'flex items-center relative justify-between gap-3'}>
            <p className="leading-[22px] text-[17px] text-left">
              {toast?.description || 'Description'}
            </p>
            {!toast?.redirect && (
              <div
                onClick={handleCloseClick}
                className={
                  'p-[2px] items-center select-none rounded-sm active:bg-white active:bg-opacity-20'
                }
              >
                <Icon_close
                  className={twMerge('min-w-4 text-white', closeIconStyle)}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Toast
