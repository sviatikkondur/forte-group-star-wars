import './styles/main.css';
import React from 'react';
import Starfield from './components/StarfieldBackground/Starfield';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Header } from './components/Header/Header';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Mont, sans-serif',
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  return (
    <>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <ThemeProvider theme={theme}>
        <Header />
        <div style={{flex: 1, display: 'flex', alignItems: 'stretch'}}>
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
