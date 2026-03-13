import { useState, useEffect } from "react";
export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTask = () => {
    const newTodos = todos.map((todo) => ({ ...todo }));
    newTodos.push({
      value: task,
      isCompleted: false,
      id: new Date().getTime(),
    });
    setTodos(newTodos);
  };

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      addTask();
    }
  };

  const handleCompleteBtn = (uniqueId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === uniqueId) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  const handleDeleteBtn = (uniqueId) => {
    const updatedTodo = todos.filter((todo) => todo.id != uniqueId);
    setTodos(updatedTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div>
        <input
          className="input-task"
          type="text"
          placeholder="Enter todos..."
          name="input-task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          onClick={(e) => {
            addTask();
          }}
          className="addTask-btn"
        >
          Add Task
        </button>
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <div className="todo-container" key={todo.id}>
              {todo.isCompleted ? (
                <p style={{ textDecoration: "line-through" }}>{todo.value}</p>
              ) : (
                <p>{todo.value}</p>
              )}

              <div className="btn">
                <span onClick={() => handleCompleteBtn(todo.id)}>✔️</span>
                <span onClick={() => handleDeleteBtn(todo.id)}>❌</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
