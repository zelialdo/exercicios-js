const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //valor na tabela ASCII
console.log(escola.indexOf('3')) //me retorna o index que existe o caractere da minha busca

console.log(escola.substring(0, 3))//imprimir o que esta dentro do indice

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))//Gera um array separado por ','
