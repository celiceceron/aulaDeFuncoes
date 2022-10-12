/* Função sem parâmetro e com retorno
2) Vamos criar uma função para gerar um número inteiro aleatório.
Toda vez que eu rodar essa função ela vai gerar um número aleatório
de 1 até 10.
*/

function numeroAleatorio(){
    const min = 0;
    const max = 10;
    const numero = Math.random()*(max - min) + min;
    const numeroInteiro = parseInt(numero);

    console.log(numero);

    return numeroInteiro;
}

console.log(numeroAleatorio());
