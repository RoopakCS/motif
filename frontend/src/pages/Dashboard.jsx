import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { getUserProgression } from "../api/api";
import Workspace from "../components/Workspace";

function Dashboard() {
	const [progressions, setProgressions] = useState([]);

	useEffect(() => {
		getUserProgression().then((res) => setProgressions( res.data));
	}, []);
  
  console.log(progressions)

	return (
		<div>
			<SideBar progressions={progressions}/>
			<Workspace />
		</div>
	);
}

export default Dashboard;
