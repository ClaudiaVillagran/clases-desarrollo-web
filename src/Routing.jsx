import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Seccion } from './Seccion'
import { AgregarProducto } from './AgregarProducto'
import { NotFound } from './NotFound'
import { EditarProducto } from './EditarProducto'
import { DataZapatos } from './data/DataZapatos'

export const Routing = () => {

  const [items, setItems] = React.useState(DataZapatos);

  console.log(items);

  const actualizarDatos = (id, formularioData) =>{
    setItems(actual => actual.map(item => String(item.id) === String(id) ? {...item, ...formularioData} : item ));
  }

  const agregarProducto = (formularioNewProduct) => {
    setItems(actual => [...actual, formularioNewProduct])
  }


  const eliminarProducto = (id) =>{
        setItems(actual => actual.filter((item) => item.id !== id))
        console.log(items);
  }
  return (
    <Routes>
      <Route path='/' element={<Seccion items={items} eliminarProducto={eliminarProducto}  />} />
      <Route path='/agregarProducto' element={<AgregarProducto agregarProducto={agregarProducto}/>} />
      <Route path='/editarProducto/:id' element={<EditarProducto items={items}  actualizarDatos={actualizarDatos}/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
