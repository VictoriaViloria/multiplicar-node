// requireds siempre se ponen al principio
//const fs = require(' fs ');
// const fs = require(' express'); paqute que luego lo instalaremos NO viene
//en la documentacion de node no existe nada no son nativos de node
// const fs = require(' ./fs '); archivos que nosotros creamos y ahi viene
// el path 
// const fs = require('fs');
const { crearArchivo } = require('./multiplicar/multiplicar');
//let base = '4';

// crearArchivo(base)
//     .then(archivo => console.log(`Archiiivo creado: ${ archivo }`))
//     .catch(e => console.log(e));
console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]
console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`));


// let data = '';

// for (let i = 1; i < 11; i++) {

//     data += `${base } X ${i} = ${ base * i} \n`;
// }
// //   COPIE Y PEGUE desde la pagina
// // fs.writeFile('message.txt', data, (err) => {
// //     if (err) throw err;
// //     console.log('The file has been saved!');
// //   });

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });