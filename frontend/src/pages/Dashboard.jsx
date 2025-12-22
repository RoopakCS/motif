import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { getUserProgressions } from "../api/api";
import Workspace from "../components/Workspace";
import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
	const [progressions, setProgressions] = useState([]);
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		getUserProgressions().then((res) => setProgressions(res.data));
	}, []);

	const handleClick = () => {
		setSelected({
			title: "Unknown Song",
			artistName: "Unknown",
			timeSignature: "4/4",
			scaleKey: "C Major",
			chords: [],
			isNew: true,
		});
	};

	return (
		<DashboardLayout>
			<SideBar
				progressions={progressions}
				onSelect={setSelected}
				onClick={handleClick}
			/>
			<Workspace selectedProgression={selected} />
		</DashboardLayout>
	);
}

export default Dashboard;
