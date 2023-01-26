let ingreso;

ingreso = parseInt(ingreso);

const smvm = 65427;

const cbv = 152515;

const auto = 3100000;

const miami = 942500000;

const año = 12;


function retenciones (ingreso){

    if(ingreso < 200000){

        porcentaje = 0.15

    }
    else if(ingreso >=  200000){

        porcentaje = 0.25

    }
    else if(ingreso >= 350000){

        porcentaje = 0.35

    }

    return porcentaje

}

function calcular_dif_smvm (sueldo_neto, smvm){

    let dif_salario_mini = sueldo_neto - smvm;

    return dif_salario_mini

}

function calcular_dif_cbv (sueldo_neto, cbv){

    let dif_cbv = sueldo_neto - cbv;

    return dif_cbv

}

function calc_sueldos_auto (sueldo_neto, auto){

    let sueldos_auto = auto / sueldo_neto;

    return sueldos_auto

}

function calc_sueldos_miami (sueldo_neto, miami){

    let sueldos_miami = miami / sueldo_neto;

    return sueldos_miami

}

function calc_sueldo_neto (ingreso, porcentaje){
    if(ingreso < 200000){

        sueldo_neto = ingreso - (ingreso * porcentaje)

    }
    else if(ingreso >= 200000){

        sueldo_neto = ingreso - (ingreso * porcentaje)

    }
    else if(ingreso >= 350000){

        sueldo_neto = ingreso - (ingreso + porcentaje)

    }

    return sueldo_neto
}

function calc_meses_años (año, sueldos_auto){

    let años = sueldos_auto / año;

    return años

}

while (ingreso != "SALIR"){

    ingreso = prompt('Ingresar sueldo bruto para calcular el neto o "salir" para terminar.').toUpperCase();

    
    
    if(ingreso != "SALIR"){

        let porcentaje = retenciones(ingreso);

        calc_sueldo_neto(ingreso, porcentaje);

        let sueldos_auto = calc_sueldos_auto(sueldo_neto, auto);

        let sueldos_miami = calc_sueldos_miami(sueldo_neto, miami);

        alert("Tu sueldo neto es: " + sueldo_neto + ", la diferencia con el SMVM es de: " + calcular_dif_smvm(sueldo_neto, smvm) + ", además la diferencia con la CBV es de: " 
        
        + calcular_dif_cbv(sueldo_neto, cbv) + ". Necesitas un total de: " + parseFloat(calc_sueldos_auto(sueldo_neto, auto)).toFixed(1) + " sueldos para comprar el auto 0km más barato del mercado (" 
        
        + parseFloat(calc_meses_años(año, sueldos_auto)).toFixed(2) + " años). También necesitas " + parseFloat(calc_sueldos_miami(sueldo_neto, miami)).toFixed(1)
        
        + " sueldos para comprar una mansion en Miami, si, lamentablemente serían " + parseFloat(calc_meses_años(año, sueldos_miami)).toFixed(2) + " años.");
    
    }

}