import{ ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode, useState } from "react";
import Container from "./common/Container";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance?: "yellow" | "red" | "green" | "blue";
}

const Button: FC<ButtonProps> = ({children, appearance = "pink", ...props}) => {
  return (
    <button {...props} style={{color: appearance}}>
      {children}
    </button>
  );
};

const PropsInheritanceExample: FC = () => {
  return (
    <Container title='PropsInheritance Example'>
      <Button disabled={false} appearance={'blue'}>
        Button
      </Button>
    </Container>
  );
};
  

export default PropsInheritanceExample;
