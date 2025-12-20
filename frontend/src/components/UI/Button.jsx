import React from "react";

function Button({ type, text, onClick }) {
	return (
		<button
			type={type}
			onClick={onClick}
			className="border-2 w-full rounded-md cursor-pointer p-2 bg-black text-white"
		>
			{text}
		</button>
	);
}

export default Button;
