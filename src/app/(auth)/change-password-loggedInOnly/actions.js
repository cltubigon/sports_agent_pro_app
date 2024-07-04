'use server'

import { createServer } from '@/config/supabase/supabaseServer'

// const { error } = await updatePassword({ data })

export const updatePassword = async ({ data }) => {
  const { newPassword } = data
  const supabase = createServer()
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  })
  if (error) {
    return { error: error?.code }
  }
}
