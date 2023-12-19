import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { ReactDocsUrl } from '../common/CommonItem';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { Chips } from 'primereact/chips';
export default function GroupLayout() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [date, setDate] = useState(null);
  const [checked, setChecked] = useState(false);
  const [chipvalue, setChipValue] = useState([]);

  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
  };

  return (
    <div className='p-4 md:p-6 lg:p-8'>
      <div className='surface-border border-round surface-card'>
        <div className='grid'>
          <div className='col-12 md:col-6  '>
            <div className='text-center flex flex-column gap-6 p-3 border-round-sm '>
              <div className='card'>
                <span className='p-float-label p-fluid'>
                  <AutoComplete
                    inputId='ac'
                    value={value}
                    suggestions={items}
                    completeMethod={search}
                    onChange={(e) => setValue(e.value)}
                  />
                  <label htmlFor='ac'>Auto Complete</label>
                </span>
              </div>
              <div className='card '>
                <span className='p-float-label p-fluid'>
                  <Calendar
                    inputId='birth_date'
                    value={date}
                    onChange={(e) => setDate(e.value)}
                  />
                  <label htmlFor='birth_date'>Birth Date</label>
                </span>
              </div>
              <div className='card flex align-items-center  justify-content-center  gap-2'>
                <span className='p-float-label'>
                  <Checkbox
                    inputId='accept'
                    onChange={(e) => setChecked(e.checked)}
                    checked={checked}
                  ></Checkbox>
                </span>
                <label htmlFor='accept' className='mt-1'>
                  I accept the terms condition.
                </label>
              </div>
              <div className='card p-fluid'>
                <span className='p-float-label'>
                  <Chips
                    id='chips'
                    value={chipvalue}
                    onChange={(e) => setChipValue(e.value)}
                  />
                  <label htmlFor='chips'>Chips Value</label>
                </span>
              </div>
            </div>
          </div>
          {/* II Col */}
          <div className='col-12 md:col-6 '>
            <div className='text-center p-3 border-round-sm '>
              <div className='card flex flex-column gap-2'>
                <p className='text-900 w-full md:w-10 line-height-3'>
                  Auto Complete : {value}
                </p>
                <p className='text-900 w-full md:w-10 line-height-3'>
                  Birth Date : {JSON.stringify(date)}
                </p>
                <p className='text-900 w-full md:w-10 line-height-3'>
                  Chips : {JSON.stringify(chipvalue)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
