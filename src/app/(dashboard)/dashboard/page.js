import React from 'react'
import ClientDashboard from './ClientDashboard'
import ContentContainerDashboard from '@/app/components/ThisWebsiteOnly/Dashboard/ContentContainerDashboard'
import DashboardContentMenu from '@/app/components/ThisWebsiteOnly/Dashboard/DashboardContentMenu'

export const metadata = {
  title: {
    default: `Dashboard`,
    template: `%s - Love Transfusion`,
  },
  // description: 'Generated by create next app',
}

const DashboardPage = async () => {
  console.log('Rendering Dashboard')
  return (
    <ContentContainerDashboard>
      <DashboardContentMenu>Dashboard</DashboardContentMenu>
      <div className={'p-5 flex gap-5 flex-col'}>
        <p className={''}>
          Et dolore error qui fugit totam ut iure impedit aut suscipit eveniet!
          Non officiis asperiores et dignissimos esse est alias laborum non
          rerum voluptates.
        </p>

        <p className={''}>
          Aut alias placeat eum cupiditate quas ad aperiam commodi eum deleniti
          quidem ut corporis minus? Ut adipisci unde eos cumque eius qui fuga
          molestiae. Qui galisum impedit est aperiam dolor eos doloremque quos.
          Qui aperiam distinctio eos inventore eligendi et asperiores accusamus
          aut sunt earum ea vitae quibusdam et aliquid laboriosam a doloremque
          incidunt?
        </p>

        <p className={''}>
          In quibusdam tenetur aut quis provident ut asperiores sapiente a
          officia omnis sed rerum deserunt. Ut consequatur deleniti ea placeat
          saepe aut nisi voluptatem est accusantium ratione et totam rerum non
          reprehenderit aspernatur qui obcaecati perspiciatis! Et quidem enim
          vel architecto similique sed omnis sunt qui labore placeat et omnis
          quia ut sint dolorem eum sint itaque. Id asperiores ipsam est alias
          molestiae ut ratione vero eos ipsum suscipit et alias nihil.
        </p>
      </div>
    </ContentContainerDashboard>
  )
}

export default DashboardPage
