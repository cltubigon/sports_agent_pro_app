'use server'

import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login({ data, redirectTo }) {
  const { email, password } = data
  const supabase = createServer()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    return error.message
  }

  revalidatePath('/', 'layout')
  redirect(redirectTo ? `/${redirectTo}` : '/dashboard')
}
