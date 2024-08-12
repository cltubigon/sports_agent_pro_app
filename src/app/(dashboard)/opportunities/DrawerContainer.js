/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Drawer from '@/app/components/Drawer'
import DrawerContent from './DrawerContent'

const DrawerContainer = ({ account_type, drawer, setdrawer }) => {
  return (
    <div>
      <Drawer drawer={drawer} setdrawer={setdrawer}>
        <DrawerContent
          account_type={account_type}
          drawer={drawer}
          setdrawer={setdrawer}
        />
      </Drawer>
    </div>
  )
}

export default DrawerContainer
