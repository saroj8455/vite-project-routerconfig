import React from 'react';
import { Button } from 'primereact/button';
import '../App.css';
export default function Home() {
  return (
    <>
      <h1>Vite React Project React Configuration</h1>
      <div className='card flex justify-content-center'>
        <Button label='Check' icon='pi pi-check' />
      </div>
    </>
  );
}
