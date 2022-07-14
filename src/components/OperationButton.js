function OperationButton({ operation, onClickOperation }) {
  const handleClick = () => {
    onClickOperation(operation);
  };
  
  return <button onClick={handleClick} className="operation">{operation}</button>;
}

export default OperationButton;
