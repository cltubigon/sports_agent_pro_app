import Icon_dashboard from '@/app/components/icons/Icon_dashboard'
import Icon_dumbell from '@/app/components/icons/Icon_dumbell'
import Icon_globe from '@/app/components/icons/Icon_globe'
import Icon_user from '@/app/components/icons/Icon_user'

export const dashboardMenuList = [
  {
    name: 'Discover',
    link: '/network',
    Icon: Icon_globe,
  },
  {
    name: 'Opportunities',
    link: '/opportunities',
    Icon: Icon_dashboard,
  },
  {
    name: 'Account',
    link: '/account',
    Icon: Icon_user,
  },
  {
    name: 'Courses',
    link: '/courses',
    Icon: Icon_dumbell,
  },
]
