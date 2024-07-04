'use server'

import { createServer } from '@/config/supabase/supabaseServer'

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
