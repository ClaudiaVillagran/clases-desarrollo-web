import React from 'react'

export const ComponenteBoton = ({ nombreBoton }) => {
    console.log('Este es el texto del boton', nombreBoton);
    return (
        <div>
            <button style={{ backgroundColor: "#322" }}>{nombreBoton}</button>
        </div>
    )
}
