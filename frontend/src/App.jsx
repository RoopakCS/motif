import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Register from "./pages/Register";

const ProtectedRoute = ({ children }) => {
	const user = useContext(AuthContext);
	return user ? children : <Navigate to="/login" />;
};

function App() {
	return (
		<div className="font-poppins">
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
