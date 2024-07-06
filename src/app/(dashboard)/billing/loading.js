import LoadingProgress from './LoadingProgress'

const BillingPageLoading = async () => {
  return (
    <div className={'bg-white mt-[65px] md:mt-[unset]'}>
      <LoadingProgress />
      <div className={'p-5 border-neutral-300 border-b-[1px]'}>
        <h2
          className={
            'text-xl font-semibold text-primary select-none text-transparent w-fit bg-neutral-200 animate-pulse'
          }
        >
          Billing & Upgrade
        </h2>
      </div>
      <div
        className={
          'p-5 h-[63px] w-full select-none text-transparent bg-neutral-200 animate-pulse'
        }
      ></div>
      <div className={'p-5 border-neutral-300 border-b-[1px]'}>
        <h5
          className={
            'text-xl md:text-2xl font-bold select-none text-transparent w-fit bg-neutral-200 animate-pulse'
          }
        >
          SampleText
        </h5>
        <div className={'max-w-[1050px] mx-auto mt-5 md:mt-10'}>
          <div className={'grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'}>
            <div
              className={`flex flex-col items-center pb-10 border-[1px] rounded-md overflow-hidden select-none text-transparent h-[338px] w-full bg-neutral-200 animate-pulse`}
            />
            <div
              className={`flex flex-col items-center pb-10 border-[1px] rounded-md overflow-hidden select-none text-transparent h-[338px] w-full bg-neutral-200 animate-pulse`}
            />
            <div
              className={`flex flex-col items-center pb-10 border-[1px] rounded-md overflow-hidden select-none text-transparent h-[338px] w-full bg-neutral-200 animate-pulse`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingPageLoading
