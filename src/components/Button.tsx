import { FC } from "react";

interface Props {
  value: string;
  id: number;
  eventHandler(event: number): void;
}

const Button: FC<Props> = ({ eventHandler, value, id }) => {
  return <button onClick={() => eventHandler(id)}>{value}</button>;
};

export default Button;
