import { MdCheck, MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";
export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
TodoList.propTypes = {
  data: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onHandleDeleteTodo: PropTypes.func.isRequired,
  onHandleCheckedTodo: PropTypes.func.isRequired,
};
