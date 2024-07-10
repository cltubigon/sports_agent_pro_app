'use server'
import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'

export const updateBasicInfo = async ({ data, id }) => {
  const {
    firstName,
    lastName,
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
      firstName: firstName,
      lastName: lastName,
      whichBestDescribesYou: whichBestDescribesYou,
      dateOfBirth: dateOfBirth,
      genderIdentity: genderIdentity,
      sports: sports,
      currentTeams: currentTeams,
    })
    .select()
    .eq('id', id)
  if (result) {
    return { error: null }
  }
  if (error) {
    console.log('error', error)
    return { error: error?.message }
  }

  revalidatePath('/profile')
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
    return { error: null }
  }
  if (error) {
    console.log('error', error)
    return { error: error?.message }
  }

  revalidatePath('/profile')
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
    return { error: null }
  }
  if (error) {
    console.log('error', error)
    return { error: error?.message }
  }

  revalidatePath('/profile')
}
