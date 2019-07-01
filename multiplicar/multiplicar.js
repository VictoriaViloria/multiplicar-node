//requireds
const fs = require('fs');
const colors = require('colors');
//module.exports.crearArchivo  <= otra forma 
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i < limite; i++) {
            data += `${base } X ${i} = ${ base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla - ${ base }-al-${limite}.txt`);
        });
    });
}
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!(Number(base) && Number(limite))) {
            reject(`El valor introducido ${ base } no es un numero o el de limite ${limite}`);
            return;
        }
        console.log(`=======tabla de ${ base }============`.green);
        for (let i = 1; i <= limite; i++) {
            //data += `${base } X ${i} = ${ base * i} \n`;
            console.log(` ${base} X ${i} = ${base * i}`);
        }
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}

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