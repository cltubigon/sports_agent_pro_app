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
    {!showPassword ? 'show' : 'hide'}
  </InputPasswordVisibility>
</InputGroup> */
}

const InputPasswordVisibility = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className="absolute right-2 top-0 bottom-0 my-auto py-1 px-2 text-xs bg-neutral-100 hover:bg-neutral-50 active:bg-neutral-200 text-neutral-600"
    >
      {children}
    </Button>
  )
}

export default InputPasswordVisibility
