'use client'
import React, { useState } from 'react'
import SectionContainer from './SectionContainer'
import Script from 'next/script'
import GoogleMapAutoCompleteAddress from '@/app/components/GoogleMapAutoCompleteAddress'
import Button from '@/app/components/Button'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import { updateLocationFunc } from './actions'
import Icon_location from '@/app/components/icons/Icon_location'

const Locations = ({ user }) => {
  const [loading, setloading] = useState(null)
  const [currentLocation, setcurrentLocation] = useState(user?.currentLocation)
  const [homeTown, sethomeTown] = useState(user?.homeTown)

  const handleClick = async () => {
    setloading(true)
    const { error } = await updateLocationFunc({
      data: { currentLocation, homeTown },
      id: user?.id,
    })
    setloading(false)
  }
  return (
    <SectionContainer data={{ title: 'Locations', Icon: Icon_location }}>
      <div className={'flex-col flex gap-4'}>
        <GoogleMapAutoCompleteAddress
          parameters={{
            selected: currentLocation,
            setselected: setcurrentLocation,
          }}
          placeholder="Enter your current location"
        />
        <GoogleMapAutoCompleteAddress
          parameters={{
            selected: homeTown,
            setselected: sethomeTown,
          }}
          placeholder="Enter your home town"
        />
        <Button
          type="submit"
          onClick={handleClick}
          className="px-10 relative ml-auto"
        >
          Update Location
          {loading && (
            <Icon_spinner className="top-0 bottom-0 right-3 my-auto absolute animate-spin" />
          )}
        </Button>
      </div>
      <Script
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}&libraries=places&callback=Function.prototype`}
      />
    </SectionContainer>
  )
}

export default Locations
