import React from 'react'

function button(props) {
  const esOperador = valor => {
    return isNaN(valor);
  };


  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default button;