import ContentContainerDashboard from '@/app/components/ThisWebsiteOnly/Dashboard/ContentContainerDashboard'
import DashboardContentMenu from '@/app/components/ThisWebsiteOnly/Dashboard/DashboardContentMenu'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import ViewProfileButton from './ViewProfileButton'
import { fetchGalleryImages } from './actions'
import ProfilePicture from './profile-picture/ProfilePicture'
import AthleteProfile from './athlete-profile/AthleteProfile'
import BrandProfile from './brand-profile/BrandProfile'

const ProfilePage = async () => {
  const user = await getCurrentUser()
  const images = await fetchGalleryImages(user)

  const menu = [
    { name: 'Profile', value: 'profile' },
    { name: '', value: 'spacer' },
  ]
  const sports = user?.sports?.map((item) => item?.name)
  const currentTeams = user?.currentTeams?.map((item) => item?.name)
  const combinedSportsTeam = [...sports, ...currentTeams]
  const formatSportsTeam = combinedSportsTeam?.join(' • ')
  return (
    <ContentContainerDashboard>
      <DashboardContentMenu menu={menu}>Profile</DashboardContentMenu>
      <div className={'p-5'}>
        {/* Profile Pic */}
        <div className={'flex flex-col md:flex-row md:justify-between gap-5'}>
          <div className={'flex gap-5 items-center w-full'}>
            <ProfilePicture user={user} images={images} />
            <div className={''}>
              {(user?.first_name || user?.last_name || user?.display_name) && (
                <h5 className={'font-tinos text-xl md:text-2xl font-bold'}>
                  {capitalizeAllFirstLetter(
                    `${user?.first_name || ''} ${
                      user?.last_name || user?.display_name || ''
                    }`
                  )}
                </h5>
              )}
              {user?.whichBestDescribesYou?.length > 0 && (
                <p className={'text-sm my-2'}>
                  {user?.whichBestDescribesYou[0]?.name}
                </p>
              )}
              {formatSportsTeam && (
                <p className={'text-xs mt-1'}>{formatSportsTeam}</p>
              )}
              <ViewProfileButton
                user={user}
                className={'flex mt-2 lg:mt-[unset] lg:hidden'}
              />
            </div>
          </div>
          <ViewProfileButton
            user={user}
            className={'hidden lg:flex min-w-[116px]'}
          />
        </div>
        {user?.account_type === 'athlete' && (
          <AthleteProfile user={user} images={images} />
        )}
        {user?.account_type === 'brand' && <BrandProfile user={user} />}
      </div>
    </ContentContainerDashboard>
  )
}

export default ProfilePage
