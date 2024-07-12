import { createClient } from '@/config/supabase/supabaseClient'

const generateDateString = () => {
  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const milliSeconds = date.getMilliseconds()
  return `${day}${month}${year}${milliSeconds}`
}

export const uploadImagesToSupabase = async ({ images, userId }) => {
  const supabase = createClient()
  const uploadFile = images?.map(async (imgObj) => {
    const imageName = imgObj?.file?.path.replace(' ', '_').toLowerCase()
    const dateString = generateDateString()
    const { data: imageData, error } = await supabase.storage
      .from('gallery')
      .upload(`${userId}/${dateString}-${imageName}`, imgObj?.file, {
        cacheControl: '3600',
        upsert: false,
      })
      console.log('imageData', imageData)
    console.log('error', error)
    return imageData
  })

  const imagesUploadedToStorage = await Promise.all(uploadFile)
  const { data, error } = await supabase
    .from('gallery')
    .insert(imagesUploadedToStorage)
    .select()
  if (data) {
    return { data: data, error: null }
  } else if (error) {
    console.log('error', error)
    return { data: null, error: error?.message }
  }
}
