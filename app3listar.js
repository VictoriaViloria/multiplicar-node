const colors = require('colors');
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
    .command('crear', 'genera un archivo con la tabla de multiplicar', {
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
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archiiivo creado: ${ archivo.red }`))
            .catch(e => console.log(e));
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}
console.log(argv);
//console.log(listarTabla(9, 'a'));
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(' argv  YARGS');
// console.log('Limite: ', argv.limite);