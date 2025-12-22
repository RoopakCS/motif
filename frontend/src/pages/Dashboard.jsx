import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { getUserProgressions } from "../api/api";
import Workspace from "../components/Workspace";
import DashboardLayout from "../layouts/DashboardLayout";
import { CloudCog } from "lucide-react";

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

	const handleSaved = (saved) => {
		setProgressions((prev) => {
			const exists = prev.find((p) => p._id === saved._id);

			if (exists) {
				return prev.map((p) => (p._id === saved._id ? saved : p));
			}

			return [saved, ...prev];
		});

		setSelected(saved);
	};

	const handleDeleted = (id) => {
		setProgressions((prev) => prev.filter((p) => p._id !== id));
		setSelected(null);
	};

	return (
		<DashboardLayout>
			<SideBar
				progressions={progressions}
				onSelect={setSelected}
				onClick={handleClick}
			/>
			<Workspace
				selectedProgression={selected}
				onSaved={handleSaved}
				onDeleted={handleDeleted}
			/>
		</DashboardLayout>
	);
}

export default Dashboard;
