import React, { useState } from 'react'
import styled from '@emotion/styled';
import ErrorSign from './ErrorSign';
import {obtenerDiferenciaYear, calcularMarca, calcularTipoSeguro} from '../helper';
import PropTypes from 'prop-types';

const OpcionesComponents = styled.div`
        display: flex;
        margin-bottom: 1rem;
        align-items: center;

`;

const Label = styled.label`
    flex: 0 0 100px;

`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance:none;


`;

const Inputs = styled.input`
    margin: 0 1rem;

`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width:100%;
    padding:1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s, font-size .3s;
    border-radius: 5px;
    margin-top: 2rem;
    outline: none;

    &:hover {
        cursor: pointer;
        background-color: #00738f;
        font-size: 18px;
    }
`;

const Error = styled.div`
    background-color: red;
    color:white;
    padding: 1rem;
    width: 100%;
    text-align: center; 
    margin-bottom: 2rem;
    border-radius: 5px;
    left: 3px;
    right: 3px
`;



const Formulario = ({ setResumen, setCargando }) => {


    //CREAMOS LOS ESTADOS PARA CADA UNO DE LOS DATOS COMO UN OBJETO CON DISTINTOS ATRIBUTOS
    const [ datos, setDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [ error, setError ] = useState(false);

    //EXTRAER LOS VALORES DEL STATE

    const { marca, year, plan } = datos;

    //LEER LOS DATOS DEL FORMULARIO Y COLOCARLOS EN EL STATE

    const obtenerInformacion = e => {

        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Funcion que se ejecuta cuando el usuario ejecuta el submit del formulario. CASI SIEMPRE SE UTILIZA PREVENT DEFAULT EN LOS FORMULARIOS CON REACT

    const cotizarSeguro = (e) => {

        e.preventDefault();

        //VALIDAR EL ERROR

        if(marca.trim() === '' || year === '' || plan === '')
        {
            setError(true);
            return;
        }

        setError(false);

        //UNA BASE DE 2000
        let resultado = 2000;
    
        //OBTENER LA DIFERENCIA DE AÑOS

        const diferencia = obtenerDiferenciaYear(year);

        //POR CADA AÑO HAY QUE RESTAR UN 3%

        resultado -= ((diferencia * 3 ) * resultado) / 100;

        //AMERICANO 15%
        //ASIATICO 5%
        //EUROPEO 30%

        resultado = calcularMarca(marca) *  resultado;

        console.log(resultado);

        

        //BASICO AUMENTA EL 20%
        //COMPLETO 50%
        const incrementoPlan = calcularTipoSeguro(plan);
        console.log(incrementoPlan);
        resultado =parseFloat( resultado * calcularTipoSeguro(plan)).toFixed(2);
        

        //TOTAL

        setCargando(true);

        setTimeout(() => {
            //ELIMINA EL SPINNER
            setCargando(false);
            //PASA LA INFORMACION AL COMPONENTE PRINCIPAL
            setResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 4000);

        
    
    }



    return ( 

        <form
            onSubmit={cotizarSeguro}
        >
            {error ? <Error><ErrorSign mensaje="¡Todos los campos son obligatorios!"/></Error>: null}
            <OpcionesComponents>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </OpcionesComponents>

            <OpcionesComponents>
                <Label>Año</Label>
                <Select
                    name="year"
                    year={year}
                    onChange={obtenerInformacion}
                
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </OpcionesComponents>

            <OpcionesComponents>
                <Label>Plan</Label>
                <Inputs 
                    type="radio" 
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}
                /> Básico

                <Inputs 
                    type="radio" 
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}

                /> Completo

            </OpcionesComponents>

            <Button type="submit">Cotizar</Button>

           

        </form>
     );
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}
 
export default Formulario;

