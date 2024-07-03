'use server'
import { createServer } from './supabaseServer'

export const getCurrentUser = async () => {
  const supabase = createServer()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    return null
  } else if (user) {
    const { data, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', user?.email)
    if (data) {
      return data[0]
    } else if (userError) {
      console.log('error', error)
    }
  }
}
