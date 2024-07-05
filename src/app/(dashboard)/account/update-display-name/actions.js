'use server'
import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'

export const updateDisplayName = async (data) => {
  const { id, displayName } = data
  const supabase = createServer()

  const { data: userData, error } = await supabase
    .from('users')
    .update({ display_name: displayName })
    .eq('id', id)
    .select()

  if (userData) {
    revalidatePath('/account')
    return { data: userData[0], error: null }
  }
  if (error) {
    return { data: null, error: error?.message }
  }
}
