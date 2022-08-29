console.log('primero');


setTimeout(() => {
    console.log('segundo');
}, 0);


console.log('tercero');


setTimeout(() => {
    console.log('cuarto');
}, 0);


new Promise((resolve) => {

    resolve('Desconocido...');
}).then(console.log);

console.log('Ultima');