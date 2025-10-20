import React from "react";

function Button({ type, text }) {
	return (
		<button
			type={type}
			className="border-2 w-full rounded-md cursor-pointer p-2"
		>
			{text}
		</button>
	);
}

export default Button;
