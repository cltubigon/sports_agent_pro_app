import Icon_dashboard from '@/app/components/icons/Icon_dashboard'
import Icon_globe from '@/app/components/icons/Icon_globe'
import Icon_user from '@/app/components/icons/Icon_user'

export const dashboardMenuList = [
  {
    name: 'Discover',
    link: '/network',
    Icon: Icon_globe,
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
    Icon: Icon_dashboard,
  },
  {
    name: 'Account',
    link: '/account',
    Icon: Icon_user,
  },
  // {
  //   name: 'Courses',
  //   link: '/courses',
  //   Icon: Icon_user,
  // },
]
