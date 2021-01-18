import React, {Fragment} from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00645F;
    color: #FFF;
    margin-top: 1rem;
    border-radius: 5px;

`;

const Resultados = styled.li`
    font-family: 'Georgia', cursive;
    font-size: 20px;
    margin: 4px;
    
`;

const Resumen = ({datos}) => {

    //EXTRAER DE DATOS PARA NO MOSTRAR EL COMPONENTE DE RESUMEN SI NO SE CARGARON DATOS TODAVIA

    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '')
    {
        return null;
    }

    const marcaUpperCase = marca.toUpperCase();
    const planUpperCase = plan.toUpperCase();
    const añoUpperCase = year.toUpperCase();
    

    return ( 
        <Fragment>
            <ContenedorResumen>
                <h2>Resumen de Cotización</h2>
                <ul>
                    <Resultados>Marca: {marcaUpperCase} </Resultados>
                    <Resultados>Plan: {planUpperCase}</Resultados>
                    <Resultados>Año: {añoUpperCase}</Resultados>
                </ul>

            </ContenedorResumen>

        </Fragment>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;