'use server'

import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'

export const applyToPost = async (data) => {
  console.log('datassss', data)
  const { id } = data
  const supabase = createServer()
  const { data: applyResult, error } = await supabase
    .from('applications')
    .insert([{ post_id: id }])
    .select()
  if (applyResult) {
    console.log('revalidating')
    revalidatePath('/opportunities')
    return { data: applyResult, error: null }
  } else if (error) {
    return { data: null, error: error?.message }
  }
}

export const unApplyToPost = async (data) => {
  const { id } = data
  console.log('data', data)
  console.log('id', id)
  const supabase = createServer()
  const { error } = await supabase.from('applications').delete().eq('id', id)
  if (error) {
    return error?.message
  }
  console.log('revalidating')
  revalidatePath('/opportunities')
  return null
}
