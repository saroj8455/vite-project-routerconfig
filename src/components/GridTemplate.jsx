import React from 'react';

export default function GridTemplate() {
  return (
    <div className='p-4 md:p-6 lg:p-8'>
      <div className=' surface-border border-round surface-card'>
        <div className='grid'>
          <div className='col-12 md:col-6 lg:col-3'>
            <div className='text-center p-3 border-round-sm bg-primary font-bold'>
              col-12 md:col-6 lg:col-3
            </div>
          </div>
          <div className='col-12 md:col-6 lg:col-3'>
            <div className='text-center p-3 border-round-sm bg-primary font-bold'>
              col-12 md:col-6 lg:col-3
            </div>
          </div>
          <div className='col-12 md:col-6 lg:col-3'>
            <div className='text-center p-3 border-round-sm bg-primary font-bold'>
              col-12 md:col-6 lg:col-3
            </div>
          </div>
          <div className='col-12 md:col-6 lg:col-3'>
            <div className='text-center p-3 border-round-sm bg-primary font-bold'>
              col-12 md:col-6 lg:col-3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
