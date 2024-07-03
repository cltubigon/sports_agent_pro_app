'use server'
import { redirect } from 'next/navigation'
import { createServer } from './supabaseServer'

export const isAuthenticated = async (path) => {
  // Example path: "dashboard"  ***** The result will be /login?next=dashboard
  const supabase = createServer()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect(`/login?next=${path}` || '/')
  }
  return data?.user
}
