let perguntas = [
    {
        pergunta: 'Qual software é amplamente utilizado na produção musical profissional?',
        respostas: [
            'FL Studio',
            'Logic Pro',
            'Audacity',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a função de um compressor em uma mixagem de áudio?',
        respostas: [
            'Aumentar o volume',
            'Diminuir a dinâmica',
            'Adicionar eco',
        ],
        correta: 1
    },
    {
        pergunta: 'O que significa a sigla "DAW" em produção musical?',
        respostas: [
            'Digital Audio Workspace',
            'Dynamic Audio Workflow',
            'Digital Acoustic Waveform',
        ],
        corretas: 0
    },
    {
        pergunta: 'Qual é o objetivo principal da equalização em uma mixagem de áudio?',
        respostas: [
            'Corrigir problemas de afinação',
            'Ajustar o volume de diferentes faixas',
            'Equilibrar as frequências sonoras',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a função de um metrônomo na produção musical?',
        respostas: [
            'Ajustar a velocidade de reprodução',
            'Marcar o tempo',
            'Adicionar efeitos sonoros',
        ],
        correta: 1
    },
    {
        pergunta: 'Em qual fase do processo de produção musical a masterização ocorre?',
        respostas: [
            'Pré-produção',
            'Mixagem',
            'Pós-produção',
        ],
        correta: 2
    },
    {
        pergunta: 'O que é MIDI em produção musical?',
        respostas: [
            'Um tipo de microfone',
            'Um formato de áudio de alta qualidade',
            'Um protocolo de comunicação digital para instrumentos musicais',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a diferença entre um sintetizador analógico e um sintetizador digital?',
        respostas: [
            'Um utiliza circuitos eletrônicos, o outro utiliza processamento de áudio',
            'Um é mais caro que o outro',
            'Não há diferença significativa',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é um "loop" na produção musical?',
        respostas: [
            'Um tipo de efeito de áudio',
            'Uma seção repetitiva de música',
            'Uma ferramenta de edição de vídeo',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a função de um reverb em uma mixagem de áudio?',
        respostas: [
            'Adicionar distorção',
            'Simular o ambiente acústico',
            'Controlar a velocidade do áudio',
        ],
        correta: 1
    },
];
    
    let quiz = document.querySelector('#quiz')
    let template = document.querySelector('template')

    let corretas = new Set()
    let totalDePerguntas = perguntas.length
    let mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`

    for(let item of perguntas) {
         
        let quizItem = template.content.cloneNode(true) 
        quizItem.querySelector('h3').textContent = item.pergunta

        for(let resposta of item.respostas) {
            let dt = quizItem.querySelector('dl dt').cloneNode(true)
            dt.querySelector('span').textContent = resposta
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            dt.querySelector('input').onchange = (event) => {
                let estaCorreta = event.target.value == item.correta
                
                corretas.delete(item)
                if(estaCorreta) {
                    corretas.add(item)
                }
                
                mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`
            }
            
            quizItem.querySelector('dl').appendChild(dt)
        }


        quizItem.querySelector('dl dt').remove()

        quiz.appendChild(quizItem)
    }