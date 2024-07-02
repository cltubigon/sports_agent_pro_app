import React, { useState, useRef } from 'react'
import { useSearchBox } from 'react-instantsearch'
import Icon_search from '../../icons/Icon_search'

function CustomSearchBox({ setpopup, ...props }) {
  const { query, refine } = useSearchBox(props)
  const [inputValue, setInputValue] = useState(query)
  const inputRef = useRef(null)

  function setQuery(newQuery) {
    setInputValue(newQuery)

    refine(newQuery)
  }

  const handleEscClick = (e) => {
    e.preventDefault()
    setQuery('')
    setpopup(null)
  }

  return (
    <div className="flex items-center gap-4 px-6 py-[17px]">
      <Icon_search className="size-5" />
      <form
        className="w-full flex items-center"
        action=""
        role="search"
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          event.stopPropagation()

          if (inputRef.current) {
            inputRef.current.blur()
          }
        }}
      >
        <input
          {...props}
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder={props.placeholder}
          spellCheck={false}
          maxLength={512}
          type="text"
          value={inputValue}
          onChange={(event) => {
            setQuery(event.currentTarget.value)
          }}
          className="w-full pt-[10px] pb-[6px] focus-visible:outline-none"
          autoFocus
        />
        <p
          onClick={handleEscClick}
          className={`cursor-pointer py-[2px] w-fit h-fit leading-5  font-semibold px-1 border-[1px] border-[#EAEAEB] rounded-md`}
        >
          ESC
        </p>
      </form>
    </div>
  )
}

export default CustomSearchBox
