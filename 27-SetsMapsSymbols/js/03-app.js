const cliente = new Map();

cliente.set('nome', 'João');
cliente.set('idade', 20);
cliente.set('profissão', 'Desenvolvedor');






console.log(cliente.has('nome'));

console.log(cliente.delete('nome'));

console.log(cliente.get('nome'));

const cliente2 = new Map([['nome', 'João', 'idade', 20]], [['profissão', 'Desenvolvedor']]);

cliente2.set('nome', 'Maria');
console.log(cliente2);

