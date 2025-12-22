import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";

const ProtectedRoute = ({ children }) => {
	const user = useContext(AuthContext);
	return user ? children : <Navigate to="/login" />;
};

function App() {
	return (
		<div className="font-poppins bg-bg">
			<AuthProvider>
				<Router>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
