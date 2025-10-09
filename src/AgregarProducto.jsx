import { Box, Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { ulid } from 'ulid'

export const AgregarProducto = () => {


    const [form, setForm] = React.useState(() =>({
      id: ulid(),
      nombre: '',
      precio:  '',
      imagen: '',
      descripcion: '',
    }))
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Registrar Producto</h1>
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
  )
}
