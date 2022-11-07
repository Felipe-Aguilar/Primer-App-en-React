import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Componentes/header';
import FormularioTareas from './Componentes/FormularoTareas';
import ListaTareas from './Componentes/ListaTareas';

const App = () => {

  const tareasGuardadas = 
  localStorage.getItem('tareas') ? 
  // Hacemos la conversión de la cadena de texto a un arreglo nuevamente. 
  JSON.parse(localStorage.getItem('tareas')) : [];
  
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas));
    // convertimos el arreglo a una cadena de texto json.
    // JSON.stringify(tareas);
  },[tareas]);

  // Accedemos a localStorage y comprobamos si mostrar completadas es null
  // Checarlo
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  }else{
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  // Guardando el estado de mostrarCompletadas dentro de LocalStorage
  const [mostarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(()=>{
    localStorage.setItem('mostarCompletadas', mostarCompletadas.toString());
  },[mostarCompletadas]);
  
  return (
    <div className="contenedor">
      <Header 
        mostarCompletadas = {mostarCompletadas}
        cambiarMostrarCompletadas = {cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas = {tareas} cambiarTareas = {cambiarTareas}/>
      <ListaTareas 
        tareas = {tareas} 
        cambiarTareas={cambiarTareas}
        mostarCompletadas = {mostarCompletadas}
      />
    </div>
  );
}

export default App;
