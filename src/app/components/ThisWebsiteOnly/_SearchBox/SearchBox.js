'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const Popup = dynamic(() => import('../../Popup'))
const SearchBoxPopup = dynamic(() => import('./SearchBoxPopup'))

const SearchBox = ({ children }) => {
  const [popup, setpopup] = useState(null)
  const handleClick = () => {
    setpopup('SearchBox')
  }
  return (
    <div onClick={handleClick}>
      {popup === 'SearchBox' && (
        <Popup
          data={{
            setpopup,
            // mainContainer: 'bg-primary-900 bg-opacity-20 backdrop-blur-none',
            modalContainer: 'xl:max-w-[1024px] my-0',
            icon: 'hidden',
          }}
          className='bg-primary-900 bg-opacity-20 backdrop-blur-none'
        >
          <SearchBoxPopup setpopup={setpopup} />
        </Popup>
      )}
      {children}
    </div>
  )
}

export default SearchBox
