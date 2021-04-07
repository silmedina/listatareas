import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import FormTarea from './components/FormTarea';

function App() {
  return (
    <Fragment>
      <Titulo></Titulo>
      <Subtitulo comision='7A' estado={true}/>
      <FormTarea ></FormTarea>
    </Fragment>
  );
}

export default App;
