'use client'
import LoginForm from "@/src/components/LoginForm";
import Image from "next/image";
import Link from "next/link";

const LoginPage: React.FC = () => {
    return (
        <main className="w-auto m-auto">
        <div className="flex flex-col items-center justify-center h-auto bg-white relative" style={{
            backgroundImage: 'url("/Waves.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
        }}>
 

            <div className="grid grid-col-4 mb-28 p-3 max-w-lg w-full">
            <div className="flex  justify-center w-auto">
                <Image
                    src="/fscorebold.svg"
                    alt="logo"
                    width={166} // Max width for large screens
                    height={41}
                    className="w-40 h-auto sm:w-[166px] sm:h-[41px] mb-24" // Set width for small screens with responsiveness
                />
            </div>
                <h2 className="h2 sm:h2 text-gray-800 text-center mb-10">Login</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="flex items-center cursor-pointer justify-center p-4 bg-gray-200 text-[#181824] rounded hover:bg-blue-600">
                        <Image
                            src="/google.svg"
                            alt="google logo"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        <p className="te2">Google</p>
                    </div>

                    <div className="cursor-pointer flex items-center justify-center p-4 bg-gray-200 text-[#181824] rounded hover:bg-blue-600">
                        <Image
                            src="/microsoft.svg"
                            alt="microsoft logo"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        <p className="te2">Microsoft</p>
                    </div>

                    <div className="flex items-center cursor-pointer justify-center p-4 bg-gray-200 text-[#181824] rounded hover:bg-blue-600">
                        <Image
                            src="/autodesk-02 1.svg"
                            alt="autodesk logo"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        <p className="te2">Autodesk</p>
                    </div>
                </div>

                <LoginForm />

                <p className="text-gray-600 mt-20 b3 text-center">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-black text-b4 underline">
                        Sign Up for Review Sync
                    </Link>
                </p>
            </div>
        </div>
        </main>
    );
};

export default LoginPage;
