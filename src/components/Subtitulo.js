import React from 'react';

const Subtitulo = (props) => {
    // aqui puedo escribir logica

    return (
        //aqui puedo escribir algo mas de logica
        <div>
           {/* esto es un comentario en el html */}
           <h3 className='text-center text-light'>Tareas de la comision {props.comision}</h3> 
        </div>
    );
};

export default Subtitulo;