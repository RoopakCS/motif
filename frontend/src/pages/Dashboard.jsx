import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { getUserProgressions } from "../api/api";
import Workspace from "../components/Workspace";
import DashboardLayout from "../layouts/DashboardLayout";
import { CloudCog, Menu } from "lucide-react";

function Dashboard() {
	const [progressions, setProgressions] = useState([]);
	const [selected, setSelected] = useState(null);
	const [sidebarOpen, setSidebarOpen] = useState(false);

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
			<div className="relative md:hidden flex items-center text-primary py-6 px-2">
				<Menu onClick={() => setSidebarOpen(true)} />
				<h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold text-center">
					MOTIF
				</h1>
			</div>

			<SideBar
				progressions={progressions}
				onSelect={(p) => {
					setSelected(p);
					setSidebarOpen(false);
				}}
				onClick={() => {
					handleClick;
					setSidebarOpen(false);
				}}
				isOpen={sidebarOpen}
				onClose={() => setSidebarOpen(false)}
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
