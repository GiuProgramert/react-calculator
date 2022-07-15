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
        let resolvedDisplayValues = displayValues.slice();
        let operator = undefined;
        let number1 = undefined;
        let number2 = undefined;
        let result = undefined;
        let indexNumber1 = Number();
        let indexNumber2 = Number();

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
                indexNumber2 = index;
            } else {
                number1 = displayValue;
                indexNumber2 = index;
            }

            if (operator && number1 && number2) {
                debugger;
                result = makeOperation(operator, number1, number2);
                resolvedDisplayValues = [
                    ...resolvedDisplayValues.slice(0, indexNumber1),
                    result, 
                    ...resolvedDisplayValues.slice(indexNumber2 + 1)
                ];
                
                operator = undefined;
                number1 = undefined;
                number2 = undefined;
                result = undefined;
            }
        });

        return resolvedDisplayValues
    }
    
    const getOperations = (displayValues) => {
        return displayValues
            .filter((operation, index) => {
                if (
                    isFirstLevelOperator(operation) ||
                    isSecondLevelOperator(operation)
                ) {
                    return { operation, index }
                }
            });
    }

    const resolve = (displayValues) => {
        let existSecondLevelOp = false;
        let operations = getOperations(displayValues);

        // todo conseguir separar el array para hacer la logica
    }

    const handleClick = () => {
        let displayValues = display.split(" ");

        // displayValues = resolveFirstLevelOperations(displayValues);
        // displayValues = resolveSecondLevelOperations(displayValues);
        // console.log(displayValues)
        // setDisplay(displayValues.join(" "))
    }
    
    return <button onClick={handleClick} className="operation">=</button>;
}

export default EqualButton;