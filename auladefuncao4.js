/* Função com parâmetro e com retorno
4) Calcular valor com desconto
Imagina que temos um site de vendas e precisamos de uma função para
calcular o desconto aplicadp em um produto. Essa função recebe o
valor do produto e o valor do desconto.
Por ex: Se chamarmos a função passando o valor de 100 e o desconto
5, ela deve retornar o valor de 95, que corresponde ao valor com desconto de
5% aplicado.
*/

// valor do produto
// valor do desconto

function calculaDesconto (valor, desconto){
    const valorFinal = valor* (1 - desconto/100);
    return valorFinal.toFixed(2);
}
const valorComDesconto = calculaDesconto(1000, 95);

console.log(valorComDesconto);


// retornar o valor final com desconto aplicado