'use server'

import { createServer } from '@/config/supabase/supabaseServer'

export const resetPasswordForEmail = async (data) => {
  const { email } = data
  const supabase = createServer()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/reset-password/api`,
  })
  console.log('error', error)
  return error?.code || null
}
