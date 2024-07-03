import Link from 'next/link'
import Button from './components/Button'

export default function NotFound() {
  return (
    <div className={'py-10 md:py-[80px] h-screen'}>
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 h-full text-center flex justify-center flex-col'
        }
      >
        <h3 className={'text-3xl md:text-4xl font-bold'}>404 Not Found</h3>
        <p>Could not find requested resource.</p>
        <div className={'w-fit mx-auto mt-5'}>
          <Link href="/" className="">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
