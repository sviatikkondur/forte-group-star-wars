import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../static/icons/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MenuIcon from '@mui/icons-material/Menu';
import mainLogo from '../../static/img/logo.png'

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const isHomePage = location.pathname === '/';

  return (
    <Box>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >

        Hello
      </Drawer>

      <AppBar
        position="static" 
        sx={{
          backgroundColor: '#272727',
          paddingInline: isMobileScreen ? 2 : 4,
        }}
        elevation={2}
        >
        <Toolbar sx={{
          height: isMobileScreen ? 85 : 130,
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          {isMobileScreen && isHomePage && (
            <Box
              sx={{
                color: 'inherit',
                cursor: 'pointer'
              }}
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon 
                fontSize={isSmallScreen ? 'medium' : 'large'}
              />
            </Box>
          )}

          {!isMobileScreen && (
            <Link to='/'>
              <Box 
                component="img"
                sx={{
                  height: isMobileScreen ? 70 : 100,
                }}
                alt='Logo'
                src={logo}
              />
            </Link>
          )}

          <Box 
            component={'img'}
            alt='Main Logo'
            src={mainLogo}
            width={isSmallScreen ? '40vw' : 'auto'}
          />

          
          <Link to='/favorites' style={{
            color: 'inherit'
          }}>
            <FavoriteBorderRoundedIcon 
              fontSize={'medium'} 
            />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
