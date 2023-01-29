import { useState } from "react";

export const ToDoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		setTodos([...todos, `Zadanie ${todos.length + 1}`]);
	};

	return (
		<div className="flex flex-col items-center gap-8">
			<button
				className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400"
				onClick={addTodo}
			>
				Dodaj zadanie
			</button>
			<ul className="flex flex-col gap-2">
				{todos.map((todo) => (
					<li className="tracking-wider">{todo}</li>
				))}
			</ul>
		</div>
	);
};
