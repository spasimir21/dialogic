import { useUser } from '@libs/client/hooks/useUser';
import { useLocation } from 'react-router-dom';
import { ProfileImage } from './ProfileImage';
import { SSRLink } from '@libs/shared/ssr';
import ThemeToggler from './ThemeToggler';
import React from 'react';

export default function Header() {
  const location = useLocation();
  const userData = useUser();

  return (
    <header className='w-full h-[80px] bg-secondary flex justify-between items-center fixed top-0 z-50'>
      <SSRLink to='/'>
        <div className='flex items-center ml-[20px] cursor-pointer'>
          <img src='/public/Logo.png' alt='logo' className='w-[50px] inline-block' />
          <p className='inline-block font-serif text-[35px] ml-[15px] text-white [text-shadow:_0_3px_4px_rgb(0_0_0_/_45%)]'>
            DIALOGIC
          </p>
        </div>
      </SSRLink>

      <div className='flex items-center gap-[35px]'>
        <SSRLink to='/trending'>
          <button className='flex items-center'>
            <img
              src={location.pathname.startsWith('/trending') ? '/public/icon/fire-orange.png' : '/public/icon/fire.svg'}
              alt='trending'
              className={`w-[20px] inline-block`}
            />
            <p className='inline-block ml-[5px] text-[25px] font-sans font-semibold text-white [text-shadow:_0_3px_4px_rgb(0_0_0_/_45%)]'>
              Trending
            </p>
          </button>
        </SSRLink>

        <SSRLink to='/leaderboard'>
          <button className='flex items-center'>
            <img
              src={
                location.pathname.startsWith('/leaderboard')
                  ? '/public/icon/trophy-orange.png'
                  : '/public/icon/trophy.svg'
              }
              alt='leaderboard'
              className={`w-[25px] inline-block`}
            />
            <p className='inline-block ml-[5px] text-[25px] font-sans font-semibold text-white [text-shadow:_0_3px_4px_rgb(0_0_0_/_45%)]'>
              Leaderboard
            </p>
          </button>
        </SSRLink>

        <SSRLink to='/rules'>
          <button className='flex items-center'>
            <img
              src={location.pathname.startsWith('/rules') ? '/public/icon/list-orange.png' : '/public/icon/list.svg'}
              alt='rules'
              className={`w-[25px] inline-block`}
            />
            <p className='inline-block ml-[5px] text-[25px] font-sans font-semibold text-white [text-shadow:_0_3px_4px_rgb(0_0_0_/_45%)]'>
              Rules
            </p>
          </button>
        </SSRLink>
      </div>

      <div className='mr-[20px] w-[200px] flex justify-end gap-5'>
        <ThemeToggler />
        {userData == null ? (
          <SSRLink to='/auth/login'>
            <button className='button'>Join</button>
          </SSRLink>
        ) : (
          <ProfileImage />
        )}
      </div>
    </header>
  );
}
