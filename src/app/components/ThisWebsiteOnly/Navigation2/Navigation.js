import React from 'react'
import ProfilePictureComponent from '../profilePicture/ProfilePictureComponent'

const Navigation = ({ user }) => {
  return (
    <div className={'py-3 md:py-5 bg-secondary'}>
      <div
        className={'max-w-[1500px] mx-auto px-3 md:px-6 2xl:px-0 text-white'}
      >
        <div className={'flex justify-between items-center'}>
          <h5 className={'font-tinos text-xl md:text-2xl font-bold'}>
            Sports Agent Pro
          </h5>
          <div
            className={'flex flex-col items-center justify-center gap-[2px]'}
          >
            <ProfilePictureComponent
              user={user}
              parameters={{ containerStyle: 'size-[35px]' }}
            />
            <p className={'text-sm text-center'}>Account</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
