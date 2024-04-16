import { useSSRNavigate } from '@libs/client/hooks/useSSRNavigate';
import { setAuthenticationToken } from '@frontend/api/auth';
import { useUser } from '@libs/client/hooks/useUser';
import { useRequest } from '@libs/client/requestr';
import { requests } from '@frontend/api/requests';
import React from 'react';

function ProfileImage() {
  const userData = useUser();

  const navigate = useSSRNavigate();

  const logoutRequest = useRequest(requests.auth.logout, {
    onResult: async () => {
      await setAuthenticationToken(null);
      navigate('/');
    }
  });

  if (userData == null) return <></>;

  return (
    <img
      src={userData.profilePictureURL}
      className='w-[50px] rounded-full cursor-pointer'
      onClick={() => logoutRequest.send()}
    />
  );
}

export { ProfileImage };
