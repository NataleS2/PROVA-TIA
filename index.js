import { palavrasCursosTecnicos, palavrasEscolaFundador, palavrasMatricula, mostProbablyQuestion, palavrasAleatorias, bancos } from "./resposta.js";


let pergunta1 = "Quem fundou  bento quirino ? Quem era ele ?"
pergunta1 = pergunta1.toLowerCase(' ')
pergunta1 = pergunta1.split( )

let pergunta2 = "A escola oferece curso técnico ? Quais ?"
pergunta2 = pergunta2.toLowerCase(' ')
pergunta2 = pergunta2.split( )

let pergunta3 = "Onde entro em contato pra matricula ou rematricula ?"
pergunta3 = pergunta3.toLowerCase(' ')
pergunta3 = pergunta3.split( )

let pergunta4 = "Onde eu posso estacionar o meu veiculo ?"
pergunta4 = pergunta4.toLowerCase(' ')
pergunta4 = pergunta4.split( )


for (let i = 0; i < pergunta1.length; i++) {
   for (let j = 0; j < bancos.length; j++) {
    if (bancos[j].probablyWords.indexOf(pergunta1[i]) !== -1) {
        if(pergunta1.includes("fundador"))
        palavrasEscolaFundador.matched+=5
        bancos[j].matched++
    }
   } 
}
console.log(pergunta1)
console.log(mostProbablyQuestion(pergunta1))
console.log("-------------------------------")

for (let i = 0; i < pergunta2.length; i++) {
    for (let j = 0; j < bancos.length; j++) {
     if (bancos[j].probablyWords.indexOf(pergunta2[i]) !== -1) {
        if(pergunta2.includes("curso"))
        palavrasEscolaFundador.matched+=5
         bancos[j].matched ++
     }
    } 
 }
 console.log(pergunta2)
console.log(mostProbablyQuestion(pergunta2))
console.log("-------------------------------")

 for (let i = 0; i < pergunta3.length; i++) {
    for (let j = 0; j < bancos.length; j++) {
     if (bancos[j].probablyWords.indexOf(pergunta3[i]) !== -1) {
        if(pergunta1.includes("Rematricula"))
        palavrasEscolaFundador.matched+=5
         bancos[j].matched ++
     }
    } 
 }
 console.log(pergunta3)
 console.log(mostProbablyQuestion(pergunta3))
 console.log("-------------------------------")

 for (let i = 0; i < pergunta4.length; i++) {
    for (let j = 0; j < bancos.length; j++) {
     if (bancos[j].probablyWords.indexOf(pergunta4[i]) !== -1) {
        if(pergunta1.includes("Veiculo"))
        palavrasEscolaFundador.matched+=5
         bancos[j].matched ++
     }
    } 
 }
 
console.log(pergunta4)
console.log(mostProbablyQuestion(pergunta4))
console.log("-------------------------------")

 