import { Todo } from "../models/TodoModel";
import { TodoItem } from "./TodoItem";

export const CompletedTable = ({
  completedTodoList,
  onDelete,
  onComplete,
}: any) => {
  return (
    <ul className="todo-table">
      {completedTodoList.map((todo: Todo, index: number) => {
        return (
          <li key={index}>
            <TodoItem
              todo={todo}
              onDelete={() => onDelete(todo, completedTodoList)}
              onComplete={() => onComplete(todo, completedTodoList)}
            />
          </li>
        );
      })}
    </ul>
  );
};
