import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { getUserProgression } from "../api/api";
import Workspace from "../components/Workspace";
import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
	const [progressions, setProgressions] = useState([]);
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		getUserProgression().then((res) => setProgressions(res.data));
	}, []);

	return (
		<DashboardLayout>
			<SideBar progressions={progressions} onSelect={setSelected}/>
			<Workspace />
		</DashboardLayout>
	);
}

export default Dashboard;
