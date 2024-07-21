'use server'

import { createServer } from '@/config/supabase/supabaseServer'

// const { error } = await updatePassword({ data })

export const updatePassword = async ({ data }) => {
  const { newPassword } = data
  console.log('data', data)
  console.log('newPassword', newPassword)
  const supabase = createServer()
  const { data: updatedPassword, error } = await supabase.auth.updateUser({
    password: newPassword,
  })
  if (error) {
    console.log('error', error)
    return { error: error?.code }
  }
  console.log('updatedPassword', updatedPassword)
}
