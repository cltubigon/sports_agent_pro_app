import BillingMenu from './billing-menu/BillingMenu'

const BillingPage = () => {
  return (
    <div className={'bg-white mt-[78px] md:mt-unset'}>
      <div className={'p-5 border-neutral-300 border-b-[1px]'}>
        <h2 className={'text-xl font-semibold text-primary'}>
          Billing & Upgrade
        </h2>
      </div>
      <BillingMenu />
      <div className={'p-5 border-neutral-300 border-b-[1px]'}>
        <h5 className={'text-xl md:text-2xl font-bold'}>Basic Account</h5>
        <div className={'max-w-[1050px] mx-auto mt-5 md:mt-10'}>
          <div className={'grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'}>
            <div
              className={'p-10 border-[1px] border-neutral-300 rounded-md'}
            ></div>
            <div
              className={'p-10 border-[1px] border-neutral-300 rounded-md'}
            ></div>
            <div
              className={'p-10 border-[1px] border-neutral-300 rounded-md'}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingPage
