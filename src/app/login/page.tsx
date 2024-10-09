'use client'
import LoginForm from "@/src/components/LoginForm";
import Image from "next/image";
import Link from "next/link";


const LoginPage: React.FC = () => {
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

                <h2 className="text-h3 sm:text-h2 font-bold text-gray-800 text-center mb-6">Login</h2>

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

                        <p className="">
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

                        <p className="">
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

                        <p className="">
                            Autodesk
                        </p>
                    </div>


                </div>

                <LoginForm />

                <p className="text-gray-300 mt-6 text-b3 text-center">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-black text-b4 hover:underline" >
                        Sign Up for Review Sync
                    </Link>
                </p>

            </div>


        </div>
    );
};

export default LoginPage;
