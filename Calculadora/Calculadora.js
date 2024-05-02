const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    addDigit(digit){

        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return;
        } 
        this.currentOperation = digit;
        this.updateScreen();
    }
    //process all calculator operations
    processOperation(operation){
        //check if current value is empty
        if(this.currentOperationText.innerText === "" && operation !== "C"){
            //change operation
            if(this.previousOperationText.innerText !== ""){
                this.changeOperation()
            }
            return;
        }


        //get current and previuos value
        let operationValue
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;


        switch(operation){
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current,previous);
                break;
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current,previous);
                break;
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current,previous);
                break;
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current,previous);
                break; 
            case "DEL":
                this.processDelOperator();
                break;
            case "CE":
                this.processClearCurrentOperator();
                break;   
            case "C":
                this.processClearAllOperator();
                break;    
            case "=":
                this.processEqualOperator();
                break;         
            default:
                return;    
        }
    }
    //changes values of the calculator screen
    updateScreen(
         operationValue = null,
         operation = null, 
         current = null,
         previous=null)
         {

         if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
         }else{
            if(previous === 0){
                operationValue = current
            }
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";
         } 
    }

    // change math operation
    changeOperation(operation){
        const mathOperation = ["*", "/","+","-"];

        if(!mathOperation.includes(operation)){
            return;
        }
        this.previousOperationText.innerText =
         this.previousOperationText.innerText.slice(0, -1) + operation; 
    }

    processDelOperator(){
        this.currentOperationText.innerText = 
        this.currentOperationText.innerText.slice(0, -1);
    }
    processClearCurrentOperator(){
        this.currentOperationText.innerText = "";
    }
    processClearAllOperator(){
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";
    }
    processEqualOperator(){
        const operation = previousOperationText.innerText.split(" ")[1];
        this.processOperation(operation);
    }
}
const calc = new Calculator(previousOperationText,currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        }else{
            calc.processOperation(value);
        }

    });
});