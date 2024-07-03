'use client'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Divider from '@/app/components/Divider'
import Icon_google from '@/app/components/icons/Icon_google'
import Button from '@/app/components/Button'
import Checkbox from '@/app/components/inputsFields/Checkbox'
import Toast from '@/app/components/Toast'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import InputPasswordVisibility from '@/app/components/inputsFields/InputGroup/InputPasswordVisibility'
import LoginSignupContainer from '@/app/components/LoginSignupContainer'
import Link from 'next/link'
import Icon_spinner from '@/app/components/icons/Icon_spinner'

const ClientLoginFallback = () => {
  return (
    <LoginSignupContainer>
      <form style={{ width: '100%' }}>
        <div className={'flex flex-col gap-4'}>
          <div>
            <label htmlFor="email">Email address:</label>
            <Input className="border-[#D1D5DB]" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <InputGroup>
              <Input className="border-[#D1D5DB]" id="password" />
              <InputPasswordVisibility>show</InputPasswordVisibility>
            </InputGroup>
            <div className={'flex justify-between mt-1 mb-3'}>
              <Checkbox id="savePassword">Remember me</Checkbox>
              <Link href="/forgot-password">
                <p className={'text-primary select-none'}>Forgot password?</p>
              </Link>
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full">
              <div className={'relative'}>
                Sign In{' '}
                <Icon_spinner className="animate-spin absolute right-[-35px] top-0 bottom-0 my-auto" />
              </div>
            </Button>
            <Link href={'/signup'}>
              <p
                className={'text-center mt-1 text-primary'}
              >{`Don't have an account?`}</p>
            </Link>
          </div>

          <div className="my-2">
            <Divider className="border-b-[1px] border-[#E5E7EB] mt-3">
              <span className="px-4">Or continue with</span>
            </Divider>
          </div>
          <div className={'flex gap-4 select-none'}>
            <div
              className={
                'flex cursor-pointer rounded-md w-full justify-center shadow-sm border-[1px] py-[10px] px-3 border-[#D1D5DB] gap-2'
              }
            >
              <Icon_google className="size-6" />
              Google
            </div>
            {/* <div
              className={
                'flex cursor-pointer rounded-md w-full justify-center shadow-sm border-[1px] py-[10px] px-3 border-[#D1D5DB] gap-2'
              }
              onClick={() => handleLoginWithOAuth('facebook')}
            >
              <Icon_facebook className="size-6 text-[#1977F3]" />
              Facebook
            </div> */}
          </div>
        </div>
      </form>
    </LoginSignupContainer>
  )
}

export default ClientLoginFallback
