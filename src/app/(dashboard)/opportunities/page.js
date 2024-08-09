import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { createServer } from '@/config/supabase/supabaseServer'
import React from 'react'
import AthleteOpportunities from './athlete/AthleteOpportunities'
import BrandOpportunities from './brand/BrandOpportunities'

const OpportunitiesPage = async () => {
  const supabase = createServer()
  const user = await getCurrentUser()
  const account_type = user?.account_type

  let posts
  if (account_type === 'brand') {
    const { data: ownerPost, ownerPostError } = await supabase
      .from('posts')
      .select(`*, users (profilePicture, first_name, last_name, display_name)`)
      .eq('owner_id', user?.id)
    posts = ownerPost
  } else if (account_type === 'athlete' || account_type === 'coach') {
    const { data: allPosts, allPostsError } = await supabase
      .from('posts')
      .select(
        `*, users (profilePicture, first_name, last_name, display_name), applications(*), favorite_opportunities(*)`
      )
    posts = allPosts
  }
  return (
    <div>
      {(account_type === 'athlete' || account_type === 'coach') && (
        <AthleteOpportunities
          posts={posts}
          user={user}
          account_type={account_type}
        />
      )}
      {account_type === 'brand' && (
        <BrandOpportunities
          posts={posts}
          user={user}
          account_type={account_type}
        />
      )}
    </div>
  )
}

export default OpportunitiesPage
