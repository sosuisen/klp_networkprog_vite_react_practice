import React from 'react';

// Todo 型の定義
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// TodoItem コンポーネントのプロパティ型定義
type TodoItemProps = {
  todo: Todo;
};

// Todo項目を表示するコンポーネント
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <span> - {todo.completed ? "完了" : "未完了"}</span>
    </li>
  );
};

export default TodoItem;
