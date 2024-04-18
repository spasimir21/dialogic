import { useUser } from '@libs/client/hooks/useUser';
import { useRequest } from '@libs/client/requestr';
import { requests } from '@frontend/api/requests';
import React from 'react';

export default function Home() {
  const userData = useUser();

  // useRequest(requests.category.ensureCategories, {
  //   onResult: console.log,
  //   initialParams: {
  //     names: ['politics', 'alobg', 'boiko', 'kon', 'operacionni', 'softuer', 'amg paketche']
  //   }
  // });

  const categoriesRequest = useRequest(requests.category.searchCategories);

  return (
    <>
      <h3>{userData == null ? "You're not logged in!" : userData.fullname}</h3>
      {categoriesRequest.result == null ? (
        <p>Loading...</p>
      ) : (
        categoriesRequest.result.map(name => <p key={name}>{name}</p>)
      )}

      <button onClick={() => categoriesRequest.send('amg')}>Send</button>
    </>
  );
}
