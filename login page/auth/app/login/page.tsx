// import LoginForm from '@/components/LoginForm'; 
import LoginForm from '@/components/LoginForm';
import Image from 'next/image';

function LoginPage() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                
                    <LoginForm/>
                
            </div>
            <div className="hidden bg-muted lg:block">
                <Image
                    src="/images/img.jpg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}

export default LoginPage;