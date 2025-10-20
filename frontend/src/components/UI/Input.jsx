import React from "react";

function Input({ type, name, placeholder, required = false }) {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			required={required}
			className="border-2 p-2 rounded-md"
		/>
	);
}

export default Input;
