'use server'
import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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
        accountType,
      },
    },
  })

  console.log('user', user)
  if (error) {
    console.log('error', error)
    return error?.message
  }
  if (user) {
    revalidatePath('/', 'layout')
    redirect(`/signup?step=3`)
  }
}

export const verifyOtp = async (data) => {
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
  console.log('session', session)
  if (error) {
    return { error: error.message }
  } else {
    return { error: null }
  }
}

export const stepFourUpdateInfo = async ({ data, id }) => {
  const { accountType, whichBestDescribesYou, genderIdentity } = data

  const supabase = createServer()

  const { data: result, error } = await supabase
    .from('users')
    .update(data)
    .select()
    .eq('id', id)
  if (result) {
    revalidatePath('/profile')
    return { error: null }
  }
  if (error) {
    console.log('error', error)
    return { error: error?.message }
  }
}
