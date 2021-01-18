export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

//CALCULA EL TOTAL A PAGAR SEGUN LA MARCA

export function calcularMarca(marca) {
    let incremento;

    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        default:
            break;
    }

    return incremento;

    
}

//CALCULA EL TIPO DE SEGURO

export function calcularTipoSeguro(plan){
    let increment;

    switch(plan){
        case 'basico':
            increment = 1.20;
            break;
        case 'completo':
            increment = 1.50;
            break;
        

        default:
            break;
    }

    return increment
}