import React from 'react';
import ListaItem from './ListaItem';

const ListaTarea = (props) => {
    return (
       <ul className="list-group">
           {
               props.arregloTareas.map((dato,indice)=><ListaItem nombre={dato} key={indice} borrarTarea={props.borrarTarea}></ListaItem>)
           }
       </ul>
    );
};

export default ListaTarea;