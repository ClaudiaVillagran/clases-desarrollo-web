import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Seccion } from './Seccion'
import { AgregarProducto } from './AgregarProducto'
import { NotFound } from './NotFound'
import { EditarProducto } from './EditarProducto'
import { DataZapatos } from './data/DataZapatos'
import { ConstantesGlobales } from './helpers/ConstantesGlobales'

export const Routing = () => {


  // const [items, setItems] = React.useState(DataZapatos);

  const [items, setItems] = React.useState([])
  console.log(ConstantesGlobales.url);

  const ObtenerDataZapatos = async () => {
    console.log('prueba');
    const request = await fetch(ConstantesGlobales.url + 'producto/traerProductos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log('prueba2');
    const data = await request.json();
    console.log(data);
    if (data.status == 'success') {
      setItems(data.productos)
    }


  }

  useEffect(() => {
    ObtenerDataZapatos()
  }, [])



  const actualizarDatos = async (id, formularioData) => {
    console.log(formularioData);
    const request = await fetch(ConstantesGlobales.url + 'producto/editarProducto/' + id, {
      method: 'PUT',
      body: JSON.stringify(formularioData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await request.json()
    console.log(data);

    if (data.status == 'success') {

      setItems(actual => actual.map(item => String(item._id) === String(id) ? { ...item, ...data.productoEditado } : item));
    }
  }

  // const agregarProducto = async (formularioNewProduct) => {
  //   const request = await fetch(ConstantesGlobales.url + 'producto/editarProducto/', {
  //     method: 'POST',
  //     body: JSON.stringify(formularioNewProduct),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   const data = await request.json()
  //   if (data.status === 'success') {
  //   setItems(actual => [...actual, data.productoGuardado])
  //   }
  // }


  const eliminarProducto = async (id) => {

    console.log(id);
    const request = await fetch(ConstantesGlobales.url + 'producto/eliminarProducto/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await request.json()
    console.log(data);
    if (data.status === 'success') {

      setItems(actual => actual.filter((item) => item.id !== data.productoEliminar._id))
      setTimeout(() => {
        window.parent.location.reload()
      }, 1000);
    }

    // console.log(items);


  }
  return (
    <Routes>
      <Route path='/' element={<Seccion items={items} eliminarProducto={eliminarProducto} />} />
      <Route path='/agregarProducto' element={<AgregarProducto />} />
      <Route path='/editarProducto/:id' element={<EditarProducto items={items} actualizarDatos={actualizarDatos} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
