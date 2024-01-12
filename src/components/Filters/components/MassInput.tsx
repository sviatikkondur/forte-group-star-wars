import { Box, Typography } from '@mui/material'
import React from 'react'
import { InputFrom } from './InputFrom'
import { InputTo } from './InputTo'

export const MassInput = () => {
  return (
    <Box
      marginTop={0.3}
    >
      <Typography
        sx={{
          fontSize: 23,
        }}
      >
        Mass:
      </Typography>

      <InputFrom />
      <InputTo />
    </Box>
  )
}
