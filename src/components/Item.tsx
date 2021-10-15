import { FC } from "react";
import Button from "./Button";

interface Props {
  name: string;
  id: number;
  eventHandler(event: number): void;
}

const Item: FC<Props> = ({ name, id, eventHandler }) => {
  return (
    <li>
      <label>{name}</label>
      <Button value="Delete" eventHandler={eventHandler} id={id} />
    </li>
  );
};

export default Item;
