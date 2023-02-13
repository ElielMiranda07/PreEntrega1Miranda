let ingreso = prompt('Ingresar sueldo bruto para calcular el neto, "sueldos" para ver el historial o "salir" para terminar.').toUpperCase();

let monotributista

const constantes = {

    smvm: 65427,

    cbv: 152515,

    auto: 3100000,

    miami: 942500000,

    anio: 13,

};

let sueldos = [];

function calc_sueldo_neto (ingreso, porcentaje){

    if(ingreso < 200000){

        return ingreso - (ingreso * porcentaje)

    }
    else if(ingreso <= 350000){

        return ingreso - (ingreso * porcentaje)

    }
    else{

        return ingreso - (ingreso * porcentaje)

    }

}

function retenciones (ingreso){

    if(ingreso < 200000){

        return 0.15

    }
    else if(ingreso <=  350000){

        return 0.25

    }
    else{

        return 0.35

    }

}

function calc_dif (sueldo_neto , constantes){

    return sueldo_neto - constantes.smvm

}

function calc_dif_1 (sueldo_neto , constantes){

    return sueldo_neto - constantes.cbv

}

function calc_sueldos (sueldo_neto, constantes){

    return parseFloat(constantes.auto / sueldo_neto).toFixed(1)

}

function calc_sueldos_1 (sueldo_neto, constantes){

    return parseFloat(constantes.miami / sueldo_neto).toFixed(1)

}

function calc_meses_anios (constantes, sueldos_auto){

    return parseFloat(sueldos_auto / constantes.anio).toFixed(2)

}

while (ingreso !== "SALIR"){

    if(ingreso === "SUELDOS"){

        let total_sueldos = sueldos.length

        let sueldo_mas_alto = Math.max.apply(null, sueldos);

        let porcentaje = retenciones(sueldo_mas_alto);

        let sueldo_mas_alto_neto = calc_sueldo_neto(sueldo_mas_alto, porcentaje);

        alert("Historial de sueldos brutos: " + sueldos + ". Total de sueldos en el historial: " + total_sueldos + ". El sueldo bruto más alto es: " + sueldo_mas_alto + " y su neto es " 
        
        + sueldo_mas_alto_neto + ".");

    }
    else if(isNaN(ingreso)){

        alert("Debés ingresar números o la palabra salir");

    }
    else{

        ingreso = parseInt(ingreso);

        let porcentaje = retenciones(ingreso);

        let sueldo_neto = calc_sueldo_neto(ingreso, porcentaje);

        let dif_smvm = calc_dif (sueldo_neto, constantes);

        let dif_cbv = calc_dif_1 (sueldo_neto, constantes);

        let sueldos_auto = calc_sueldos (sueldo_neto, constantes);

        let sueldos_miami = calc_sueldos_1 (sueldo_neto, constantes);

        let sueldos_anios = calc_meses_anios (constantes, sueldos_auto);

        let sueldos_anios_1 = calc_meses_anios (constantes, sueldos_miami)

        alert("Tu sueldo neto es: " + sueldo_neto + ", la diferencia con el SMVM es de: " + dif_smvm + ", además la diferencia con la CBV es de: " + dif_cbv + ". Necesitas un total de: " 
        
        + sueldos_auto + " sueldos para comprar el auto 0km más barato del mercado (" + sueldos_anios + " años). También necesitas " + sueldos_miami 
    
        + " sueldos para comprar una mansion en Miami, si, lamentablemente serían " + sueldos_anios_1 + " años.");

        sueldos.push(ingreso);

    }

    

    ingreso = prompt('Ingresar sueldo bruto para calcular el neto, "sueldos" para ver el historial o "salir" para terminar.').toUpperCase();

}