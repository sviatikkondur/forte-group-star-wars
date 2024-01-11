import './styles/reset.css';
import React from 'react';
import Starfield from './components/StarfieldBackground/Starfield';
function App() {
  return (
    <>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
    />
    <h1 style={{color: "white"}}>Hello</h1>
    </>
  );
}

export default App;
