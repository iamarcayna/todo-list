import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { TbCheckbox } from "react-icons/tb";

export const TodoItem = ({ todo, onDelete, onEdit, onComplete }: any) => {
  return (
    <div className={`todo-item ${todo.isCompleted && "completed"}`}>
      <div className="todo-title" onClick={onComplete}>
        <button className={`todo-finished ${todo.isCompleted && "completed"}`}>
          {todo.isCompleted ? <TbCheckbox /> : <RiCheckboxBlankLine />}
        </button>
        <span>{todo.body}</span>
      </div>
      <div className="todo-actions">
        {!todo.isCompleted && (
          <button className="todo-edit" onClick={onEdit}>
            <FaEdit />
          </button>
        )}
        {todo.isCompleted && (
          <button className="todo-delete" onClick={onDelete}>
            <MdDelete />
          </button>
        )}
      </div>
    </div>
  );
};
