'use server'

import { createServer } from '@/config/supabase/supabaseServer'

export const sendOffer = async (oldData) => {
  const compensation = oldData?.selectedActivities
    ?.map((item) => parseFloat(item?.compensation?.replace('$ ', '') || 0))
    ?.reduce((accu, curr) => accu + curr)
  const total = parseFloat((compensation * 0.05)?.toFixed(2)) + compensation
  const newData = { ...oldData, total }

  const supabase = createServer()
  const { data, error } = await supabase
    .from('posts')
    .insert([newData])
    .select()
  if (data) {
    return { data, error: null }
  } else if (error) {
    return { data: null, error: error?.message }
  }
}
