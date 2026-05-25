import { type RouteObject } from 'react-router';

import HomePage from '../ui/page';

export const homeRouter: RouteObject = {
  path: '/',
  element: <HomePage />,
  hydrateFallbackElement: <div className="w-screen h-screen bg-zinc-50 fixed top-0 left-0 z-40" />
};