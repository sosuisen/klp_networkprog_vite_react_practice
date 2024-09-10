import './App.css'

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const todos: Todo[] = [
    { id: 1, title: "ネーム", completed: true },
    { id: 2, title: "下書き", completed: false },
  ];

  return (
    <div>
      <h1>ToDoリスト</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <span> - {todo.completed ? "完了" : "未完了"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
