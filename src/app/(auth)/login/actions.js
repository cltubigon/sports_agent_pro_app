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

export const handleLoginWithOAuth = async (provider) => {
  const supabase = createServer()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo:
        process.env.NEXT_PUBLIC_ROOT_DOMAIN + '/confirm-signup/callback',
    },
  })

  if (data.url) {
    redirect(data.url) // use the redirect API for your server framework
  }
}
