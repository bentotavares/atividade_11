let valor = Number(prompt("Escreva o valor total da compra:"));
let pessoas = Number(prompt("Escreva o numero de amigos:"));

const total = valor / pessoas;

console.log (`o total entre ${valor} e ${pessoas} é ${total}`);

alert(`O valor que cada um deve pagar é ${total}`);