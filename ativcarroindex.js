
var carros = {
    nome: 'Gol',
    cor: 'Prata',
    combustível: ['gasolina', 'álcool', 'diesel'],
    motor: "1.0",
    placa: {
        Letras: "Gif",
        Numeros: 2020,
    },

estacionamento() {
    console.log(`O carro ${this.nome} de cor ${this.cor}, placa ${this.placa.Letras} ${this.placa.Numeros} está na vaga nº 01.`);
},  
tipocombustivel() {
    console.log(`Este carro utiliza ${this.combustível[1]} como combustível.`);
},
}
console.log(carros.nome);
console.log(carros.cor);
console.log(carros.combustível[1]);
console.log(carros.motor);
console.log(carros.placa.Letras + " " + carros.placa.Numeros);
carros.estacionamento();
carros.tipocombustivel();

