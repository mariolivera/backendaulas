let fs = require('fs')

let alunos = fs.readFileSync('exercicio01/2022/10/17/alunos.txt').toString().split('\n');

alunos = alunos.filter((cadaAluno) => cadaAluno !=='');
console.table(alunos);
