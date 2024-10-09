'use client'

import SignupForm from '@/src/components/SignupForm';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

function SignPage() {
    
    return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white  relative" style={{
                    backgroundImage: 'url("/Waves.svg")',
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh'
                }}>

            <Image
                src="/Logo.svg"
                alt="image"
                width={166}
                height={41}
                style={{
                    objectFit: "cover",
                }}
                className="mb-5"
            />
            <div className="grid grid-col-4  p-3 max-w-lg w-full">

                <h2 className="text-h3 sm:text-h2 font-bold text-gray-800 text-center mb-6">Sign Up</h2>

                <div className="grid grid-cols-3 sm:grid-cols-1  gap-2">
                    <button className="justify-center flex gap-3 p-4 bg-gray-200 text-[#181824] rounded hover:bg-blue-600">
                    <Image
                src="/google.svg"
                alt="image"
                width={24}
                height={24}
                style={{
                    objectFit: "cover",
                }}
                className="mx-0"
            />
                        
                        Google
                    </button>
                    <button className="justify-center flex  p-4 bg-gray-200 text-[#181824] rounded hover:bg-gray-600">
                    <Image
                src="/microsoft.svg"
                alt="image"
                width={24}
                height={24}
                style={{
                    objectFit: "cover",
                }}
                className="mx-2 sm:mx-2"
            />
                        
                        Windows
                    </button>
                    <button className="justify-center flex p-4 bg-gray-200 text-[#181824] rounded hover:bg-green-600">
                    <Image
                src="/autodesk-02 1.svg"
                alt="image"
                width={24}
                height={24}
                style={{
                    objectFit: "cover",
                }}
                className="mx-2 sm:mx-2"
            />
                        
                        AutoDesk
                    </button>
                </div>

                <SignupForm />

                <p className="text-gray-300 mt-6 text-b3 text-center">
                    Already have an account?{' '}
                    <Link href="/login" className="text-black text-b4 hover:underline" >
                        Log In for Review Sync
                    </Link>
                </p>

            </div>


        </div>
    )
}

export default SignPage;