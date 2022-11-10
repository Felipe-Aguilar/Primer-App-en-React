import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";

const FormularioTareas = ({tareas, cambiarTareas}) => {

    const [inputTarea, cambiarInputTarea] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        cambiarTareas([...tareas, {id: uuidv4(), texto: inputTarea, completada: false}]);

        cambiarInputTarea('');
    }

    const handleInput = (e) =>{
        cambiarInputTarea(e.target.value);
    }

    return ( 
        <form className='formulario-tareas' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='formulario-tareas__input' 
                placeholder='Escribe una Tarea'
                value={inputTarea}
                onChange={(e)=> handleInput(e)}
            />
            <motion.button 
                type='submit'
                className='formulario-tareas__btn'

                // Animación
                whileTap={{scale: 1.3}}
            >
                <FontAwesomeIcon icon={faPlusSquare} className="formulario-tareas__icono-btn"/>
            </motion.button>
        </form>
    );
}

export default FormularioTareas;