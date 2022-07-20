const producto = {
  idProducto : 1
}

const ws = new WeakMap();
ws.set(producto, 'Monitor');


console.log(ws.get(producto));
console.log(ws.has(producto));