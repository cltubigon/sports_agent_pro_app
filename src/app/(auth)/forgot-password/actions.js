'use server'

import { createServer } from '@/config/supabase/supabaseServer'
import { redirect } from 'next/navigation'

export const resetPasswordForEmail = async (data) => {
  const { email } = data
  console.log('dataaaa', data)
  const supabase = createServer()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/reset-password/api`,
  })
  return error?.code || null
}

export const signInWithOtp = async ({ data }) => {
  console.log('data', data)
  const supabase = createServer()
  const { data: user, error } = await supabase.auth.signInWithOtp(data)

  if (error) {
    return error?.message
  }
}
