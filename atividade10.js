let distancia = Number(prompt("Quantos Km você vai viajar?"));
let consumo = Number (prompt("Quantos Km faz pro litro?"));
let gasolina = Number(prompt("Qual o preço da gasolina?")); 

const Lnecessario = distancia/consumo
const Vgasto = Lnecessario*gasolina

console.log (`Na viagem você vai gastar um total de ${Vgasto} reais`)