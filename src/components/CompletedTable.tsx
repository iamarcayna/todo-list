import { Todo } from "../models/TodoModel";
import { TodoItem } from "./TodoItem";

export const CompletedTable = ({
  completedTodoList,
  onDelete,
  onComplete,
}: any) => {
  return (
    <div>
      <hr />
      <p className="completed-label">Completed</p>
      <ul className="todo-table">
        {completedTodoList.map((todo: Todo, index: number) => {
          return (
            <TodoItem
              todo={todo}
              key={index}
              onDelete={() => onDelete(todo, completedTodoList)}
              onComplete={() => onComplete(todo, completedTodoList)}
            />
          );
        })}
      </ul>
    </div>
  );
};
