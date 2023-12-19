import React, { useState } from 'react';
import { ReactDocsUrl } from '../common/CommonItem';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { MultiSelect } from 'primereact/multiselect';
export default function Signup() {
  const [value, setValue] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCities, setSelectedCities] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  return (
    <div className='flex flex-column '>
      <div className='min-h-screen surface-ground  py-8 '>
        <div className='text-900 font-medium text-900 text-xl mb-3'>
          Profile
        </div>
        <p className='m-0 mb-4 p-0 text-600 line-height-3 mr-3'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          fugit quaerat fuga. Non unde illo sunt dignissimos? Iure quasi
          quaerat, earum porro ut doloremque quia, modi consequatur ex dolorem
          beatae.
        </p>
        <div className='surface-card p-4 shadow-2 border-round'>
          <div className='grid flex gap-6 justify-content-center  formgrid py-3'>
            {/* Define field column */}
            <div class='field col-12 md:col-6  '>
              <span className='p-float-label p-fluid'>
                <InputText id='firstname' placeholder='First Name' />
                <label htmlFor='firstname'>First Name</label>
              </span>
            </div>
            <div class='field col-12 md:col-6 '>
              <span className='p-float-label p-fluid'>
                <InputText id='lastname' placeholder='Last Name' />
                <label htmlFor='lastname'>Last Name</label>
              </span>
            </div>
            <div class='field col-12 md:col-6 '>
              <span className='p-float-label p-fluid'>
                <Password
                  inputId='password'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
              </span>
            </div>

            <div class='field col-12 md:col-6 '>
              <span className='p-float-label p-fluid'>
                <InputTextarea id='address' rows={5} cols={30} />
                <label htmlFor='address'>Customer Address</label>
              </span>
            </div>
            <div class='field col-12 md:col-6 '>
              <span className='p-float-label p-fluid'>
                <Dropdown
                  inputId='dd-city'
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel='name'
                  className='w-full '
                />
                <label htmlFor='dd-city'>Select a City</label>
              </span>
            </div>
            <div class='field col-12 md:col-6 '>
              <span className='p-float-label p-fluid'>
                <MultiSelect
                  value={selectedCities}
                  onChange={(e) => setSelectedCities(e.value)}
                  options={cities}
                  optionLabel='name'
                  maxSelectedLabels={3}
                  className='w-full '
                />
                <label htmlFor='ms-cities'>Select Cities</label>
              </span>
            </div>
            {/* Define field column */}
          </div>
          <div className='card flex justify-content-center'>
            <Button className='bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700'>
              <img
                alt='logo'
                src='https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg'
                className='h-2rem'
              ></img>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
