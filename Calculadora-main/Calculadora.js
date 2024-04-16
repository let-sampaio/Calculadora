const calculadora = document.querySelector('.calculadora')
const teclas = calculadora.querySelector('.teclas')

teclas.addEventListener('click', e =>{
    if(e.target.matches('button')){

        Array.from(Key.parentNode.children)
        .forEach(k =>  k.classList.remove('is-depressed'))

        calculadora.dataset.previouskeyType = 'operator'

    }
})

const tecla = e.target
const action = tecla.dataset.action


if (!action){
    calculadora.dataset.previouskeyType = 'number'
}

if(
    action === 'add' || 
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide' 
){
    const firstValue = calculadora.dataset.firstValue
    const operator = calculadora.dataset.operator
    const secondValue = displayedNum

    if(firstValue &&
        operator &&
        previouskeyType !== 'operator')
        {
        const calcValue= calculadora(firstValue,operator,secondValue)
        display.textContent = calcValue
        Calculadora.dataset.firstValue = calcValue
    }else{
        calculadora.dataset.firstValue = displayedNum
    }

    Key.classList.add('is-depressed')
    calculadora.dataset.firstValue = displayedNum
    calculadora.dataset.operator = action
}

if(action === 'decimal'){
    if(!displayedNum.includes('.')){
        display.textContent = displayedNum + '.'
     }else if (previouskeyType === 'operator'){
        display.textContent = '0'
     }
    
    calculadora.dataset.previouskeyType = 'decimal'
}
if(action !== 'clear'){
    const clearButton = calculadora.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
}
if(action === 'clear'){
    if(Key.textContent){

    }
    display.textContent = 0
    MediaKeyMessageEvent.textContent = 'AC'
    calculadora.dataset.previouskeyType = 'clear'
}
if(action === 'calculate'){
    const firstValue = calculadora.dataset.firstValue
    const operator = calculadora.dataset.operator
    const secondValue = displayedNum

    if(firstValue){
        if(previouskeyType === 'calculate'){
            firstValue = displayedNum
            secondValue = calculadora.dataset.modValue
        }
        display.textContent = calculadora(firstValue,operator,secondValue)
    }
    calculadora.dataset.modValue - secondValue
    calculadora.dataset.previouskeyType = 'calculate'
}

const display = document.querySelector('.display')

teclas.addEventListener('click', e =>{
    if(e.target.matches('button')){
        const Key = e.target
        const action = Key.dataset.action
        const KeyContent = Key.textContent
        const displayedNum = display.textContent
    }
})

if(!action){
    if(displayedNum === '0'){
        display.textContent = KeyContent
    }else{
        display.textContent = displayedNum + KeyContent
    }
}
 if (action === 'decimal'){
    if(!displayedNum.includes('.')){
        display.textContent = displayedNum + '.'
    }else if (
        previouskeyType === 'operator' ||
        previouskeyType === 'calculate'
    ){
        display.textContent = '0.'
    }
  calculadora.dataset.previouskeyType = 'decimal'
 }

 const previouskeyType = calculadora.dataset.previouskeyType

 if(!action){

    if(displayedNum === '0' ||
     previouskeyType === 'operator' ||
     previouskeyType === 'calculate')
     {
     display.textContent = KeyContent

    }else{
        display.textContent = displayedNum + KeyContent
    }
    calculadora.dataset.previouskeyType = 'number'
 }
 
 const Calculadora = (n1,operator,n2) =>{
    let result = ''

    if(operator === 'add'){
        result = parseFloat(n1) + parseFloat(n2)
    }else if(operator === 'subtract'){
        result = parseFloat(n1) - parseFloat(n2)
    }else if (operator === 'multiply'){
        result = parseFloat(n1) * parseFloat(n2)
    }else if(operator === 'divide'){
        result = parseFloat(n1)/ parseFloat(n2)
    }

    return result
 }



