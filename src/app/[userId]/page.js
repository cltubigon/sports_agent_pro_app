import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { createServer } from '@/config/supabase/supabaseServer'
import React from 'react'

export const revalidate = 3600

const UserId = async ({ params }) => {
  const supabase = createServer()
  const { data, error } = await supabase
    .from('user')
    .select()
    .eq('id', params?.userId)
  console.log('data', data)
  return <div></div>
}

export default UserId
