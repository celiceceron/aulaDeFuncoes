/* Função com parâmetro e sem retorno
3) Criando uma função debug.

Nesse início de jornada é muito comum a gente precisar
ficar usando o comando console.log() para ver os
valores das variáveis e os seus tipos. Só que ficar escrevendo
console.log(variável) e conosle.log(typeof(variavel)) toda hora
é bem chato. Vamos criar uma função para facilitar a nossa vida?
No dia a dia a gente usa esse processo para achar bugs, ou "debugar",
Então esse pode ser o nome da nossa função. Ela vai funcionar assim,
vamos chamar a função passando a variável como parâmmetro e vemos
no console a seguinte mensagem:

[DEBUG] Valor: valorDaVarial - Tipo: tipoDaVariavel
*/

function debug(variavel){
    const tipo = typeof variavel

console.log(`DEBUG] Valor: ${variavel} valorDaVarial - Tipo: ${tipo}`);

}

debug("Celice");
debug(33);
debug("Trento/Itália");

