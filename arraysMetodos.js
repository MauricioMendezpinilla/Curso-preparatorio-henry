// var colores = ['amarillo','azul'];
// colores.push('rojo');
// colores.unshift('verde');
// colores.pop();
// colores.shift();
// console.log(colores);

// var pintores =['picasso','velazquez','van gogh','dali'];
// var incluyeDali = pintores.includes('velazquez');
// console.log (incluyeDali);

var numeros =[10,2,8,9];
var cumplenCondicion = numeros.every((num) => {
    return num >5;
});

console.log(cumplenCondicion);

// var palabra ='Henri';
// var palabraSeparada = palabra.split('');
// console.log(palabraSeparada);
// palabraSeparada.pop();
// palabraSeparada.push('y');
// console.log(palabraSeparada);

// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

// var numeros = [1,2,3,4];
// numeros.forEach((num)=> console.log(num));
// // numeros.forEach((num)=>{
//     if (num === 3){
//         console.log(num);
//     }
// })

// var masUno = numeros.map(num => {
//     return num + 1;
// });
// console.log(masUno);