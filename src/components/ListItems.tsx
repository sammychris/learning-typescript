import { FC } from "react";
import Item from "./Item";

interface ItemProps {
  name: string;
  id: number;
}

interface Props {
  list: Array<ItemProps>;
  eventHandler(event: number): void;
}

const ListItems: FC<Props> = ({ list, eventHandler }) => {
  return (
    <ul id="incomplete-tasks">
      {list.map((item) => (
        <Item {...item} eventHandler={eventHandler} key={item.id} />
      ))}
    </ul>
  );
};

export default ListItems;
