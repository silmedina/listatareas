import React from 'react';

const ListaItem = (props) => {
    return (
      
           <li className="list-group-item d-flex justify-content-between">{props.nombre} <button className='btn btn-danger' onClick={()=>props.borrarTarea(props.nombre)}>Borrar</button></li>
       
    );
};

export default ListaItem;