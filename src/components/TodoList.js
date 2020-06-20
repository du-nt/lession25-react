import React from "react";

import TodoItem from "./TodoItem";
import DoneTodoItem from "./DoneTodoItem";

export default function ({ todos, toggle }) {
	return (
		<div>
			<div className="content">
				<div className="upcoming">upcoming</div>
				<div className="sc">
					{todos.map(
						(todo, index) =>
							!todo.isDone && (
								<TodoItem key={index} todo={todo} toggle={toggle} />
							)
					)}
				</div>
			</div>

			<div className="content-2">
				<div className="upcoming">Finished</div>
				<div className="sc">
					{todos.map(
						(todo, index) =>
							todo.isDone && (
								<DoneTodoItem key={index} todo={todo} toggle={toggle} />
							)
					)}
				</div>
			</div>
		</div>
	);
}
