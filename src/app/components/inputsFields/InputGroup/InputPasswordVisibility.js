import React from 'react'
import Button from '../../Button'

// Example:
// const [showPassword, setshowPassword] = useState(false)
// const showHideClicked = () => {
// setshowPassword(()=> !showPassword)
// }

// !!!!!!!! Requires InputGroup and Input
{
  /* <InputGroup>
  <Input
    id="newPassword"
    type={showPassword ? 'text' : 'password'}
    placeholder="New password"
    error={errors?.newPassword?.message}
    {...register('newPassword', {
      required: 'New password is required',
      validate: validatePassword,
    })}
  />
  <InputPasswordVisibility onClick={showHideClicked}>
    {!showPassword ? <Icon_eye_opened /> : <Icon_eye_closed />}
  </InputPasswordVisibility>
</InputGroup> */
}

const InputPasswordVisibility = ({ children, ...props }) => {
  return (
    <div
      className={
        'absolute right-2 top-0 bottom-0 my-auto text-xl p-1 text-neutral-600 w-fit h-fit select-none'
      }
      {...props}
    >
      {children}
    </div>
  )
}

export default InputPasswordVisibility
