import { Box, Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { ulid } from 'ulid'
import { ConstantesGlobales } from './helpers/ConstantesGlobales'

export const AgregarProducto = () => {


  const [form, setForm] = React.useState(() => ({
    id: '',
    nombre: '',
    precio: '',
    imagen: '',
    descripcion: '',
  }))

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    const request = await fetch(ConstantesGlobales.url + 'producto/agregarProducto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await request.json();
    if (data.status === 'success') {
      alert('Producto registrado correctamente');
      setForm({
        id: '',
        nombre: '',
        precio: '',
        imagen: '',
        descripcion: '',
      });
    } else {
      alert('Hubo un problema al registrar el producto');
    }
  }

  const handleCancel = () => {
    setForm({
      id: '',
      nombre: '',
      precio: '',
      imagen: '',
      descripcion: '',
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Registrar Producto</h1>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack direction={'column'} spacing={2}>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" value={form.nombre} onChange={handleChange('nombre')} />

          <TextField id="outlined-basic" label="Precio" variant="outlined" type='number' value={form.precio}
            onChange={handleChange('precio')} />

          <TextField id="outlined-basic" label="Descripción" variant="outlined" multiline rows={5} value={form.descripcion}
            onChange={handleChange('descripcion')} />

          <TextField id="outlined-basic" label="url" variant="outlined" value={form.imagen}
            onChange={handleChange('imagen')} />
        </Stack>
        <Stack direction={'row'}>
          <Button onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant='outlined' type="submit">
            Guardar
          </Button>
        </Stack>
      </Box>

    </div>
  )
}
