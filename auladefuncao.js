/* Função sem parâmetro e sem retorno
1) Função que horas são?
Vamos criar uma função que quando chamada ela mostra no 
console a sseguinte mensagem: 
Olá, agora são 10:20:43 PM
*/

function queHorasSão(){
    const horaAtual = new Date();
    const horaConvertida = horaAtual.toLocaleTimeString();

    console.log("Olá, agora são " + horaConvertida);
}

queHorasSão();
