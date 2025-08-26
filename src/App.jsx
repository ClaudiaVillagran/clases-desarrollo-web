import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ComponenteBoton } from './ComponenteBoton'
import BotonBasico from './BotonBasico'

function App() {

  return (
    <div>
      <h1>Zapatería</h1>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', backgroundColor: '#555'}}>
        <div class='contenedor_producto_1' style={{ display: 'flex', border: '2px solid #acb', flex: '1 1 360px', }}>
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77043269_78.jpg?imwidth=2048&imdensity=1&ts=1716291248140" />
          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$20000</h2>
            <p>Este zapato cuenta con un diseño innovador, cómodo y de alta gama</p>
            {/* <button style={{ backgroundColor: "#322" }}>Comprar</button> */}
            <BotonBasico disabled={'false'} />
          </div>
        </div>
        <div class='contenedor_producto_2' style={{ display: 'flex', border: '2px solid #acb', flex: '1 1 360px', }}>
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77043269_78.jpg?imwidth=2048&imdensity=1&ts=1716291248140" />
          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$40000</h2>
            <p>Esta es una zapatilla deportiva, utilizada para trakking</p>

 
          </div>

        </div>
        <div class='contenedor_producto_3' style={{ display: 'flex', border: '2px solid #acb', flex: '1 1 360px', }} >
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77043269_78.jpg?imwidth=2048&imdensity=1&ts=1716291248140" />

          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$15000</h2>
            <p>Este zapato esta en oferta por lanzamiento</p>
            <ComponenteBoton disabled={'true'} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
