'use server'
import { createServer } from './supabaseServer'

export const getOwner = async (owner_id) => {
  const supabase = createServer()
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('id', owner_id)

  if (error) {
    return null
  }
  return data
}
