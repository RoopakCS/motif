import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(localStorage.getItem("token") || "");

	useEffect(() => {
		const storedUser = localStorage.getItem("user")
		if(storedUser) {
			setUser(JSON.parse(storedUser))
		}
	}, [])

	useEffect(() => {
		if (token) localStorage.setItem("token", token);
		else localStorage.removeItem("token");
	}, [token]);

	const login = (userData, jwtToken) => {
		setUser(userData);
		setToken(jwtToken);
		localStorage.setItem("user", JSON.stringify(userData));
	};

	const logout = () => {
		setUser(null);
		setToken("");
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ user, token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
