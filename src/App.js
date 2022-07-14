import { useState } from "react";

import NumberButton from "./components/NumberButton";
import OperationButton from "./components/OperationButton";
import Display from "./components/Display";
import EqualButton from "./components/EqualButton";

function App() {
  const [display, setDisplay] = useState("");
  const [lastIsOperation, setLastIsOperation] = useState(false);

  const handleAddNumber = (number) => {
    setDisplay(display + number);
    setLastIsOperation(false);
  }

  const handleAddOperation = (operation) => {
    const notOperationValue = display.substring(0, display.length - 3) 

    let displayValue = lastIsOperation ? notOperationValue : display;

    setDisplay(`${displayValue} ${operation} `);
    setLastIsOperation(true);
  }

  return (
    <section className="calculator">
      <Display>{display}</Display>
      <div className="calculator-button">
        <NumberButton number={7} onClickNumber={handleAddNumber} />
        <NumberButton number={8} onClickNumber={handleAddNumber} />
        <NumberButton number={9} onClickNumber={handleAddNumber} />
        <OperationButton operation={"*"} onClickOperation={handleAddOperation} />
        <NumberButton number={4} onClickNumber={handleAddNumber} />
        <NumberButton number={5} onClickNumber={handleAddNumber} />
        <NumberButton number={6} onClickNumber={handleAddNumber} />
        <OperationButton operation={"-"} onClickOperation={handleAddOperation} />
        <NumberButton number={1} onClickNumber={handleAddNumber} />
        <NumberButton number={2} onClickNumber={handleAddNumber} />
        <NumberButton number={3} onClickNumber={handleAddNumber} />
        <OperationButton operation={"+"} onClickOperation={handleAddOperation} />
        <NumberButton number={0} onClickNumber={handleAddNumber} />
        <OperationButton operation={","} onClickOperation={handleAddOperation} />
        <OperationButton operation={"/"} onClickOperation={handleAddOperation} />
        
        <EqualButton 
          display={display} 
          setDisplay={setDisplay}
          lastIsOperation={lastIsOperation}
          setLastIsOperation={setLastIsOperation}
        />
      </div>
    </section>
  );
}

export default App;
