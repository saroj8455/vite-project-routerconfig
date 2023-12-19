import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from 'primereact/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite React Project React Configuration</h1>
      <div className='card flex justify-content-center'>
        <Button label='Check' icon='pi pi-check' />
      </div>
    </>
  );
}

export default App;
