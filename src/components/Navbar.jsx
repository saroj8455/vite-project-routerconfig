import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div className='min-h-screen flex flex-column surface-ground'>
        <div className='surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static'>
          <img
            src='https://blocks.primereact.org/demo/images/blocks/logos/bastion-700.svg'
            alt='bastion-700'
            height={40}
            className='mr-0 lg:mr-6'
          />
          <a className='p-ripple cursor-pointer block lg:hidden text-700'>
            <i className='pi pi-bars text-4xl' />
            <span
              role='presentation'
              className='p-ink'
              style={{ height: 0, width: 0 }}
            />
          </a>
          <div className='align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none'>
            <ul className='list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row'>
              <li>
                <a className='p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'>
                  <i className='pi pi-home mr-2' />
                  <span>Home</span>
                  <span
                    role='presentation'
                    className='p-ink'
                    style={{ height: '101.047px', width: '101.047px' }}
                  />
                </a>
              </li>
              <li className='lg:relative'>
                <a className='p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'>
                  <i className='pi pi-users mr-2' />
                  <span>Customers</span>
                  <i className='pi pi-angle-down ml-auto lg:ml-3' />
                  <span
                    role='presentation'
                    className='p-ink'
                    style={{ height: '171.609px', width: '171.609px' }}
                  />
                </a>
                <ul className='list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer'>
                  <li>
                    <a className='p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full'>
                      <i className='pi pi-user-plus mr-2' />
                      <span className='font-medium'>Add New</span>
                      <span
                        role='presentation'
                        className='p-ink'
                        style={{ height: 0, width: 0 }}
                      />
                    </a>
                  </li>
                  <li className='relative'>
                    <a className='p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full'>
                      <i className='pi pi-search mr-2' />
                      <span className='font-medium'>Search</span>
                      <i className='pi pi-angle-down ml-auto lg:-rotate-90' />
                      <span
                        role='presentation'
                        className='p-ink'
                        style={{ height: 0, width: 0 }}
                      />
                    </a>
                    <ul className='list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0'>
                      <li>
                        <a className='p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full'>
                          <i className='pi pi-shopping-cart mr-2' />
                          <span className='font-medium'>Purchases</span>
                          <span
                            role='presentation'
                            className='p-ink'
                            style={{ height: 0, width: 0 }}
                          />
                        </a>
                      </li>
                      <li className='relative'>
                        <a className='p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full'>
                          <i className='pi pi-comments mr-2' />
                          <span className='font-medium'>Messages</span>
                          <span
                            role='presentation'
                            className='p-ink'
                            style={{ height: 0, width: 0 }}
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className='p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'>
                  <i className='pi pi-calendar mr-2' />
                  <span>Calendar</span>
                  <span
                    role='presentation'
                    className='p-ink'
                    style={{ height: '125.086px', width: '125.086px' }}
                  />
                </a>
              </li>
              <li>
                <a className='p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'>
                  <i className='pi pi-chart-line mr-2' />
                  <span>Stats</span>
                  <span
                    role='presentation'
                    className='p-ink'
                    style={{ height: '95.7344px', width: '95.7344px' }}
                  />
                </a>
              </li>
            </ul>
            <ul className='list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none'>
              <li>
                <a className='p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'>
                  <i className='pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0' />
                  <span className='block lg:hidden font-medium'>Inbox</span>
                  <span
                    role='presentation'
                    className='p-ink'
                    style={{ height: 56, width: 56 }}
                  />
                </a>
              </li>
              <li>
                <a className='p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'>
                  <i className='pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge'>
                    <span className='p-badge p-component p-badge-dot p-badge-danger' />
                  </i>
                  <span className='block lg:hidden font-medium'>
                    Notifications
                  </span>
                  <span
                    role='presentation'
                    className='p-ink'
                    style={{ height: 56, width: 56 }}
                  />
                </a>
              </li>
              <li className='border-top-1 surface-border lg:border-top-none'>
                <a className='p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'>
                  <img
                    src='https://blocks.primereact.org/demo/images/blocks/avatars/circle/avatar-f-1.png'
                    alt='avatar-f-1'
                    className='mr-3 lg:mr-0'
                    style={{ width: 32, height: 32 }}
                  />
                  <div className='block lg:hidden'>
                    <div className='text-900 font-medium'>
                      Josephine Lillard
                    </div>
                    <span className='text-600 font-medium text-sm'>
                      Marketing Specialist
                    </span>
                  </div>
                  <span
                    role='presentation'
                    className='p-ink'
                    style={{ height: 64, width: 64 }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Content Goes Here like Outlet */}
        <div className='flex flex-column flex-auto'>
          <div className='border-2 border-dashed surface-border border-round surface-section flex-auto' />
        </div>
      </div>
    </div>
  );
}
