import { type FC } from 'react';

export const HomePage: FC = () => {
  return (
    <>
      <title>Home page</title>
      <meta name="description" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />

      <main className="min-h-screen my-8 sm:my-20">
        <section className="mx-4 my-8 sm:mx-10 sm:my-20">
          <h1 className="mb-3 text-xl sm:text-2xl font-semibold">Workspace sale</h1>
          <p className="max-w-2xl leading-[200%]">At tempore commodi quibusdam sed ea veritatis temporibus accusantium qui corporis obcaecati aperiam, eveniet, quisquam recusandae magni ducimus error possimus.</p>
        </section>
      </main>
    </>
  );
};

export default HomePage;