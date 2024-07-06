import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import BillingMenu from './billing-menu/BillingMenu'
import { subscriptionPlans } from './subscriptionPlans'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import Button from '@/app/components/Button'
import Icon_check2 from '@/app/components/icons/Icon_check2'

const BillingPage = async () => {
  const currentUser = await getCurrentUser()
  const { role } = currentUser
  console.log('Rendering billing')
  return (
    <div className={'bg-white mt-[65px] md:mt-[unset]'}>
      <div className={'p-5 border-neutral-300 border-b-[1px]'}>
        <h2 className={'text-xl font-semibold text-primary'}>
          Billing & Upgrade
        </h2>
      </div>
      <BillingMenu />
      <div className={'p-5 border-neutral-300 border-b-[1px]'}>
        <h5 className={'text-xl md:text-2xl font-bold'}>
          {role === 'user' ? 'Bronze' : capitalizeAllFirstLetter(role)}
        </h5>
        <div className={'max-w-[1050px] mx-auto mt-5 md:mt-10'}>
          <div className={'grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'}>
            {subscriptionPlans.map((plan, index) => {
              const { name, price, requiredRole, description, perks } = plan
              const hasRequiredRole = role === requiredRole ? true : false
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center pb-10 border-[1px] rounded-md overflow-hidden ${
                    hasRequiredRole ? 'border-primary' : 'border-neutral-300'
                  }`}
                >
                  <h4
                    className={`text-xl md:text-2xl font-semibold py-2 text-center w-full ${
                      hasRequiredRole && 'bg-primary text-white'
                    }`}
                  >
                    {name}
                  </h4>
                  <p className={'text-sm mt-10 text-neutral-400'}>from</p>
                  <h1
                    className={
                      'text-4xl md:text-5xl font-bold -tracking-[2px] text-secondary'
                    }
                  >
                    ${price}
                  </h1>
                  <p className={'mt-4'}>{description}</p>
                  <div className={'px-4 w-full mt-10'}>
                    <Button
                      disabled={hasRequiredRole}
                      variant={!hasRequiredRole && 'button2'}
                      className={`w-full ${
                        hasRequiredRole &&
                        'cursor-not-allowed bg-primary-300 hover:bg-primary-300 active:bg-primary-300'
                      }`}
                    >
                      {hasRequiredRole ? 'Current Plan' : 'Subscribe'}
                    </Button>
                    <div
                      className={
                        'flex-col flex mt-5 divide-y-[1px] divide-neutral-200'
                      }
                    >
                      {perks?.map((perk, index) => {
                        return (
                          <div
                            key={index}
                            className={'flex items-center py-2 gap-4'}
                          >
                            <Icon_check2 className="text-primary-500" />
                            <p className={''}>{perk}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingPage
