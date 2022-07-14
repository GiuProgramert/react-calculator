function NumberButton({ number, onClickNumber }) {
  const handleClick = () => {
    onClickNumber(number);
  };

  return <button onClick={handleClick}>{number}</button>;
}

export default NumberButton;
