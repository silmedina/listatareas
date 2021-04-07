import React, { Fragment, useState, useEffect} from "react";
import ListaTarea from "./ListaTarea";

const FormTarea = () => {
  // aqui escribo la logica
  let tareasLS = JSON.parse(localStorage.getItem('arregloTareas'));
  // aqui creo el state
  const [tareas, setTareas] = useState(tareasLS);
  const [tareaIndividual, setTareaIndividual] = useState("");

  // const guardarTarea = (e) => {
  // console.log(e.target.value);
  //document.getElementByIde('id')
  //actualizar el valor del state
  // setTareaIndividual(e.target.value);
  // }

  //ciclo de vida de un componente
  useEffect(()=>{
    console.log('usando el ciclo de vida')

    if(tareasLS){
      //guardar las tareas del state tareas en localstorage
      console.log('se produjo la actualizacion')
      localStorage.setItem('arregloTareas', JSON.stringify(tareas));
    }else{
      //cargar mi key en localstorage
      console.log('se produjo el montaje')
      localStorage.setItem('arregloTareas','[]');
    }
  },[tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar una tarea en el arreglo de tareas
    //...tareas equivalente a [1.2.3.tareaIndividual]
    setTareas([...tareas, tareaIndividual]);
    setTareaIndividual('');
  };

  const borrarTarea = (nombre) =>{
    let arregloModificado = tareas.filter((nombreTarea)=>nombreTarea !== nombre);
    setTareas(arregloModificado);
  }

  return (
    // logica js
    <Fragment>
      <div className="container d-flex justify-content-center my-5">
        {/*Aqui agregar el html */}
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="mb-3 d-flex">
            <input
              type="text"
              placeholder="Ingrese una tarea"
              className="form-control me-2"
              onChange={(e) => setTareaIndividual(e.target.value)}
              value={tareaIndividual}
            />

            <button className="btn btn-outline-light" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <section className="container w-50 my-4">
        <ListaTarea arregloTareas={tareas} borrarTarea={borrarTarea}></ListaTarea>
      </section>
    </Fragment>
  );
};

export default FormTarea;
