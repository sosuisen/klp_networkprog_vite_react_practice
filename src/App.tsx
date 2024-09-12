import { useState } from "react";

type Todo = {
	id: number;
	title: string;
	completed: boolean;
};

const initialTodos: Todo[] = [
	{ id: 1, title: "ネーム", completed: true },
	{ id: 2, title: "下書き", completed: false },
	{ id: 3, title: "ペン入れ", completed: false },
	{ id: 4, title: "トーン貼り", completed: false },
	{ id: 5, title: "仕上げ", completed: false },
];

const App = () => {
	// useStateでtodosの状態を管理
	const [todos, setTodos] = useState<Todo[]>(initialTodos);

	// タスクの完了/未完了をトグルする関数
	const toggleTodo = (id: number) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	return (
		<div>
			<h1>ToDoリスト</h1>
			<ul>
				{todos.map((todo) => (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<li
						key={todo.id}
						onClick={() => toggleTodo(todo.id)}
						style={{ cursor: "pointer" }}
					>
						<span
							style={{
								textDecoration: todo.completed ? "line-through" : "none",
							}}
						>
							{todo.title}
						</span>
						<span> - {todo.completed ? "完了" : "未完了"}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
