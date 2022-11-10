import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";
import { isVisible } from '@testing-library/user-event/dist/utils';

const Header = ({mostarCompletadas, cambiarMostrarCompletadas}) => {// Animación

    const toggleCompletadas = () =>{
        cambiarMostrarCompletadas(!mostarCompletadas);
    }
    return ( 
        <header className="header">
            <motion.h1 
                className="header__titulo"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .6 }}
            >
                Lista de Tareas
            </motion.h1>
            <AnimatePresence>
                {mostarCompletadas ?

                        <motion.button 
                            className="header__boton"
                            onClick={()=> toggleCompletadas()}

                            // Animaciones
                            whileHover={{ scale: 1.05 }}
                        >
                            No mostrar Completadas
                            <FontAwesomeIcon icon = {faEyeSlash} className="header__icono-boton"/>
                        </motion.button>
                    
                :
                    <motion.button 
                        className="header__boton"
                        onClick={()=> toggleCompletadas()}

                        // Animaciones
                        whileHover={{ scale: 1.05 }}
                    >
                        Mostrar Completadas
                        <FontAwesomeIcon icon = {faEye} className="header__icono-boton"/>
                    </motion.button>
                }
            </AnimatePresence>
        </header>
    );
}

export default Header;