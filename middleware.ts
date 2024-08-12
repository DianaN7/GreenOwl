import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isPublicRoute = createRouteMatcher(['/', '/buttons']);

export default clerkMiddleware(
  (auth, req) => {
    if (isPublicRoute(req)) return; // if it's a public route, do nothing

    if (isAdminRoute(req)) auth().protect({ role: 'org:admin' });

    auth().protect();
  },
  { debug: process.env.NODE_ENV !== 'production' }
);

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
};
