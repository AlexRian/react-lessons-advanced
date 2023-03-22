import React, { useLayoutEffect, useRef, useState } from "react";
import Container from "../common/Container";

const UseLayoutEffectExample:React.FC = () =>{
  const [count, setCount] = useState<number>(0);  
  const [width, setWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if(ref.current){
      setWidth(ref.current.getBoundingClientRect().height);
    }
  }, [count]);
  
  return (
    <Container title='useLayoutEffect example'>
      <div ref={ref} style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        {new Array(count).fill(0).map((item, index)=>{
          return <div key={index}>Item</div>
        })}
        <p>The width of this element is {width}px</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Update</button>
      </div>
    </Container>
  )
}

export default UseLayoutEffectExample;