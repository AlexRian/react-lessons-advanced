import React, { useDebugValue, useState } from "react";
import Container from "../common/Container";

const useCount = (initialValue:number):[number, () => void, () => void] => {
  const [count, setCount] = useState<number>(initialValue);

  useDebugValue(`Current count: ${count}`);

  const increment = () => {
    setCount(count + 1);
  };

  const descrement = () => {
    setCount(count - 1);
  };

  return [count, increment, descrement];
}

const UseDebugValueExample:React.FC = () =>{
  const [count, increment, descrement] = useCount(0);  

  return (
    <Container title='useDebugValue example'>
      <p>Current: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={descrement}>Increment</button>
    </Container>
  )
}

export default UseDebugValueExample;