import React from "react";
import { Music, Plus } from "lucide-react";
import SidebarButton from "./UI/SidebarButton";
import SidebarSongCard from "./UI/SidebarSongCard";

function SideBar({ progressions, onSelect, onClick }) {
	return (
		<div className="w-72 flex flex-col bg-surface text-primary-text">
			<h1 className="text-4xl p-4 font-bold">MOTIF</h1>

			<div className="">
				<SidebarButton icon={<Plus />} name={"Create"} onClick={onClick}/>
				{/* <SidebarButton icon={<Music />} name={"Favourites"} onClick={onClick}/> */}
			</div>

				<h2 className="font-medium p-4">All Songs</h2>
			<div className="">
				{progressions.map((progression) => (
					<SidebarSongCard
						key={progression._id}
						progression={progression}
						onSelect={onSelect}
					/>
				))}
			</div>
		</div>
	);
}

export default SideBar;
