'use server'
import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signup(data) {
  const supabase = createServer()
  const { email, password } = data

  let {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/callback`,
    },
  })

  if (error) {
    console.log('error', error)
  }
  if (!user?.user_metadata?.email) {
    return 'Email already exists.'
  } else {
    revalidatePath('/', 'layout')
    redirect(`/confirm-signup/?email=${email}`)
  }
}
