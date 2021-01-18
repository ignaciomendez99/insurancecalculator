import React from 'react'
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';



const Mensaje = styled.p`
    background-color: rgb(125, 172, 179);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    border-radius: 5px
`;

const ContenedorTextoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid transparent;
    background-color: rgb(184, 194, 196);
    margin-top: 1rem;
    position: relative;
    border-radius: 5px;
    font-family: 'Libre Baskerville', serif;
`;

const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    

`;



const Resultado = ({cotizacion}) => {
    return ( 
    (cotizacion === 0) ? <Mensaje>Seleccione la marca, el año, y el tipo de seguro</Mensaje> : (
        <ContenedorTextoCotizacion>
           <TransitionGroup
                component="span"
                className="resultado"
           >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{enter: 500, exit: 500}}
                >
                    <TextoCotizacion>El total es:<span> $ {cotizacion}</span></TextoCotizacion>
                </CSSTransition>
           </TransitionGroup>
        </ContenedorTextoCotizacion>
        )
        

        
     );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;