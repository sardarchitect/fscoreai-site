'use client';
import LoginForm from "@/src/components/LoginForm";
import Link from "next/link";


const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
                <h2 className="text-h2 font-bold text-gray-800 text-center mb-6">Log In</h2>

                <div className="grid lg:grid-col-4 sm:grid-col-2 gap-2 mb-4">
                    <button className="flex items-center justify-center w-full px-4 py-2 bg-slate-400 text-white rounded hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="30" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Continue with Google
                    </button>
                    <button className="flex items-center justify-center w-full px-4 py-2 bg-slate-400 text-white rounded hover:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="30" viewBox="12 -12 48 48">
                            <path fill="#03a9f4" d="M34.807,12.511l-3.488,12.077c-3.03-2.052-6.327-3.744-13.318-0.83l3.408-11.945l0.041-0.019C28.414,8.908,31.787,10.447,34.807,12.511z"></path>
                            <path fill="#ffc107" d="M36.633,13.68l-3.447,11.943c3.028,2.069,6.383,3.718,13.365,0.805l3.324-11.643C42.76,17.24,39.66,15.731,36.633,13.68z"></path>
                            <path fill="#ff5722" d="M35.387,10.337l3.441-11.964C35.8-3.688,32.442-5.344,25.454-2.424L22.011,9.59c2.775-1.153,4.969-1.682,6.806-1.666C31.604,7.942,33.563,9.102,35.387,10.337z"></path>
                            <path fill="#7cb342" d="M40.643-0.369l-3.44,12.033c3.018,2.063,6.669,3.752,13.359,0.738L54,0.415C47.021,3.317,43.665,1.688,40.643-0.369z"></path>
                        </svg>
                        Continue with Windows
                    </button>
                    <button className="flex items-center justify-center w-full px-4 py-2 bg-slate-400 text-white rounded hover:bg-green-600">
                        <svg fill="#000000" width="50" height="30" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                            <path d="m14.574 1.0203c-0.097-0.096997-0.29099-0.58198-0.97097-0.58198h-6.7038s0.97097 0.096997 1.36 1.068c0 0 1.069 2.5269 2.0399 4.9558 2.8179 6.6068 7.1898 17.099 7.1898 17.099h6.5108c0.097-0.097-9.3267-22.443-9.4247-22.54zm-8.8407 0.87497-5.3438 12.631c-0.29199 0.87497-0.097997 1.9439 1.457 1.9439h4.1779l3.6919-8.8417c-1.166-2.9149-2.1359-5.2478-2.1359-5.2478-0.096997-0.29199-0.38899-1.069-0.97197-1.069-0.58298 0-0.77698 0.48598-0.87397 0.58298zm-0.097997 15.643h-4.4689c-0.77698 0-1.166-0.48598-1.166-0.48598 0.77698 1.36 3.0119 5.6358 3.0119 5.6358 0.38899 0.48598 0.77698 0.77698 1.36 0.77698 1.263 0 3.2069-1.263 3.2069-1.263l7.4808-4.6639z"></path>
                        </svg>
                        Continue with AutoDesk
                    </button>
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
