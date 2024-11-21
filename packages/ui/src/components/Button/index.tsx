import React, { FC } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  colorSchema: string;
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
