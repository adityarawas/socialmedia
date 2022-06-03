import React from 'react'
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import shareView from '../assets/loginbg.mp4';
import {FcGoogle} from 'react-icons/fc'
const Login = () => {


  const responseGoogle = (resp) =>{

  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video 
        src={shareView}
        type="vide/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay'>
          <div className='p-5'>
            <span className='text-white text-3xl'>Share <span className='font-extrabold text-gray-400'>Pix</span> .</span>
          </div>
          <div className='shadow-2xl'>
            <GoogleLogin 
              clientId=""
              render={(renderProps)=>(
                <button 
                type="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className='bg-mainColor flex justify-between items-center p-3 outline-none rounded-lg'>
                  <FcGoogle className='mr-4' /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login