import { createContext, use, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(localStorage.getItem("token") || "");

	useEffect(() => {
		if (token) localStorage.setItem("token", token);
		else localStorage.removeItem("token");
	}, [token]);

	const login = (userData, jwtToken) => {
		setUser(userData);
		setToken(jwtToken);
	};

	const logout = () => {
		setUser(null);
		setToken("");
	};

	return (
		<AuthContext.Provider value={{ user, token, login, logout }}>
			{Children}
		</AuthContext.Provider>
	);
};
