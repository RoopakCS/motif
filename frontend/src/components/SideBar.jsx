import React from "react";
import { Music, Plus } from "lucide-react";
import SidebarButton from "./UI/SidebarButton";
import SidebarSongCard from "./UI/SidebarSongCard";

function SideBar({ progressions }) {
	return (
		<div className="w-72 flex flex-col m-2 space-y-2 border border-black">
			<h1 className="text-4xl text-center font-bold">MOTIF</h1>

			<div className="space-y-2">
				<SidebarButton icon={<Plus />} name={"Create"} />
				<SidebarButton icon={<Music />} name={"All Songs"} />
			</div>

			<div>{progressions}</div>

			<div className="">
				{progressions.map((progression) => (
					<SidebarSongCard name={progression.title} />
				))}
			</div>
		</div>
	);
}

export default SideBar;
