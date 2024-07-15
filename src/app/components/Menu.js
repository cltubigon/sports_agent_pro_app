/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

// Must have a parent positioned as "Relative"

// import Menu from '@/app/components/Menu.js'

// const [showModal, setShowModal] = useState(false)
// const buttonRef = useRef(null)

// <Button
//   ref={buttonRef}
//   onClick={() => setShowModal(!showModal)}
//   className='clt-modal'
// >
//   Toggle Modal
// </Button>
// {showModal && (
//   <Menu
//     showModal={showModal}
//     setShowModal={setShowModal}
//     referenceElement={buttonRef}
//     containerHeight={230}
//     className="w-[350px]"
//     containerWidth={350}     //optional
//     spaceFromElement={10}    //optional
//   >
//     Hello world
//   </Menu>
// )}

const getYPosition = ({ reference, containerHeight }) => {
  if (reference) {
    const viewportHeight = window.innerHeight
    if (viewportHeight - reference.top > containerHeight + 20) {
      return 'bottom'
    } else {
      return 'top'
    }
  }
}

const getXPosition = ({ reference, containerWidth }) => {
  if (reference) {
    const vieportWidth = window.innerWidth
    if (vieportWidth - reference.left < containerWidth + 20) {
      return 'right'
    } else {
      return 'left'
    }
  }
}

const Menu = ({ children, classId, ...props }) => {
  const {
    containerHeight,
    containerWidth,
    showModal,
    setShowModal,
    referenceElement,
    spaceFromElement,
  } = props
  const reference = referenceElement?.current?.getBoundingClientRect()
  const referenceHeight = referenceElement?.current?.offsetHeight

  let yPosition = getYPosition({
    reference,
    containerHeight: containerHeight + (spaceFromElement || 0),
  })
  let xPosition = getXPosition({
    reference,
    containerWidth: containerWidth,
  })
  const triggeredFunction = (e) => {
    const currElem = e.target?.className
    const currParent = e.target?.parentElement?.className

    if (typeof currElem === 'string' && typeof currParent === 'string') {
      if (!currElem?.includes(classId) && !currParent?.includes(classId)) {
        setShowModal(() => !showModal)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', triggeredFunction)

    return () => document.removeEventListener('click', triggeredFunction)
  }, [])

  if (!showModal) {
    return null
  }

  return (
    <>
      <div
        className={twMerge(
          `${classId} flex flex-col justify-center overflow-auto absolute z-20 bg-white border-[1px] select-none border-[#ccc] shadow-md p-4 w-full`,
          props?.className
        )}
        style={{
          top:
            yPosition === 'bottom' &&
            `${referenceHeight + (spaceFromElement || 0)}px`,
          bottom:
            yPosition === 'top' &&
            `${referenceHeight + (spaceFromElement || 0)}px`,
          left: xPosition === 'left' && '0',
          right: xPosition === 'right' && '0',
          height: 'fit-content',
          maxHeight: `${containerHeight}px`,
        }}
      >
        {children}
      </div>
    </>
  )
}

export default Menu
