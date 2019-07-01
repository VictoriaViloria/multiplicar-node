// const argv = require('yargs').argv; //yargs es un paquete
// const { crearArchivo } = require('./multiplicar/multiplicar');
// //console.log(process.argv);
// let argv2 = process.argv;
// // let parametro = argv[2];
// // let base = parametro.split('=')[1]
// console.log(' argv  YARGS');
// console.log(argv);
// console.log(' argv2 process');
// console.log(argv2);
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`));
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
const { crearArchivo } = require('./multiplicar/multiplicar');
//console.log(process.argv);
let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
console.log(' argv  YARGS');
console.log('Limite: ', argv.limite);