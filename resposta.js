
// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
    answer: "QUem fundou a escola foi XYZXAS"
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    answer: "Oferecemos os cursos técnicos XYZXAADJASD"
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
    answer: "Para matricular Deve ser feito XYZ, e para matricular ABC"
}

// QUALQUER OUTRA PERGUNTA
export const palavrasAleatorias = {
    probablyWords: [
       "van", "escolar", "computador", "quem", "onde",
       "quando", "rua", "a", "e", "pq", "por", "que",
       "bicicleta", "sala", "teclado", "comida", "cantina", "?",
       "não", "tem", "ventilador"
    ],
    matched: 0,
    answer: "Temos cantina"
}

// Ex: falar que não sabe e para ligar para a instituição

function showAnswer(index) {
    // Retorne uma string como respost
    switch(index) {
        case 0:
            return "Bento quirino foi o fundador das escola"
        case 1 :
            return "A escolha ofereçe curso recnico de informática, enfermagem"
        case 2 :
            return "Mandar um e-mnail para escola, solicitando uma matricula"
        default:
            return "Só falamos assuntos escolares"
    }
    // Exemplo: "Minha resposta"
    return "Resposta de exemplo do arquivo"
}
export const bancos = [
    palavrasAleatorias, palavrasCursosTecnicos, palavrasEscolaFundador, palavrasMatricula
]

export function mostProbablyQuestion(pergunta) {
    // Veja quem teve mais matches dos bancos
    if (pergunta.includes("Veiculo")) {
        return "Não falamos sobre veiculos"
    }
    let matches = [
        palavrasEscolaFundador.matched,
        palavrasCursosTecnicos.matched,
        palavrasMatricula.matched,
        palavrasAleatorias.matched
    ]
    console.log("++++++++++++++++++++++++")
    // Chame a showAnswer com o parâmetro
    console.log(matches)
    console.log(Math.max(... matches))
    console.log("++++++++++++++++++++++++++")
    console.log(matches.indexOf(Math.max(... matches)))
    return showAnswer(matches.indexOf(Math.max(... matches)))
}

//A abordagem foi pegar as palavras aleatorias que uma pessoa poderia digitar que não tem haver com o assunto escola//
