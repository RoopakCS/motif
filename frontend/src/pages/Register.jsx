import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

function Register() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
	// const { login } = useContext(AuthContext);

	const handleChange = () => {};
	const handleSubmit = () => {};

	return (
		<div className="min-h-screen flex border-2">
			<div className="flex-1 flex justify-center items-center">
				<img
					src="images/PNG/music file2-01.png"
					alt=""
					// className="max-w-md w-3/4 object-contain"
				/>
			</div>

			<div className="flex-1 flex flex-col justify-center items-center p-10">
				<div className="w-full max-w-sm">
					<h1 className="text-4xl font-extrabold mb-2">Welcome!</h1>
					<h2 className="text-2xl font-bold mb-6">Sign Up</h2>
					<form action="" className="flex flex-col space-y-4">
						<Input
							type="text"
							name="username"
							placeholder="Username"
							required={true}
						/>
						<Input
							type="email"
							name="email"
							placeholder="Email"
							required={true}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							required={true}
						/>
						<Button type="submit" text="Register"/>
						<p className="text-center">Don't have an account?</p>
						<Button type="submit" text="Login"/>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
