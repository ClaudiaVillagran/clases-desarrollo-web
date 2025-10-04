import React, { useState } from 'react'
import ComponenteModal from './ComponenteModal'
import { Button, IconButton } from '@mui/material'
import BotonBasico from './BotonBasico'
import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import { DataZapatos } from './data/DataZapatos';
export const Seccion = ({ items }) => {


    const [open, setOpen] = React.useState(false);
    const [finalId, setFinalId] = React.useState('')
    const idEliminar = 'este es el boton eliminar'

    const idEditar = 'este es el boton editar'
    const handleOpen = (id) => {
        console.log(id);
        setFinalId(id)
        setOpen(true)
    };
    return (
        <div>
            <ComponenteModal open={open} setOpen={setOpen} finalId={finalId} />

            <h1>Zapatería</h1>
            {/* <CarritoCompras /> */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', }}>
                {items.map((item) => (
                    <div key={item.id} className='contenedor_producto_1' style={{ display: 'flex', border: '2px solid #acb', flex: '1 1 360px', }}>
                        <div style={{ width: "40%", height: "auto" }}>
                            <img style={{ width: "100%", height: "100%" }} src={item.imagen} />
                        </div>
                        <div style={{ width: "60%", height: "auto", backgroundColor: '#555', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <IconButton aria-label="delete" onClick={() => handleOpen(item.id)}>
                                <DeleteIcon style={{ color: '#f00' }} />
                            </IconButton>
                            <IconButton aria-label="delete" component={NavLink} to={`/editarProducto/${item.id}`}>
                                <EditIcon style={{ color: '#f00' }} />
                            </IconButton>


                            <h2>{item.precio}</h2>
                            <p>{item.descripcion}</p>
                            <BotonBasico isDisabled={false} />

                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}
