import React from "react";

function Input({ type, name, placeholder, required = false, onChange }) {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			required={required}
			onChange={onChange}
			className="border-2 p-2 rounded-md"
		/>
	);
}

export default Input;
