import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//Seleccionamos a que elemento HTML le vamos a dar estilos
const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
 `;

//CREAMOS LOS STYLED COMPONENTS PARA EL HEADER Y PARA EL TITULO DEL HEADER
 const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
 
 `;


const Header = ( {titulo} ) => {
    return ( 
 //REEMPLAZAMOS EL ELEMENTO HTML POR EL HEADER PERSONALIZADO
        <ContenedorHeader>     
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}

Header.propTypes = {
   titulo: PropTypes.string.isRequired
}
 
export default Header;
