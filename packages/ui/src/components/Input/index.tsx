import React, { FC } from "react";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  colorSchema: string;
}

const Input: FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default Input;
