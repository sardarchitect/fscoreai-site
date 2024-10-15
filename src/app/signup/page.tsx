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
                src="/fscorebold.svg"
                alt="image"
                width={166}
                height={41}
                style={{
                    objectFit: "cover",
                }}
                className="mb-10"
            />
            <div className="grid grid-col-4  p-3 max-w-lg w-full">

                <h2 className="h2 sm:h2 text-gray-800 text-center mb-6">Sign Up</h2>

                <div className="grid grid-cols-1  gap-2">
                    <div className="grid grid-cols-2 justify-center p-4 bg-gray-200 text-[#181824] rounded hover:bg-blue-600">
                        <div className="justify-self-end pr-5">
                            <Image
                                src="/google.svg"
                                alt="image"
                                width={24}
                                height={24}
                                className=""
                            />
                        </div>

                        <p className="te2">
                            Google
                        </p>
                    </div>
                    <div className="grid grid-cols-2 justify-center p-4 bg-gray-200 text-[#181824] rounded hover:bg-blue-600">
                        <div className="justify-self-end pr-5">
                            <Image
                                src="/microsoft.svg"
                                alt="image"
                                width={24}
                                height={24}
                                className=""
                            />
                        </div>

                        <p className="te2">
                            Microsoft
                        </p>
                    </div>
                    <div className="grid grid-cols-2 p-4 bg-gray-200 text-[#181824] rounded hover:bg-blue-600">
                        <div className="justify-self-end pr-5">
                            <Image
                                src="/autodesk-02 1.svg"
                                alt="image"
                                width={24}
                                height={24}
                                className=""
                            />
                        </div>

                        <p className="te2">
                            Autodesk
                        </p>
                    </div>


                </div>

                <SignupForm />

                <p className="text-gray-300 mt-6 b3 text-center">
                    Already have an account?{' '}
                    <Link href="/login" className="text-black text-b4 hover:underline" >
                        Login for Review Sync  
                       
                    </Link>
                </p>

            </div>


        </div>
    )
}

export default SignPage;