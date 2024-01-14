import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    const redirectToHomePage = () => {
        navigate('/')
    }

    return (
        <Box
        position={'relative'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        >
            <Typography fontSize={'4em'}>Oops 404!</Typography>
            <Box 
              onClick={() => redirectToHomePage()}
              display={'flex'}
              alignItems={'center'}
              gap={1}
              border={'1px solid #fff'}
              borderRadius={5}
              padding={2}
              sx={{
                backgroundColor: '#000',
                cursor: 'pointer',
              }}
            >
              <RocketLaunchIcon />
                <Typography
                  variant='h5'
                >
                  Fly Home
                </Typography>
            </Box>
        </Box>
    )
}

