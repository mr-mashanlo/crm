import { type FC } from 'react';
import { Link } from 'react-router';

const NotFoundPage: FC = () => {
  return (
    <>
      <title>Page not found</title>
      <meta name="description" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />

      <div className="min-h-screen p-4 sm:p-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold">Page 404</h1>
          <p className="mt-5">The resource requested could not be found on this server. <Link to="/" className="font-bold decoration-[.1rem] hover:underline">Go to home page</Link></p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;