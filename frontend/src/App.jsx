import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/authContext";
import Register from "./pages/Register";

const ProtectedRoute = ({ children }) => {
	const user = useContext(AuthContext);
	return user ? children : <Navigate to="/login" />;
};

function App() {
	return (
		<div className="font-poppins">
			<AuthProvider>
				<Router>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/home" element={<Home />} />
					</Routes>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
