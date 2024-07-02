import Icon_health from '@/app/components/icons/Icon_health'
import Icon_card from '@/app/components/icons/Icon_card'
import Icon_dashboard from '@/app/components/icons/Icon_dashboard'
import Icon_user from '@/app/components/icons/Icon_user'

export const dashboardMenuList = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    Icon: Icon_dashboard,
  },
  {
    name: 'Payments',
    link: '/payments',
    Icon: Icon_card,
  },
  {
    name: 'Account',
    link: '/account',
    Icon: Icon_user,
  },
  {
    name: 'Recipients',
    link: '/list-of-recipients',
    Icon: Icon_health,
  },
]
