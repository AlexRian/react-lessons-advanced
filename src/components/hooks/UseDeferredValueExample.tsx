import React, { useDeferredValue, useState, useTransition  } from "react";
import Container from "../common/Container";

const SlowRenderList = (props:{value:number}) => (
  <>
    {Array(1000 * props.value)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{1000 * props.value} </span>
      ))}
  </>
);


const UserDeferredValueExample:React.FC = () =>{
  const [value, setValue] = useState(0);
  const deferredValue = useDeferredValue(value);

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <Container title='useDeferredValueExample example'>
      <button onClick={handleClick}>{value}</button>
      <div>DeferredValue: {deferredValue}</div>
      <div>
        <SlowRenderList value={value}/>
      </div>
    </Container>
  )
}

export default UserDeferredValueExample;