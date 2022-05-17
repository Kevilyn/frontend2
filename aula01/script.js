let numeros = [1, 2, 4, 8]


//cadu:

function somar(array){
let total = 0;

for(let i = 0; i < numeros.length; i++){
    total += numeros[i];
}

return total;
}


//Kevilyn:

const array = [1, 2, 4, 8];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);


//Raphael:


function somar(array) {
    for (let i = 0; i < numeros.length; i++) {
        
         let soma = numeros.reduce(function(acc, valorAtual){
            return acc + valorAtual
         })
         return soma;
    }

}

console.log(somar(numeros))


console.log("Teste cadu");
console.log(somar(numeros));