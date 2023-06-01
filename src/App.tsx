import { useState } from "react";
import "./App.css";

import { AddForm } from "./components/AddForm";
import { Todo } from "./models/TodoModel";
import { TodoTable } from "./components/TodoTable";
import { CompletedTable } from "./components/CompletedTable";

function App() {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [completedTodoList, setCompletedTodoList] = useState<Array<Todo>>([]);

  const handleDeleteClicked = (todo: Todo, list: Array<Todo>) => {
    let newTodoList = list.filter((value) => value.id !== todo.id);
    if (todo.isCompleted) {
      setCompletedTodoList(newTodoList);
    } else {
      setTodoList(newTodoList);
    }
  };

  const handleCompleteClicked = (todo: Todo, list: Array<Todo>) => {
    if (!todo.isCompleted) {
      toggleCompleted(todo, list);
      let completedTodos = list.filter((value) => value.isCompleted);
      let editedTodos = list.filter((value) => !value.isCompleted);
      setTodoList(editedTodos);
      setCompletedTodoList([...completedTodoList, ...completedTodos]);
    } else {
      toggleCompleted(todo, list);
      let completedTodos = list.filter((value) => value.isCompleted);
      let editedTodos = list.filter((value) => !value.isCompleted);
      setTodoList([...todoList, ...editedTodos]);
      setCompletedTodoList(completedTodos);
    }
  };

  const handleEditClicked = (todo: Todo) => {
    let editedTodoList = [...todoList];
    editedTodoList.map((value) => {
      if (value.id === todo.id) {
        value.body = todo.body;
        value.isEditing = !value.isEditing;
      }
      return value;
    });
    setTodoList(editedTodoList);
  };

  const addTodo = (todo: Todo) => {
    setTodoList([...todoList, todo]);
  };

  const toggleCompleted = (todo: Todo, list: Array<Todo>) => {
    list.map((value: Todo) => {
      if (value.id === todo.id) {
        value.isCompleted = !value.isCompleted;
      }
      return value;
    });
  };

  const isUnique = (body: string, list: Array<Todo>) => {
    let unique = true;
    list.forEach((value: Todo) => {
      if (body.trim() === value.body.trim()) {
        unique = false;
      }
    });
    return unique;
  };

  return (
    <div className="App">
      <h1 className="title">Things to be done!</h1>
      <AddForm submit={addTodo} todoList={todoList} isUnique={isUnique} />
      {todoList.length > 0 && (
        <TodoTable
          todoList={todoList}
          onDelete={handleDeleteClicked}
          onComplete={handleCompleteClicked}
          onEdit={handleEditClicked}
          isUnique={isUnique}
        />
      )}
      {completedTodoList.length > 0 && (
        <CompletedTable
          completedTodoList={completedTodoList}
          onDelete={handleDeleteClicked}
          onComplete={handleCompleteClicked}
        />
      )}
    </div>
  );
}

export default App;
