import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BotonBasico({ isDisabled }) {

  return (
    <Stack direction="row" spacing={2} alignItems='center'>
      {isDisabled ?
        <Button variant="contained" disabled>
          Agotado
        </Button>
      :
      <Button variant="contained">Comprar</Button>
    }
    </Stack>
  );
}