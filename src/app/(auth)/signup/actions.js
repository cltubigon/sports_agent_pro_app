'use server'
import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { updatePassword } from '../change-password-loggedInOnly/actions'

export async function signup(data) {
  const { email, password, phoneNumber, first_name, last_name, accountType } =
    data
  const supabase = createServer()
  const { data: user, error } = await supabase.auth.signInWithOtp({
    email: email,
    password: password,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      // shouldCreateUser: false,
      data: {
        name: `${first_name} ${last_name}`,
        first_name,
        last_name,
        phoneNumber,
        account_type: accountType,
      },
    },
  })

  if (error) {
    return error?.message
  }
  if (user) {
    revalidatePath('/', 'layout')
    redirect(`/signup?step=3`)
  }
}

export const verifyOtp = async ({ data, password, hasRedirect }) => {
  const { email, token } = data
  const supabase = createServer()
  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    email,
    token: token,
    type: 'email',
  })

  if (error) {
    const theError = error?.message
    return theError
  } else {
    if (password) {
      await updatePassword({ data: { password } })
      return null
    }
    if (hasRedirect) {
      redirect(hasRedirect)
    }
  }
}
