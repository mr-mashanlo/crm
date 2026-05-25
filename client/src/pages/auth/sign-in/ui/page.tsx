import { type FC } from 'react';

import { SignInForm } from '@/features/auth/sign-in-form';

const SignInPage: FC = () => {
  return (
    <>
      <title>Sign in</title>
      <meta name="description" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />

      <section className="h-screen p-4 sm:p-15 flex justify-center items-center">
        <SignInForm />
      </section>
    </>
  );
};

export default SignInPage;