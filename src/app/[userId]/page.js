import { createServer } from '@/config/supabase/supabaseServer'
import { notFound } from 'next/navigation'
import React from 'react'
import Navigation from '../components/ThisWebsiteOnly/Navigation2/Navigation'
import ShareSection from './ShareSection'
import Gallery from './gallery-section/Gallery'
import { fetchGalleryImages } from '../(dashboard)/profile/actions'
import Content from './content-section/Content'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'

export const revalidate = 3600

const UserId = async ({ params }) => {
  const supabase = createServer()
  const user = await getCurrentUser()
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', params?.userId)
  const person = data[0]

  const images = await fetchGalleryImages(person)

  if (error || person?.length <= 0) {
    return notFound()
  }
  return (
    <div>
      <Navigation user={user} />
      <ShareSection person={person} />
      <Gallery images={images} />
      <Content person={person} />
    </div>
  )
}

export default UserId
