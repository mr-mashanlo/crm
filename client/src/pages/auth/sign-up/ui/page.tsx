import { type FC } from 'react';

import { SignUpForm } from '@/features/auth/sign-up-form';

const SignUpPage: FC = () => {
  return (
    <>
      <title>Sign up</title>
      <meta name="description" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />

      <section className="h-screen p-4 sm:p-15 flex justify-center items-center">
        <SignUpForm />
      </section>
    </>
  );
};

export default SignUpPage;