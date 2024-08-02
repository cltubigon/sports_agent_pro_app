import Icon_dashboard from '@/app/components/icons/Icon_dashboard'
import Icon_write from '@/app/components/icons/Icon_write'

export const listDealType = [
  {
    title: 'Offer',
    description:
      'Offers are deals that are sent directly to one or more recipients, allowing you to target exactly who you want.',
    value: 'offer',
    Icon: Icon_write,
  },
  {
    title: 'Opportunity',
    description:
      'Opportunities are posted for all users in the marketplace to review and apply to, giving you the flexibility to select from a pool of applicants.',
    value: 'opportunity',
    Icon: Icon_dashboard,
  },
]
