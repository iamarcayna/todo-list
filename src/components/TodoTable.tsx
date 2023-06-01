import { Todo } from "../models/TodoModel";
import { EditForm } from "./EditForm";
import { TodoItem } from "./TodoItem";

export const TodoTable = ({
  todoList,
  onDelete,
  onEdit,
  onComplete,
  isUnique,
}: any) => {
  return (
    <ul className="todo-table">
      {todoList.map((todo: Todo, index: number) => {
        return (
          <div key={index}>
            {!todo.isEditing ? (
              <TodoItem
                todo={todo}
                onComplete={() => onComplete(todo, todoList)}
                onDelete={() => onDelete(todo, todoList)}
                onEdit={() => onEdit(todo)}
              />
            ) : (
              <EditForm
                submit={onEdit}
                todoItem={todo}
                isUnique={isUnique}
                todoList={todoList}
              />
            )}
          </div>
        );
      })}
    </ul>
  );
};
