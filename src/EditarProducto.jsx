// EditarProducto.jsx
import React from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { Box, TextField, Stack, Button } from '@mui/material';

export const EditarProducto = ({ items }) => {
  const { id } = useParams();

  console.log(items);

  // Render básico del form
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Editar producto {id}</h1>

      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={'column'} spacing={2}>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />

          <TextField id="outlined-basic" label="Precio" variant="outlined" type='number' />

          <TextField id="outlined-basic" label="Descripción" variant="outlined" multiline rows={5} />

          <TextField id="outlined-basic" label="url" variant="outlined" />
        </Stack>
        <Stack direction={'row'}>
          <Button >
            Cancelar
          </Button>
           <Button variant='outlined'>
            Guardar
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
