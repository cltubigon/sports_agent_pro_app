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

export const revalidatePathCustom = (path) => {
  // accepts string
  revalidatePath(path)
}

export const updateBasicInfo = async ({ data, id }) => {
  const {
    first_name,
    last_name,
    whichBestDescribesYou,
    dateOfBirth,
    genderIdentity,
    sports,
    currentTeams,
  } = data

  const supabase = createServer()

  const { data: result, error } = await supabase
    .from('users')
    .update({
      first_name: first_name,
      last_name: last_name,
      whichBestDescribesYou: whichBestDescribesYou,
      dateOfBirth: dateOfBirth,
      genderIdentity: genderIdentity,
      sports: sports,
      currentTeams: currentTeams,
    })
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

export const updateBio = async ({ data, id }) => {
  const { bio, ethnicity, identifiers, language } = data

  const supabase = createServer()

  const { data: result, error } = await supabase
    .from('users')
    .update({
      bio: bio,
      identifiersInterests: identifiers,
      language: language,
      ethnicity: ethnicity,
    })
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

export const updateAthleticProfile = async ({ data, id }) => {
  const {
    position,
    previousTeams,
    experience,
    leaguesAndConferences,
    athleticAccolades,
    discipline,
  } = data

  const supabase = createServer()

  const { data: result, error } = await supabase
    .from('users')
    .update({
      position: position,
      previousTeams: previousTeams,
      experience: experience,
      leaguesAndConferences: leaguesAndConferences,
      athleticAccolades: athleticAccolades,
      discipline: discipline,
    })
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

export const updateLocationFunc = async ({ data, id }) => {
  const { currentLocation, homeTown } = data

  const supabase = createServer()

  const { data: result, error } = await supabase
    .from('users')
    .update({
      currentLocation: currentLocation,
      homeTown: homeTown,
    })
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
