class Calaculator {
    constructor(prev, current) {
        this.prev = prev;
        this.current = current;
        this.clear()
    }
    clear() {
        this.currentOperand = '';
        this.prevOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    choseOperation(operation) {
        if(this.currentOperand === '') return;
        if(this.prevOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.prevOperand = this.currentOperand;
        this.currentOperand = '';
    }
    compute(){
        let computation;
        const prevCompute = parseFloat(this.prevOperand);
        const currentCompute = parseFloat(this.currentOperand);
        if(isNaN(prevCompute) || isNaN(currentCompute)) return;
        switch(this.operation) {
            case '+': 
                computation = prevCompute + currentCompute;
                break;
            case '-': 
                computation = prevCompute - currentCompute;
                break;
            case '*': 
                computation = prevCompute * currentCompute;
                break;
            case '/': 
                computation = prevCompute / currentCompute;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.prevOperand = '';
    }
    updateDisplay(){
        this.current.innerText = this.currentOperand;
        if(this.operation != null){
        this.prev.innerText = `${this.prevOperand} ${this.operation}`;
    }else{
        this.prev.innerText = '';
    }
}
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const prev = document.querySelector('[data-prev]');
const current = document.querySelector('[data-current]');

const calaculator = new Calaculator(prev, current)

numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calaculator.appendNumber(button.innerText)
        calaculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calaculator.choseOperation(button.innerText);
        calaculator.updateDisplay();
    })
})
equalsButton.addEventListener('click', button =>{
    calaculator.compute();
    calaculator.updateDisplay();
})
allClearButton.addEventListener('click', button =>{
    calaculator.clear();
    calaculator.updateDisplay();
})
deleteButton.addEventListener('click', button =>{
    calaculator.delete();
    calaculator.updateDisplay();
})