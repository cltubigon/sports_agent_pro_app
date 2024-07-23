'use server'
import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'

export const fetchGalleryImages = async (user) => {
  const supabase = createServer()
  const { data: images, error } = await supabase
    .from('gallery')
    .select('*')
    .eq('owner_id', user?.id)
  return images
}

export const InformationPicture = async ({ dataImg, userId }) => {
  const supabase = createServer()

  const { data, error } = await supabase
    .from('users')
    .update({ profilePicture: dataImg })
    .eq('id', userId)
    .select()

  if (data) {
    return { data: data, error: null }
  }
  if (error) {
    return { data: null, error: error?.message }
  }
}

export const revalidatePathCustom = (path) => {
  // accepts string
  revalidatePath(path)
}

export const updateProfilePicture = async ({ dataImg, userId }) => {
  const supabase = createServer()

  const { data, error } = await supabase
    .from('users')
    .update({ profilePicture: dataImg })
    .eq('id', userId)
    .select()

  if (data) {
    return { data: data, error: null }
  }
  if (error) {
    return { data: null, error: error?.message }
  }
}

export const updateProfileInformation = async ({ data, id }) => {
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
    return { error: error?.message }
  }
}

export const deletePhoto = async ({ path, bucket }) => {
  const supabase = createServer()
  const { error: storageError } = await supabase.storage
    .from(bucket)
    .remove(path)

  const { error: databaseError } = await supabase
    .from('gallery')
    .delete('')
    .in('path', path)

  if (storageError || databaseError) {
    const error = { storageError, databaseError }
    return error
  }
  revalidatePath('/profile')
}
