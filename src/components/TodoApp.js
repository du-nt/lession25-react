import React, { useState } from "react";

import Header from "./Header";
import Image from "./Image";
import Modal from "./Modal";
import TodoList from "./TodoList";

export default function () {
	const [todos, setTodos] = useState([]);
	const [openModal, setOpenModal] = useState(false);

	const addTodo = (todo) => setTodos([...todos, todo]);

	const handleToggle = (todo) => {
		const index = todos.indexOf(todo);
		const newTodos = [
			...todos.slice(0, index),
			{ ...todo, isDone: !todo.isDone },
			...todos.slice(index + 1),
		];
		setTodos(newTodos);
	};
	return (
		<div className="screen">
			<Header />

			{todos.length ? (
				<TodoList todos={todos} toggle={handleToggle} />
			) : (
				<Image />
			)}

			<div className="add" onClick={() => setOpenModal(true)}>
				+
			</div>

			{openModal && (
				<Modal addTodo={addTodo} closeModal={() => setOpenModal(false)} />
			)}
		</div>
	);
}
