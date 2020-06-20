import React, { useState } from "react";

export default function ({ closeModal, addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = () => {
		if (value.trim() !== "") {
			const todo = {
				title: value.trim(),
				isDone: false,
			};
			addTodo(todo);
			closeModal();
		}
	};
	return (
		<div className="modal">
			<div className="modalcontent">
				<input value={value} onChange={(e) => setValue(e.target.value)} />

				<div className="actionbtn">
					<div className="addbtn2" onClick={handleSubmit}>
						add
					</div>
					<div className="addbtn" onClick={closeModal}>
						cancel
					</div>
				</div>
			</div>
		</div>
	);
}
