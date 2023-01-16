import React from 'react';
import { Heading } from '../../components/global/Typography/index';
import { Link } from 'react-router-dom';
import { Button } from '../../components/global/Button';

const Login = () => {
  return (
    <div className='grid max-w-xl mx-auto h-full gap-4 px-10 py-20'>
      <div className='grid gap-4 w-full p-12 border rounded'>
        <Heading className='text-center text-gray-800'>Log In</Heading>
        <div className='w-full grid gap-2'>
          <label htmlFor='email'>Email:</label>
          <input
            className='border text-base py-2 px-4 rounded border-gray-300 bg-gray-100'
            type='text'
            name='email'
            placeholder='Your email'
            id=''
          />
        </div>

        <div className='w-full grid gap-2'>
          <label htmlFor='password'>Password:</label>
          <input
            className='border text-base py-2 px-4 rounded border-gray-300 bg-gray-100'
            type='text'
            name='password'
            placeholder='Your password'
            id=''
          />
        </div>
        <div className='w-full flex gap-4 items-center '>
          <input
            className='w-4 h-4'
            type='checkbox'
            name='agree'
            id=''
          />
          <label htmlFor='agree'>
            I agree with all the terms and conditions.
          </label>
        </div>
        <Button className='bg-blue-800 text-white rounded font-semibold'>
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Login;
