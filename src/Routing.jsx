import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Seccion } from './Seccion'
import { AgregarProducto } from './AgregarProducto'
import { NotFound } from './NotFound'
import { EditarProducto } from './EditarProducto'
import { DataZapatos } from './data/DataZapatos'

export const Routing = () => {
  
  const [items, setItems] = React.useState(DataZapatos);

  


  return (
    <Routes>
      <Route path='/' element={<Seccion items={items} />} />
      <Route path='/agregarProducto' element={<AgregarProducto />} />
      <Route path='/editarProducto/:id' element={<EditarProducto items={items}/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
