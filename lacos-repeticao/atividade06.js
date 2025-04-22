/**Leia 5 notas informadas pelo usuário e armazene-as em 
 * uma lista. Em seguida, utilize o método forEach para 
 * percorrer essa lista e, para cada nota, exiba o 
 * valor da nota junto com a situação do aluno, sendo 
 * Aprovado se a nota for maior ou igual a 7,
 * Em Recuperação se a nota for maior ou igual a 5 
 * e menor que 7, 
 * e Reprovado se a nota for menor que 5. */

const notas = []

for(let i=1; i<=5; i++){
    notas.push(parseFloat(prompt(`Digite a nota ${i}`)))
}
const verificaAprovacao = (nota) => {
    if(nota>=7){
        alert(`Nota: ${nota} | Situação: Aprovado!`)
    }else if (nota<7 && nota>=5){
        alert(`Nota: ${nota} | Situação: Recuperação!`)
    }else{
        alert(`Nota: ${nota} | Situação: Reprovado!`)
    }
}
notas.forEach(verificaAprovacao)

