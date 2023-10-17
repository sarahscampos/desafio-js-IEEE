//Obs: Meu nome é Sarah

//Array com nomes e idades variados
let nomesIdades = [
    { nome: "Sarah", idade: 18 },
    { nome: "Kauã", idade: 20 },
    { nome: "Vitória", idade: 17 },
    { nome: "Samuel", idade: 18 },
    { nome: "Samira", idade: 23 },
    { nome: "Gabriel", idade: 19}
];

//Filtra nomes que começam com S (com o filter) e extrai somente o nome desses elementos (com o map)
let pessoasComS = nomesIdades.filter(nomeIdade => (nomeIdade.nome[0] == 'S'))
let nomesComS = pessoasComS.map(pessoa => `${pessoa.nome}`);


let somaIdades = pessoasComS.reduce((soma, pessoa) => {
    return (soma + pessoa.idade);
} , 0);

let qtdComS = pessoasComS.length;
let mediaIdade = somaIdades / qtdComS;
let mediaIdadeReduzida = parseFloat(mediaIdade.toFixed(2));

console.log(nomesComS);
console.log(`média: ${mediaIdadeReduzida}`);
