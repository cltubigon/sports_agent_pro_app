'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Icon_check2 from '../components/icons/Icon_check2'
import Icon_copy from '../components/icons/Icon_copy'

const copyClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard successfully!')
    })
    .catch((err) => {
      console.error('Failed to copy text to clipboard', err)
    })
}

const CopyClipboard = () => {
  const path = usePathname()
  const [copied, setcopied] = useState(false)

  const handleCopy = () => {
    copyClipboard(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}${path}`)
    setcopied(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setcopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <div>
      <div
        onClick={handleCopy}
        className={`flex items-center justify-center gap-1 rounded-md md:border-[1px] py-2 md:px-[15px] cursor-pointer select-none  ${
          copied
            ? 'border-secondary'
            : 'border-neutral-300 hover:bg-neutral-100'
        }`}
      >
        {!copied && (
          <>
            <Icon_copy className="size-4" />
            <p className={'text-sm'}>Share</p>
          </>
        )}
        {copied && (
          <>
            <Icon_check2 className="text-secondary" />
            <p className={'text-sm text-secondary'}>Text copied</p>
          </>
        )}
      </div>
    </div>
  )
}

export default CopyClipboard
