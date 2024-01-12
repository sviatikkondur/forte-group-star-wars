import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

const FooterContainer = styled('footer')(({ theme }) => ({
  color: 'white',
  height: 80,
  backgroundColor: '#272727',
  opacity: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px -0.5px 0.5px 0px rgba(255, 255, 255, 0.4)',
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer sx={{zIndex: 10}}>
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Star Wars. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
