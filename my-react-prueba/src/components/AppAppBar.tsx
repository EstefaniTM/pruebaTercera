import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {Typography } from '@mui/material';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  alignSelf: 'flex-start'
}));

export default function SquareCorners() {
  return (
    <Stack direction="row" spacing={2}>
    <Typography>  Esteo es un texto  </Typography>
      <DemoPaper square={false}>rounded corners</DemoPaper>
    </Stack>
  );
}