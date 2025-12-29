import React, { useContext, useState } from "react";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../api/api";
import {Link} from "react-router-dom"

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await loginUser(formData);
			login(data.user, data.token);
			navigate("/dashboard");
		} catch (error) {
			setError(error.response?.data?.message);
		}
	};

	return (
		<div className="h-dvh flex">
			<div className="hidden md:flex md:flex-1 justify-center items-center">
				<img
					src="images/PNG/music file2-01.png"
					alt=""
					className="hidden md:block"
				/>
			</div>

			<div className="flex-1 flex flex-col justify-center items-center p-6 md:p-10">
				<div className="w-full max-w-sm">
					<h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-primary-text">
						Welcome Back!
					</h1>
					<h2 className="text-xl md:text-2xl font-bold mb-6 text-primary-text">Login</h2>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col space-y-4"
					>
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
						{error && (
							<p className="text-red-500 text-sm text-center">
								{error}
							</p>
						)}

						<Button type="submit" text="Login" />
						<Link className="text-center underline text-secondary-text" to={"/register"}>Don't have an account?</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
