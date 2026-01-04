import React from 'react'
import Image from 'next/image';
import SignInFormClient from '@/features/auth/components/sign-in-form-client';

const SignInPage = () => {
  return (
    <div className='flex flex-row w-screen min-h-screen lg:py-4'>
        <div className='bg-background hidden lg:flex lg:w-1/2 items-center justify-between flex-1'>
         <div className='relative w-full h-full'>
      <Image 
        src={"/code-setup.jpg"} 
        alt="Login-Image" 
        fill
        className='object-contain rounded-2xl'
        priority
      />
    </div>
        </div>
        <div className='flex flex-col w-full lg:w-1/2 lg:rounded-l-2xl p-4 bg-zinc-800 items-center justify-center'>
          <div className='flex flex-row p-12 items-center justify-center gap-2'>
            <Image src={"/logo.svg"} alt="Login-Image" height={70} 
        width={70}/>
        <span className="text-6xl font-semibold flex items-center gap-2">
                Coreco
                <span className="text-xs rounded-full bg-primary/10 px-2 py-1 w-fit">
                  BETA
                </span>
              </span>
          </div>
        <SignInFormClient />
        </div>
    </div>
  )
}

export default SignInPage;