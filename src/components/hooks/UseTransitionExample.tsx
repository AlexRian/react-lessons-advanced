import React, { useState, useTransition  } from "react";
import Container from "../common/Container";

const SlowRenderList = (props:{ value:number }) => (
  <>
    {Array(props.value)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{props.value - index} </span>
      ))}
  </>
);


const UseTransitionExample:React.FC = () =>{
  const [value, setValue] = useState(10);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => setValue(10000));
  };

  return (
    <Container title='useTransitionExample example'>
      <button onClick={handleClick}>Update</button>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <SlowRenderList value={value} />
      </div>
    </Container>
  )
}

export default UseTransitionExample;