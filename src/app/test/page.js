'use client'
import React from 'react'
import Button from '../components/Button'
import Icon_facebook from '../components/icons/Icon_facebook'
import Script from 'next/script'

const TestPage = () => {
  const onLoad = () => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
        cookie: true,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v16.0',
      })

      FB.getLoginStatus(function (response) {
        console.log('response', response)
        // statusChangeCallback(response)
      })
    }
  }
  return (
    <div className={'py-10 md:py-[80px]'}>
      <div id="fb-root"></div>
      {/* <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0&appId=985678833043287"
        nonce="0sVNlcOb"
      ></script> */}
      <div className={'container md:px-6 lg:px-10 xl:px-0 '}>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={onLoad}
        />
        <h5 className={'font-tinos text-xl md:text-2xl font-bold mb-5'}>
          Test Page
        </h5>
        <Button>
          <Icon_facebook /> Facebook Login
        </Button>

        {/* <fb:login-button
          scope="public_profile,email"
          onlogin="checkLoginState();"
        ></fb:login-button> */}
        <div
          className="fb-login-button"
          datawidth=""
          datasize=""
          databuttontype=""
          datalayout=""
          dataautologoutlink="true"
          datausecontinueas="false"
        ></div>
      </div>

      {/* Your page content goes here */}
    </div>
  )
}

export default TestPage
