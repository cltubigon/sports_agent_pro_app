'use server'

import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'

export const insertOfferOrOpportunity = async (oldData) => {
  const compensation = oldData?.selectedActivities
    ?.map((item) => parseFloat(item?.compensation?.replace('$ ', '') || 0))
    ?.reduce((accu, curr) => accu + curr)
  const total = parseFloat((compensation * 0.05)?.toFixed(2)) + compensation // This will be used in Stripe
  const newData = { ...oldData, total: compensation }

  const supabase = createServer()
  const { data, error } = await supabase
    .from('posts')
    .insert([newData])
    .select()
  if (data) {
    revalidatePath('/opportunities')
    return { data, error: null }
  } else if (error) {
    return { data: null, error: error?.message }
  }
}

export const updateOfferOrOpportunity = async ({ oldData, id }) => {
  const compensation = oldData?.selectedActivities
    ?.map((item) => parseFloat(item?.compensation?.replace('$ ', '') || 0))
    ?.reduce((accu, curr) => accu + curr)
  const total = parseFloat((compensation * 0.05)?.toFixed(2)) + compensation // This will be used in Stripe
  const newData = { ...oldData, total: compensation }
  const supabase = createServer()
  const { data, error } = await supabase
    .from('posts')
    .update(newData)
    .eq('id', id)
    .select()
  if (data) {
    revalidatePath('/opportunities')
    return { data, error: null }
  } else if (error) {
    return { data: null, error: error?.message }
  }
}

export const insertOrUpdate = async ({ data, id }) => {
  if (id) {
    return await updateOfferOrOpportunity({ oldData: data, id })
  } else {
    return await insertOfferOrOpportunity(data)
  }
}
