import React, { useState } from 'react';
import { ReactDocsUrl } from '../common/CommonItem';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
export default function Login() {
  const [checked, setChecked] = useState(false);
  return (
    <div className='min-h-screen w-full flex'>
      <div className='surface-section w-full md:w-6 p-6 md:p-8'>
        <div className='mb-5'>
          <img
            src={ReactDocsUrl + 'demo/images/blocks/logos/hyper.svg'}
            alt='hyper'
            height={50}
            className='mb-3'
          />
          <div className='text-900 text-3xl font-medium mb-3'>Welcome Back</div>
          <span className='text-600 font-medium mr-2'>
            Do not have an account?
          </span>
          <a className='font-medium no-underline text-blue-500 cursor-pointer'>
            Create today!
          </a>
        </div>
        <div>
          <label htmlFor='email2' className='block text-900 font-medium mb-2'>
            Email
          </label>
          <input
            id='email2'
            type='text'
            placeholder='Email address'
            className='p-inputtext p-component w-full mb-3'
          />
          <label
            htmlFor='password2'
            className='block text-900 font-medium mb-2'
          >
            Password
          </label>
          <input
            id='password2'
            type='password'
            placeholder='Password'
            className='p-inputtext p-component w-full mb-3'
          />
          <div className='flex align-items-center justify-content-between mb-6'>
            <div className='card flex justify-content-center'>
              <Checkbox
                inputId='ingredient1'
                onChange={(e) => setChecked(e.checked)}
                checked={checked}
              ></Checkbox>
              <label htmlFor='ingredient1' className='ml-2'>
                Remember me
              </label>
            </div>

            <a className='font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer'>
              Forgot your password?
            </a>
          </div>
          <div className='card flex justify-content-center'>
            <Button className='w-full' label='Sign In' icon='pi pi-user' />
          </div>
        </div>
      </div>
      <div
        className='hidden md:block w-6 bg-no-repeat bg-cover'
        style={{
          backgroundImage:
            'url("https://blocks.primereact.org/demo/images/blocks/signin/signin.jpg")',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
}
