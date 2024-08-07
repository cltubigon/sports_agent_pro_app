'use server'

import { createServer } from '@/config/supabase/supabaseServer'

// const { error } = await updatePassword({ data })

export const updatePassword = async ({ data }) => {
  const { password } = data
  const supabase = createServer()
  const { data: updatedPassword, error } = await supabase.auth.updateUser({
    password: password,
  })
  if (error) {
    return { error: error?.message }
  }
}
