function mayorYMenorYPar(num){
    if(num > 5 && num < 10 && num % 2=== 0)console.log(true);
    else console.log(false);
}

mayorYMenorYPar(7);
mayorYMenorYPar(8);



function operadorOr(str){
    if (str === "Henry" || str.length <2) console.log(true);
    else console.log(false);

    
}

operadorOr('h')


function negacionFalse(permiso){
    if (!permiso)console.log('Tiene Permiso');
}


negacionFalse(false);


function negacionTrue(permiso){
    if (permiso)console.log('Tiene Permiso');
}


negacionTrue(true);


function condicionalCompleja(num){
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}

condicionalCompleja(10);
condicionalCompleja(6);
condicionalCompleja(3);
condicionalCompleja(5);