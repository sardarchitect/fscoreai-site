// app/components/withAuth.tsx
'use client';
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

type WithAuthProps = {
  allowedRoles: string[];
  WrappedComponent: React.FC ;
};

const withAuth = (WrappedComponent: React.FC , allowedRoles: string[]) => {
  const Auth = (props: any) => {
    const { data: session, status } = useSession(); 

    useEffect(() => {
      if (status === 'unauthenticated') {
        signIn();
      } else if (session && !allowedRoles.includes(session.user.role)) {
        window.location.replace('/login');
      }
    }, [session, status]);

    if (status === 'loading' || !session) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;
