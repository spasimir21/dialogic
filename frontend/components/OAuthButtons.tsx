import { useRedirectPath } from '@libs/client/hooks/useRedirectPath';
import { getGoogleOAuthURL } from '@frontend/api/oauth';
import React from 'react';

const openGoogleOAuth = (redirectPath: string) => (window.location.href = getGoogleOAuthURL(redirectPath));

function OAuthButtons() {
  const redirectPath = useRedirectPath();

  return <button onClick={() => openGoogleOAuth(redirectPath)}>Google</button>;
}

export { OAuthButtons };
