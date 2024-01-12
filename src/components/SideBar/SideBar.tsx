import { Grid } from '@mui/material'
import React from 'react'
import { Filters } from '../Filters/Filters'

export const SideBar = () => {
  return (
    <Grid 
      item
      lg={3}
      height={'92%'}
      padding={'15px'}
      sx={{
        backgroundColor: '#000000',
        border: '1px solid #1c1c1c',
        borderRadius: 2
      }}
    >
      <Filters />
    </Grid>
  )
}
