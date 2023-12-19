import React from 'react';
import { ReactDocsUrl } from '../common/CommonItem';

export default function ErrorPage() {
  return (
    <div className='surface-section px-4 py-8 md:px-6 lg:px-8'>
      <div className='flex flex-column lg:flex-row justify-content-center align-items-center gap-7'>
        <div className='text-center lg:text-right'>
          <div className='mt-6 mb-3 font-bold text-6xl text-900'>
            Are you lost?
          </div>
          <p className='text-700 text-3xl mt-0 mb-6'>
            Sorry, we could not find the page.
          </p>
          <button
            aria-label='Go back to home page'
            type='button'
            className='p-button p-component p-button-outlined'
          >
            <span className='p-button-label p-c'>Go back to home page</span>
            <span
              role='presentation'
              className='p-ink'
              style={{ height: '213.969px', width: '213.969px' }}
            />
          </button>
        </div>
        <div>
          <img
            src={ReactDocsUrl + '/demo/images/blocks/feedback/404-rocket.png'}
            alt='Image'
            className='w-full md:w-28rem'
          />
        </div>
      </div>
    </div>
  );
}
