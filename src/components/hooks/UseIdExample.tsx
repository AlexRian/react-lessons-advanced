import React, { useId, useState } from "react";
import Container from "../common/Container";

const UseIdExample:React.FC = () =>{
  const [value, setValue] = useState('');
  const inputId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container title='useIdExample example'>
      <label htmlFor={inputId}>Input field</label>
      <input type="text" id={inputId} value={value} onChange={handleChange} />
    </Container>
  )
}

export default UseIdExample;