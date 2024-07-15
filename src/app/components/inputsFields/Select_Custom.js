/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Menu from '@/app/components/Menu.js'
import Icon_down from '../icons/Icon_down'
import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

// const [selectedItem, setselectedItem] = useState([])

// const items = [
//   { name: 'Dog', value: 'dog' },
//   { name: 'Carabao', value: 'carabao' },
//   { name: 'Goat', value: 'goat' },
// ]

// <Select_Custom
//   parameters={{
//     options: items,
//     selectedItem,
//     setselectedItem,
//     containerHeight: 230,
//     classModalId: 'clt-modal2',
//     multiSelect: true,         // optional
//     optionsStyle: '',          // optional
//     optionsStyleSelected: '',      // optional
//     optionsStyleNotSelected: '',   // optional
//     placeholder: '- Hello World -',               // optional
//     containerWidth: 260,       // optional
//     menuStyle: 'w-[260px]',    // optional
//     placeholderStyle: '',      // optional
//     singleSelectedStyle: '',   // optional
//     multiSelectStyle: '',      // optional
//     menuSpaceFromElement: 10,  // optional
//   }}
// />

const variants = {
  default: 'border-[#c7e9ff]',
  select2: 'border-neutral-200',
}

export default function Select_Custom({
  className,
  variant,
  parameters: {
    options,
    selectedItem,
    setselectedItem,
    placeholder,
    containerHeight,
    classModalId,
    containerWidth,
    menuStyle,
    multiSelect,
    optionsStyle,
    optionsStyleSelected,
    optionsStyleNotSelected,
    placeholderStyle,
    singleSelectedStyle,
    multiSelectStyle,
    menuSpaceFromElement,
  },
  ...props
}) {
  const classId = classModalId || 'clt-modal'
  const [showModal, setShowModal] = useState(false)
  const buttonRef = useRef(null)

  const removeItem = (e, item) => {
    e.stopPropagation()
    const remainingSelection = selectedItem
      ?.map((cItem) => cItem)
      ?.filter((cItem) => cItem?.value !== item?.value)
    setselectedItem(remainingSelection)
  }

  const handleItemClick = (e, item) => {
    e.stopPropagation()
    if (
      multiSelect &&
      !selectedItem?.some((sItem) => sItem?.value === item.value)
    ) {
      setselectedItem([...selectedItem, item])
    } else if (!multiSelect) {
      setselectedItem([item])
      setShowModal(false)
    } else if (selectedItem?.some((sItem) => sItem?.value === item.value)) {
      removeItem(e, item)
    }
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const variation = variant
    ? variants[variant?.toLowerCase()]
    : variants['default']

  return (
    <div className={'relative w-full'}>
      <div
        className={twMerge(
          variation,
          `${classId} py-[10px] px-4 select-none border-[1px] border-secondary-300 relative rounded-md`,
          className
        )}
        {...props}
        ref={buttonRef}
        onClick={toggleModal}
      >
        {/* Placeholder */}
        {!multiSelect && selectedItem?.length === 0 && (
          <p
            className={twMerge('text-neutral-400', placeholderStyle)}
            onClick={toggleModal}
          >
            {placeholder || '-- Select --'}
          </p>
        )}
        {/* When single item selected */}
        {!multiSelect && selectedItem?.length === 1 && (
          <p className={twMerge('', singleSelectedStyle)} onClick={toggleModal}>
            {selectedItem[0]?.name}
          </p>
        )}
        {multiSelect && (
          <div className={`${classId} flex flex-wrap gap-1`}>
            {selectedItem?.length > 0 ? (
              selectedItem?.map((item, index) => {
                return (
                  <p
                    key={index}
                    onClick={(e) => removeItem(e, item)}
                    className={twMerge(
                      classId,
                      'py-1 px-3 bg-secondary-200 rounded-full',
                      multiSelectStyle
                    )}
                  >
                    {item?.name}
                  </p>
                )
              })
            ) : (
              <p
                className={twMerge(
                  classId,
                  'text-neutral-400',
                  placeholderStyle
                )}
                onClick={toggleModal}
              >
                {placeholder || '-- Select --'}
              </p>
            )}
          </div>
        )}
        <Icon_down className="size-4 absolute right-3 top-0 bottom-0 my-auto" />
      </div>
      {showModal && (
        <Menu
          showModal={showModal}
          setShowModal={setShowModal}
          referenceElement={buttonRef}
          containerHeight={containerHeight}
          containerWidth={containerWidth}
          spaceFromElement={menuSpaceFromElement}
          className={twMerge(
            'justify-start divide-y-[1px] divide-neutral-300 z-50',
            menuStyle
          )}
          classId={classId} // Optional
        >
          {options?.map((item, index) => {
            return (
              <p
                key={index}
                onClick={(e) => handleItemClick(e, item)}
                className={twMerge(
                  `p-3 ${
                    selectedItem?.some((sItem) => sItem?.value === item.value)
                      ? `${twMerge('bg-neutral-200', optionsStyleSelected)}`
                      : `${twMerge(
                          'hover:bg-secondary-200',
                          optionsStyleNotSelected
                        )}`
                  }`,
                  optionsStyle
                )}
              >
                {item.name}
              </p>
            )
          })}
        </Menu>
      )}
    </div>
  )
}
