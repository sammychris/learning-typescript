import React, { useState } from "react";
import "./App.css";
import Button from "../components/Button";
import InputField from "../components/InputField";
import ListItems from "../components/ListItems";

interface InameList {
  name: string;
  id: number;
}

function App() {
  const [nameList, setNameList] = useState<Array<InameList>>([]);
  const [name, setName] = useState<string>("");

  const addToList = (): void => {
    setNameList([...nameList, { name, id: nameList.length }]);
    setName("");
  };

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const deleteName = (id: number): void => {
    const filterList = nameList.filter((item) => {
      return item.id !== id;
    });
    setNameList(filterList);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>TODO LIST</h2>
        <h3>Add Item</h3>
        <p>
          <InputField currentValue={name} handleChange={handleChange} />
          <Button eventHandler={addToList} value="Add" id={8} />
        </p>

        <h3>Names</h3>
        <ListItems list={nameList} eventHandler={deleteName} />
      </div>
    </div>
  );
}

export default App;
