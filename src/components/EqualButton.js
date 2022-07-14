const operations = {
    "+": (number1, number2) => number1 + number2,
    "-": (number1, number2) => number1 - number2,
    "*": (number1, number2) => number1 * number2,
    "/": (number1, number2) => number1 / number2,
}

function EqualButton({ display, setDisplay, lastIsOperation, setLastIsOperation }) {
    const makeOperation = (operator, number1, number2) => {
        const operationFunction = operations[operator]; 
        return operationFunction(
            parseInt(number1), 
            parseInt(number2)
        )
    }
    
    const isSecondLevelOperator = (displayValue) => {
        return displayValue === "+" || displayValue === "-";

    }

    const isFirstLevelOperator = (displayValue) => {
        return displayValue === "*" || displayValue === "/";
    }
    
    const resolveFirstLevelOperations = (displayValues) => {
        let resolvedDisplayValues = [];
        let operator = undefined;
        let number1 = undefined;
        let number2 = undefined;
        let result = undefined;
        debugger;
        displayValues.forEach((displayValue, index) => {
            if (isFirstLevelOperator(displayValue)) {
                operator = displayValue
                return;
            } else if (isSecondLevelOperator(displayValue)) {
                operator = undefined;
                return;
            }

            if (number1) {
                number2 = displayValue;
            } else {
                number1 = displayValue;
            }

            if (operator && number1 && number2) {
                // todo indice del primer elemento para guardar el string correctamente
                result = makeOperation(operator, number1, number2);
                resolvedDisplayValues = [result, ...displayValues.slice(index + 1)];
                
                operator = undefined;
                number1 = undefined;
                number2 = undefined;
                result = undefined;
            }
        });

        return resolvedDisplayValues
    }
    
    const handleClick = () => {
        let displayValues = display.split(" ");

        displayValues = resolveFirstLevelOperations(displayValues);
        // displayValues = resolveSecondLevelOperations(displayValues);
        console.log(displayValues)
        setDisplay(displayValues.join(" "))
    }
    
    return <button onClick={handleClick} className="operation">=</button>;
}

export default EqualButton;