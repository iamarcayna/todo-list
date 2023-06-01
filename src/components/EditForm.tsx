import React, { ChangeEvent, FormEvent, useState } from "react";

export const EditForm = ({ submit, todoItem, isUnique, todoList }: any) => {
  const [inputText, setInputText] = useState(todoItem.body);
  const [unique, setUnique] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setUnique(isUnique(e.target.value, todoList));
  };
  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() !== "" && unique) {
      submit({
        id: todoItem.id,
        body: inputText,
        isCompleted: todoItem.isCompleted,
        isEditing: todoItem.isEditing,
      });
      setInputText("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleEdit}>
      <input
        autoFocus={true}
        className={`todo-input ${!unique && "error"}`}
        type="text"
        value={inputText}
        placeholder="What should we do today?"
        onChange={handleChange}
      />
      <button className="todo-submit" type="submit">
        Edit Task
      </button>
    </form>
  );
};
