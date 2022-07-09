const cidades = {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}


const formulario = document.querySelector('#form')
const selectEstado = document.querySelector('#selectEstado')
const selectCidades = document.querySelector('#selectCidades')
const divCidades = document.querySelector('#divCidades')


selectEstado.onchange = function(evento){
    const estado = evento.target.value

    let listaCidades

    if(estado === 'sp'){
        listaCidades = cidades.sp
    }
    
    if(estado === 'rj'){
        listaCidades = cidades.rj
    }

    htmlCidades = `<option value=''>-- Selecione a Cidade --</option>`

    for(let cidade of listaCidades){
        htmlCidades += `<option value='${cidade}'>${cidade}</option>`
    }

    selectCidades.innerHTML = htmlCidades
    divCidades.classList.add('visible')
}

formulario.onsubmit = function(evento){
    evento.preventDefault()

    let temErro = false
    let inputEstado = document.forms['form']['selectEstado']
    let inputCidade = document.forms['form']['selectCidades']

    if(!inputEstado.value){
        temErro = true
        selectEstado.classList.add('inputErro')

        let span = inputEstado.nextSibling.nextSibling
        span.innerText = 'Selecione seu Estado'
    } else {
        inputEstado.classList.remove('inputErro')
        
        let span = inputEstado.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!inputCidade.value){
        temErro = true
        selectCidades.classList.add('inputErro')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = 'Selecione sua Cidade'
    } else {
        inputCidade.classList.remove('inputErro')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro){
        formulario.submit()

    }
}



