import ErrorNotification from '@frontend/components/Notifications/ErrorNotification';
import { useDispatchNotification } from '@libs/client/notifications/Notifications';
import { useSSRNavigate } from '@libs/client/hooks/useSSRNavigate';
import { OAuthButtons } from '@frontend/components/OAuthButtons';
import { setAuthenticationToken } from '@frontend/api/auth';
import { useRequest } from '@libs/client/requestr';
import { requests } from '@frontend/api/requests';
import { SSRLink } from '@libs/shared/ssr';
import React, { useRef } from 'react';

export default function RegisterPage() {
  const emailInput = useRef<HTMLInputElement>(null);
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const dispatchNotification = useDispatchNotification();

  const navigate = useSSRNavigate();

  const registerRequest = useRequest(requests.auth.email.register, {
    onResult: async token => {
      await setAuthenticationToken(token);
      navigate('/');
    },
    onError: error => {
      dispatchNotification({
        action: () => {},
        content: <ErrorNotification message={error.message} />
      });
    }
  });

  function handleRegister() {
    registerRequest.send({
      email: emailInput.current!.value,
      fullname: usernameInput.current!.value,
      password: passwordInput.current!.value
    });
  }

  return (
    <div className='w-[100%] h-usable-screen flex justify-center items-center'>
      <div className='w-[450px] h-[525px] flex flex-col items-center rounded-lg bg-[#efefef] [box-shadow:_3px_3px_4px_rgba(0,0,0,0.2)]'>
        <h3 className='mt-[25px] font-serif text-[30px] text-[#7A7979] [text-shadow:_0_1px_3px_rgb(0_0_0_/_20%)]'>
          Join our community!
        </h3>
        <div className='mt-[35px]'>
          <label className='block font-mono text-[14px] text-[#999999]'>Email</label>
          <input
            className='border-solid border-[1px] border-[#747474] rounded-[3px] w-[280px] h-[30px] [box-shadow:_2px_2px_4px_rgba(0,0,0,0.18)] font-mono pl-[8px] text-[16px] text-[#7A7979] outline-none focus:border-[#E87231]'
            type='email'
            ref={emailInput}
          />
        </div>
        <div className='mt-[25px]'>
          <label className='block font-mono text-[14px] text-[#999999]'>Username</label>
          <input
            className='border-solid border-[1px] border-[#747474] rounded-[3px] w-[280px] h-[30px] [box-shadow:_2px_2px_4px_rgba(0,0,0,0.18)] font-mono pl-[8px] text-[16px] text-[#7A7979] outline-none focus:border-[#E87231]'
            type='text'
            ref={usernameInput}
          />
        </div>
        <div className='mt-[25px]'>
          <label className='block font-mono text-[14px] text-[#999999]'>Password</label>
          <input
            className='border-solid border-[1px] border-[#747474] rounded-[3px] w-[280px] h-[30px] [box-shadow:_2px_2px_4px_rgba(0,0,0,0.18)] font-mono pl-[8px] text-[16px] text-[#7A7979] outline-none focus:border-[#E87231]'
            type='password'
            ref={passwordInput}
          />
        </div>
        <button className='button mt-[30px]' onClick={handleRegister}>
          Register
        </button>
        <OAuthButtons />
        <SSRLink to='/auth/login'>
          <p className='mt-[30px] text-[#E87231] font-sans text-[14px] underline cursor-pointer'>
            Already have an account?
          </p>
        </SSRLink>
      </div>
    </div>
  );
}
