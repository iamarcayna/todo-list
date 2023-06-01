import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const AddForm = ({ submit, todoList, isUnique }: any) => {
  const [inputText, setInputText] = useState("");
  const [unique, setUnique] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setUnique(isUnique(e.target.value, todoList));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputText.trim() !== "" && unique) {
      submit({
        id: uuidv4(),
        body: inputText,
        isCompleted: false,
        isEditing: false,
      });
      setInputText("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className={`todo-input ${!unique && "error"}`}
        type="text"
        value={inputText}
        placeholder="What should we do today?"
        onChange={handleChange}
      />
      <button className="todo-submit" type="submit">
        Add Task
      </button>
    </form>
  );
};
