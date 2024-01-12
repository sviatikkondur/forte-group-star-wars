import React from 'react'
import { NumberInputBasic } from './NumberInput'
import { Typography } from '@mui/material'

export const InputFrom = () => {
  return (
    <>
      <Typography marginTop={1}>
        Min
      </Typography>
      <NumberInputBasic placeholder='Enter min mass' type='min'/>
    </>
  )
}
