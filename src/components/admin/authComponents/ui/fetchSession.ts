import { getSession } from 'next-auth/react';

export const isUserLogined = async () => {
  const session = await getSession();
  if (session && session.user && session.user.email) {
    return true;
  }
  return false;
};
