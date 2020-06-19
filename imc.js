//Simples programa que calcula o IMC e nível de obesidade de Tatmorenno

const nome = 'Tatiana'
const peso = 60
const altura = 1.68

const imc = peso / (altura * altura)
console.log('Valor do IMC : ' + Math.round(imc))

if(imc >= 30) {
    console.log(`${nome}, você está acima do peso.`)
} else {
    console.log(`${nome}, você não está acima do peso.`)
}