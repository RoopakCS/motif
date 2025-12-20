import React from "react";
import { Music, Plus } from "lucide-react";

function SideBar() {
	return (
		<div>
			<h1 className="text-2xl">Motif</h1>
			<span>
				<Plus />
				<p>Create</p>
			</span>
			<Music />
			<p>All Songs</p>
		</div>
	);
}

export default SideBar;
