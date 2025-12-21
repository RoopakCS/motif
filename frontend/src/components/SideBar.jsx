import React from "react";
import { Music, Plus } from "lucide-react";
import SidebarButton from "./UI/SidebarButton";
import SidebarSongCard from "./UI/SidebarSongCard";

function SideBar({ progressions, onSelect }) {
	return (
		<div className="w-72 flex flex-col m-2 space-y-2 border border-black">
			<h1 className="text-4xl text-center font-bold">MOTIF</h1>

			<div className="">
				<SidebarButton icon={<Plus />} name={"Create"} />
				<SidebarButton icon={<Music />} name={"All Songs"} />
			</div>

			<div className="">
				<h2>All Songs</h2>
				{progressions.map((progression) => (
					<SidebarSongCard
						key={progression._id}
						name={progression.title}
						progression={progression}
						onSelect={onSelect}
					/>
				))}
			</div>
		</div>
	);
}

export default SideBar;
