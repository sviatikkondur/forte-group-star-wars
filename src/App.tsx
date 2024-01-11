import './styles/reset.css';
import React from 'react';
import Starfield from './components/StarfieldBackground/Starfield';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Outlet/>
    </>
  );
}

export default App;
