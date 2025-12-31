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
	const {user} = useContext(AuthContext);
	// console.log("ProtectedRoute user:", context);

	return user ? children : <Navigate to="/login" replace />;
};

function App() {
	return (
		<div className="md:font-poppins h-dvh bg-bg">
			<AuthProvider>
				<Router>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />

						<Route
							path="/dashboard"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>

						<Route
							path="*"
							element={<Navigate to="/dashboard" />}
						/>
					</Routes>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
