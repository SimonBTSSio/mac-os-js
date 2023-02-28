class Calculator extends App{
    calc;

    constructor(){
        super("imgs/calculator.svg", "Caculatrice");
        this.window.setViewHtml(this.htmlApp());
    }

    openApp(){
        super.openApp();
        const numberButtons = document.querySelectorAll('[data-number]')
        const operationButtons = document.querySelectorAll('[data-operation]')
        const equalsButton = document.querySelector('[data-equals]')
        const deleteButton = document.querySelector('[data-delete]')
        const allClearButton = document.querySelector('[data-all-clear]')
        const previousOperandTextElement = document.querySelector('[data-previous-operand]')
        const currentOperandTextElement = document.querySelector('[data-current-operand]')
        
        this.calc = new Calc(previousOperandTextElement, currentOperandTextElement)
        
        numberButtons.forEach(button => {
            button.addEventListener('click', () => {
            this.calc.appendNumber(button.innerText)
            this.calc.updateDisplay()
            })
        })
        
        operationButtons.forEach(button => {
            button.addEventListener('click', () => {
            this.calc.chooseOperation(button.innerText)
            this.calc.updateDisplay()
            })
        })
        
        equalsButton.addEventListener('click', button => {
            this.calc.compute()
            this.calc.updateDisplay()
        })
        
        allClearButton.addEventListener('click', button => {
            this.calc.clear()
            this.calc.updateDisplay()
        })
        
        deleteButton.addEventListener('click', button => {
            this.calc.delete()
            this.calc.updateDisplay()
        })
    }

    closeApp(){
        
        this.window.setViewHtml(this.htmlApp());
    }

    htmlApp(){
        return `
        <div class="calculator-grid">
            <div class="output">
                <div data-previous-operand class="previous-operand"></div>
                <div data-current-operand class="current-operand"></div>
            </div>
            <button data-all-clear class="span-two">AC</button>
            <button data-delete>DEL</button>
            <button data-operation>÷</button>
            <button data-number>1</button>
            <button data-number>2</button>
            <button data-number>3</button>
            <button data-operation>*</button>
            <button data-number>4</button>
            <button data-number>5</button>
            <button data-number>6</button>
            <button data-operation>+</button>
            <button data-number>7</button>
            <button data-number>8</button>
            <button data-number>9</button>
            <button data-operation>-</button>
            <button data-number>.</button>
            <button data-number>0</button>
            <button data-equals class="span-two">=</button>
        </div>
        `;
    }
}