import React from "react";

export default function ({ todo, toggle }) {
	return (
		<div className="todoItem" onClick={() => toggle(todo)}>
			{todo.title}
		</div>
	);
}
