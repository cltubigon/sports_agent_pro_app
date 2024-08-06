'use client'
import React from 'react'
import Icon_right from './icons/Icon_right'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
import { AnimatePresence, LazyMotion, m } from 'framer-motion'
const loadFeatures = () =>
  import('@/utilities/framerMotion/features').then((res) => res.default)

// set drawer to any string / array / true value
// const { drawer, setdrawer } = useStore(utilityStore)

{
  /* <Drawer>
        <p>children</p>
    </Drawer> */
}

const Drawer = ({ children, mobileCloseActive }) => {
  const { drawer, setdrawer } = useStore(utilityStore)

  const handleCloseDrawer = () => {
    setdrawer(null)
  }

  const animate = {
    initial: {
      x: '100vw',
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      x: '0vw',
      transition: {
        duration: 0.5,
      },
    },
    initialOpacity: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    animateOpacity: {
      opacity: 100,
      transition: {
        duration: 1,
      },
    },
  }
  return (
    <LazyMotion features={loadFeatures}>
      <AnimatePresence>
        {drawer && (
          <div className="fixed top-0 left-0 w-full h-screen bg-secondary-950 bg-opacity-70 z-[990] flex">
            <div className={'flex w-full'} onClick={handleCloseDrawer} />
            <m.div
              variants={animate}
              initial="initial"
              animate="animate"
              exit="initial"
              className={
                'flex max-w-[92%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[50%] min-w-[92%] md:min-w-[80%] lg:min-w-[70%] xl:min-w-[50%] h-full bg-white'
              }
            >
              {mobileCloseActive && (
                <m.div
                  variants={animate}
                  initial="initialOpacity"
                  animate="animateOpacity"
                  exit="initialOpacity"
                  onClick={handleCloseDrawer}
                  className={'flex md:hidden h-full items-center bg-neutral-50'}
                >
                  <Icon_right className="size-8" />
                </m.div>
              )}
              <div className={'flex w-full h-full'}>{children}</div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}

export default Drawer
