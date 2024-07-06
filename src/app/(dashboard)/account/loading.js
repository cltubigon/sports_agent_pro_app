import ContentContainerDashboard from '@/app/components/ThisWebsiteOnly/Dashboard/ContentContainerDashboard'
import React from 'react'
import Input from '@/app/components/inputsFields/InputGroup/Input'

const AccountLoading = () => {
  return (
    <>
      <ContentContainerDashboard>
        <h2
          className={
            'text-xl font-semibold w-fit select-none text-transparent bg-neutral-200 animate-pulse'
          }
        >
          My Account
        </h2>
        <div
          className={'grid grid-cols-1 md:grid-cols-2 gap-2 my-5 items-center'}
        >
          <p
            className={
              'w-fit select-none text-transparent bg-neutral-200 animate-pulse'
            }
          >
            Email:
          </p>
          <Input className="border-neutral-200 text-neutral-400 w-full select-none text-transparent bg-neutral-200 animate-pulse" />
          <p
            className={
              'w-fit select-none text-transparent bg-neutral-200 animate-pulse'
            }
          >
            Account type:
          </p>
          <Input className="border-neutral-200 text-neutral-400 w-full select-none text-transparent bg-neutral-200 animate-pulse" />
          <p
            className={
              'w-fit select-none text-transparent bg-neutral-200 animate-pulse'
            }
          >
            Display name:
          </p>
        </div>
      </ContentContainerDashboard>
    </>
  )
}

export default AccountLoading
