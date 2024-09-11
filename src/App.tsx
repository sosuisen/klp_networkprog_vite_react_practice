import type { Todo } from "./types";
import TodoItem from "./TodoItem";

const todos: Todo[] = [
	{ id: 1, title: "ネーム", completed: true },
	{ id: 2, title: "下書き", completed: false },
];

const App = () => {
	return (
		<div>
			<h1>ToDoリスト</h1>
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default App;
