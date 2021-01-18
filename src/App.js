import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';




const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;

`



function App() {


  const [ resumen, setResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [ cargando, setCargando ] = useState(false);

  //EXTRAER DATOS DEL RESUMEN

  const {datos} = resumen;

  return (

    <Contenedor>
      <Header 
        titulo='Cotizador de Seguros'
      />

      <ContenedorFormulario>

        <Formulario 
          setResumen={setResumen}
          setCargando={setCargando}
        />

        {cargando ? <Spinner /> : null}



        {/* //COLOCAMOS EL SPINNER CUANDO SE MANDA EL Formulario */}


        <Resumen 
          datos={datos}
        />

        {/* CUANDO NO ESTA CARGANDO MUESTRA EL RESULTADO, SI NO NO MUESTRA NADA  */}
        {!cargando ? 
        <Resultado 
          cotizacion={resumen.cotizacion}
        /> 
        :
        null }

        


      </ContenedorFormulario>

    </Contenedor>
    
    
  );
}

export default App;
