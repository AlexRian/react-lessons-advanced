import React, { useState } from 'react';
import Container from './common/Container';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const FormExample:React.FC = () => {

  const [values, setValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form had submited');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container title='Form example'>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', gap:'10px'}}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={values.firstName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={values.lastName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

export default FormExample;