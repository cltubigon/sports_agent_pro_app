'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Menu from '@/app/components/Menu'
import React, { useRef, useState } from 'react'

// const [homeTown, sethomeTown] = useState('')

// <GoogleMapAutoCompleteAddress
//   parameters={{
//     selected: homeTown,
//     setselected: sethomeTown,
//   }}
//   placeholder="Enter your home town"
// />
// <Script
//   defer
//   src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}&libraries=places&callback=Function.prototype`}
// />
const GoogleMapAutoCompleteAddress = ({
  parameters: { selected, setselected },
  ...props
}) => {
  const autocompleteInput = useRef(null)
  const formRef = useRef(null)
  const [suggestions, setsuggestions] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleData = (description) => {
    formRef.current.reset()
    setselected(description)
  }

  const displaySuggestions = (val) => {
    setsuggestions(val)
    setShowModal(true)
  }

  const handleInputChange = (e) => {
    if (e.target.value) {
      let service = new google.maps.places.AutocompleteService()
      service.getQueryPredictions({ input: e.target.value }, displaySuggestions)
    }
  }

  return (
    <>
      <div className={'relative'}>
        <form ref={formRef}>
          <Input
            ref={autocompleteInput}
            defaultValue={selected}
            onChange={handleInputChange}
            onInput={() => setShowModal(true)}
            // placeholder="Enter your address"
            {...props}
            type="text"
          />
          {showModal && (
            <Menu
              showModal={showModal}
              setShowModal={setShowModal}
              referenceElement={autocompleteInput}
              containerHeight={225}
              containerWidth={350}
              className="divide-y-[1px] rounded-md py-2 h-40 divide-neutral-200 flex flex-col justify-start"
            >
              {suggestions?.map((item, index) => {
                const { description } = item
                return (
                  <div
                    key={index}
                    onClick={() => handleData(description)}
                    className={'py-2 hover:bg-neutral-100 px-4'}
                  >
                    <p className={''}>{description}</p>
                  </div>
                )
              })}
            </Menu>
          )}
        </form>
      </div>
    </>
  )
}

export default GoogleMapAutoCompleteAddress
