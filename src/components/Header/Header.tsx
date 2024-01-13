import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import mainLogo from '../../static/img/logo.png';
import { DrawerMenu } from '../Drawer/DrawerMenu';

const MOBILE_MENU_ICON_SIZE = 'large';
const HEADER_HEIGHT_MOBILE = 85;
const HEADER_HEIGHT_DESKTOP = 85;

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const isHomePage = location.pathname === '/';

  const handleClose = () => {
    setIsOpen(false);
  };

  const mobileMenuIconSize = isSmallScreen ? 'medium' : MOBILE_MENU_ICON_SIZE;

  return (
    <Box sx={{ opacity: '80%' }}>
      <DrawerMenu isOpen={isOpen} handleClose={handleClose} />

      <AppBar
        position='static'
        sx={{
          backgroundColor: '#272727',
          paddingInline: isMobileScreen ? theme.spacing(2) : theme.spacing(4),
        }}
        elevation={2}
      >
        <Toolbar
          sx={{
            height: isMobileScreen ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT_DESKTOP,
            display: 'flex',
            justifyContent: isHomePage ? 'space-between' : 'center',
            gap: theme.spacing(2),
          }}
        >
          {isMobileScreen && isHomePage && (
            <Box
              sx={{
                color: 'inherit',
                cursor: 'pointer',
              }}
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon fontSize={mobileMenuIconSize} />
            </Box>
          )}

          {!isMobileScreen && <Box />}

          <Link to='/'>
            <Box
              component={'img'}
              alt='Main Logo'
              src={mainLogo}
              width={isSmallScreen ? '40vw' : 'auto'}
            />
          </Link>

          <Box width={theme.spacing(2)} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
