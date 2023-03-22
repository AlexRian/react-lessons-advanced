import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Container from "../common/Container";

export interface TextInputRef {
  clear: () => void;
}

const TextInput = forwardRef<TextInputRef>((props, ref) => {
  const [value, setValue] = useState('Default Value');

  useImperativeHandle(ref, () => ({
    clear: () => setValue(''),
  }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
});

const UseImperativeHandleExample:React.FC = () => {
  const inputRef = useRef<TextInputRef>(null);

  const clearInput = () => {
    inputRef.current?.clear();
  }

  return (
    <Container title='UseImperativeHandle example'>
      <TextInput ref={inputRef}></TextInput>
      <button onClick={clearInput}>Clear</button>
    </Container>
  )
}

export default UseImperativeHandleExample;