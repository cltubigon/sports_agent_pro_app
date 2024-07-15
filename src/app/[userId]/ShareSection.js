import Icon_left from '../components/icons/Icon_left'
import CopyClipboard from './CopyClipboard'

const ShareSection = ({ user }) => {
  return (
    <div className={'py-2 md:py-4'}>
      <div className={'max-w-[1500px] mx-auto px-3 md:px-6 2xl:px-0'}>
        <div className={'flex justify-between items-center'}>
          <div className={'flex gap-2 text-sm items-center'}>
            <Icon_left className="size-4" />
            <p className={'font-semibold'}>Discover athletes</p>
          </div>
          <CopyClipboard />
        </div>
      </div>
    </div>
  )
}

export default ShareSection
