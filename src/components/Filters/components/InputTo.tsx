import React from 'react'
import { NumberInputBasic } from './NumberInput'
import { Typography } from '@mui/material'

export const InputTo = () => {
  return (
    <>
      <Typography marginTop={0.7}>
        Max
      </Typography>
      <NumberInputBasic placeholder='Enter max mass' type='max'/>
    </>
  )
}
