import React from "react";

export default function ({ todo, toggle }) {
	return (
		<div className="todoItem-done" onClick={() => toggle(todo)}>
			{todo.title}
		</div>
	);
}
