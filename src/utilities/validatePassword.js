export const validatePassword = (value) => {
  if (!value) {
    return 'Password is required'
  }
  if (value.length < 8) {
    return '8 characters required'
  }
  if (!/(?=.*[A-Z])/.test(value)) {
    return 'An uppercase letter is required'
  }
  if (!/(?=.*[@$!%*?&])/.test(value)) {
    return 'A special character is required'
  }
  if (!/\d+/.test(value)) {
    return 'A number is required'
  }
  return true
}