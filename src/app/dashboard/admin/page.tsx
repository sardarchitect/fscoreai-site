'use client';
import { useSession, signIn } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
const AdminApp = dynamic(() => import("@/src/components/AdminApp"), { ssr: false });

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      // If the user is not authenticated, redirect to login page
      signIn();
    } else if (session && session.user.role !== 'admin') {
      // If authenticated but not an admin, redirect to the unauthorized page
      router.replace('/unauthorized');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    // While session is loading, show a loader
    return <div>Loading...</div>;
  }

  // If authenticated and has the admin role, render the AdminApp
  return <AdminApp />;
};

export default AdminPage;












// import { NextPage } from "next";
// import dynamic from "next/dynamic";
// const AdminApp = dynamic(() => import("@/src/components/AdminApp"), { ssr: false });

// const AdminPage: NextPage = () => <AdminApp />;

// export default AdminPage;