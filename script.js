class Calculator{
    constructor(previousDisplayTextElement,currentDisplayTextElment){
        this.previousDisplayTextElement=previousDisplayTextElement;
        this.currentDisplayTextElment=currentDisplayTextElment;
        this.clear()
    }

    updateDisplay(){
        this.currentDisplayTextElment.innerText=this.currentDisplay;
        if(this.operation !=null){
            this.previousDisplayTextElement.innerText=this.previousDisplay + (" ")+ (this.operation)
            this.previousDisplayTextElement.innerText=`${this.previousDisplay} ${this.operation}`
            
        }
        // this.previousDisplayTextElement.innerText=this.previousDisplay;
        


    }
    
    appendNumber(number){
        if(number==="." && this.currentDisplay.includes("."))return;
        this.currentDisplay=this.currentDisplay.toString()+ number.toString();

    }
    pickOperation(operation){
        if(this.currentDisplay=== "")return
        // if(this.previousDisplay=== number){
        //     this.equal
        // }
        if(this.previousDisplay!=""){
            this.equal()
        }
        this.operation=operation
        this.previousDisplay=this.currentDisplay;
        this.currentDisplay=""

    }
    clear(){
    
        this.currentDisplay="";
        this.previousDisplay="";
        this.operation=undefined;

    }
    delete(){
        // this.currentDisplay=this.currentDisplay.toString().
        this.currentDisplay=this.currentDisplay.toString().slice(0,-1)
        


    }
    equal(){

        let computation
        const prevValue=parseFloat(this.previousDisplay);
        const currValue= parseFloat(this.currentDisplay)
        // if(this.currentDisplay==="")return
        if( isNaN(prevValue) || isNaN(currValue) )return

        switch(this.operation){
            case "/":
                computation=prevValue / currValue
            break
            case "*":
                computation=prevValue*currValue
            break
            case "-":
                computation=prevValue-currValue
            break
            case "+":
                computation=prevValue+currValue
            break
            case "%":
                computation=prevValue%currValue
            break
            default:
                return
        }

        this.currentDisplay=computation
        this.operation=undefined
        this.previousDisplay=""

    }
    // if(computation===number)
    
}




const operationButton=document.querySelectorAll("[data-operation]");
const numberButton=document.querySelectorAll("[data-number]");
const allClearButton=document.querySelector("[data-allClear]");
const deleteButton=document.querySelector("[data-delete]");
// const equalButton=document.querySelectorAll("[data-equal]");
const equalButton=document.querySelector("[data-equal]")
const previousDisplayTextElement=document.querySelector("[data-previousDisplay]")
const currentDisplayTextElment=document.querySelector("[data-currentDisplay]")



const calculator=new Calculator(previousDisplayTextElement,currentDisplayTextElment)

operationButton.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.pickOperation(button.innerText)
        calculator.updateDisplay()
    })
})

numberButton.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener("click",button => {
    calculator.equal()
    calculator.updateDisplay()
})

allClearButton.addEventListener("click",button=>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click",button=>{
    calculator.delete()
    calculator.updateDisplay()
})
