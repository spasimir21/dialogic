import { useUser } from '@libs/client/hooks/useUser';
import React from 'react';

export default function Home() {
  const userData = useUser();

  return <h3>{userData == null ? "You're not logged in!" : userData.fullname}</h3>;
}
