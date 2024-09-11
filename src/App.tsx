type Todo = {
	id: number;
	title: string;
	completed: boolean;
};

const todos: Todo[] = [
	{ id: 1, title: "ネーム", completed: true },
	{ id: 2, title: "下書き", completed: false },
	{ id: 3, title: "ペン入れ", completed: false },
	{ id: 4, title: "トーン貼り", completed: false },
	{ id: 5, title: "仕上げ", completed: false },
];

const App = () => {
	return (
		<div>
			<h1>ToDoリスト</h1>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
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
