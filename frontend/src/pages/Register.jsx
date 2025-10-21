import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { registerUser } from "../api/api";

function Register() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);

	const handleChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const {data} = await registerUser(formData)
			login(data.user, data.token)
			navigate("/home")
		} catch (error) {
			setError(error.response?.data?.message || "Registration Failed")
		}
	};

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
					<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
						<Input
							type="text"
							name="username"
							placeholder="Username"
							required={true}
							onChange={handleChange}
						/>
						<Input
							type="email"
							name="email"
							placeholder="Email"
							required={true}
							onChange={handleChange}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							required={true}
							onChange={handleChange}
						/>
						{error && <p className="text-red-500 text-sm">{error}</p>}
						<Button type="submit" text="Register"/>
						<p className="text-center">Already have an account?</p>
						<Button type="button" text="Login" onClick={() => navigate("/login")}/>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
