const input = require("readline-sync");

console.log ('>>>>> Digite o ano atual ')
const anoAtual = input.question ('*****Ano atual (com 4 digitos): ')

console.log ('>>>>> Qual o ano do seu nascimento  ')
const anoNascimento = input.question ('******Ano de nascimento (com 4 digitos): ')

const idade = parseInt (anoAtual) - (anoNascimento);
console.log (idade)

if (idade >= 18 && idade < 70 ){
    console.log ('---------Por lei, o voto é obrigatório! ---------')
} if (idade > 70   ){
    console.log ('---------Pode votar, mas o voto não é obrigatório! --------- ')
} if(idade >= 16 && idade <18 ){
    console.log ('---------Pode votar, mas o voto não é obrigatório! --------- ') 
}else if (idade < 16)  {
    console.log ('---------Menor de idade não pode votar! --------- ')
}


