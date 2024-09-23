'use client';
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { useThemeContext } from "@/context/theme";
import Image from "next/image";

const LoginPage: React.FC = () => {
    const [theme] = useThemeContext();

    return (
        <div className={`${theme} mx-auto max-w-7xl items-center justify-between lg:px`}>
            <div className="bg-white dark:bg-rgb-2-6-23 text-theme-blue dark:text-white pb-10 sm:h-screen bg-no-repeat bg bg-cover sm:flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <LoginForm />
                    <SignupForm />
                    <div className="mt-4 space-y-4">
                        <button className="flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Login with Google
                        </button>
                        <button className="flex items-center justify-center w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                            Login with Windows
                        </button>
                        <button className="flex items-center justify-center w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Login with AutoDex
                        </button>
                    </div>
                </div>
                <Image
                    src="/neuro_image.svg"
                    alt="image"
                    width={200}
                    height={700}
                    style={{
                        objectFit: "cover",
                    }}
                    className="fixed w-screen left-0 top-0 h-full -z-50"
                />
            </div>
        </div>
    );
};

export default LoginPage;
