import React, { memo, useState } from "react";
import Container from "../common/Container";

interface ChildElementProps {
  onClick: () => void;
}

const ChildElement:React.FC<ChildElementProps> = memo((props) => {
  console.log('Child Rendering');

  return(
    <button onClick={props.onClick}>Increment</button>
  );
})

const UseCallbackExample:React.FC = () =>{
  
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // const incrementCount = useCallback(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);
  
  return (
    <Container title='useCallback example'>
      <div>Current count: {count}</div>
      <ChildElement onClick={incrementCount}/>
    </Container>
  )
}

export default UseCallbackExample;