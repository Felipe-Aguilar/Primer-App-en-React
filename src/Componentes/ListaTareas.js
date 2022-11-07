import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, cambiarTareas, mostarCompletadas}) => {

    const toggleCompletada = (id) =>{

        console.log('Estamos editando la tarea con id', id);
        
        cambiarTareas(tareas.map( (tarea)=>{
            console.log('Ejecutamos código por cada tarea');
            if (tarea.id == id) {
                return {...tarea, completada: !tarea.completada}
            }
            return tarea;
        } ));
    }
    
    const editarTarea = (id, nuevoTexto) =>{

        cambiarTareas(tareas.map( (tarea)=>{
            console.log('Ejecutamos código por cada tarea');
            if (tarea.id == id) {
                return {...tarea, texto: nuevoTexto}
            }
            return tarea;
        } ));
    }

    const borrarTarea = (id) => {
        // Método filter: Si una tarea es verdadera esa tarea no nos la va a devolver en nuestro arreglo final
        cambiarTareas(tareas.filter( (tarea)=>{
            console.log('Ejecutamos código por cada tarea');
            if (tarea.id != id) {
                return tarea;
            }
            return;
        } ));
    }

    return ( 
        <ul className='lista-tareas'>
            {
            tareas.length > 0 ? tareas.map((tarea)=>{
                if(mostarCompletadas){
                    return <Tarea 
                                key={tarea.id}
                                tarea = {tarea}
                                toggleCompletada = {toggleCompletada}
                                editarTarea = {editarTarea}
                                borrarTarea = {borrarTarea}
                            />
                // Si la tarea no está completada, la devolvemos.
                }else if(!tarea.completada){
                    return <Tarea 
                                key={tarea.id}
                                tarea = {tarea}
                                toggleCompletada = {toggleCompletada}
                                editarTarea = {editarTarea}
                                borrarTarea = {borrarTarea}
                            />
                }
                return;
            })
            : <div className='lista-tareas__mensaje'>No hay tareas agregadas</div>
            }
        </ul>
    );
}

export default ListaTareas;