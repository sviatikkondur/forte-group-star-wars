import { Container, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { SearchInput } from '../../components/SearchInput/SearchInput'
  
export const HomePage = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container 
      maxWidth={'lg'}
      sx={{
        paddingTop: isSmallScreen ? '30px' : '40px'
      }}
    >
      <SearchInput />
    </Container>
  )
}
