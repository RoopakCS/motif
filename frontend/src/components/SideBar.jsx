import React from "react";
import { Plus, Menu, X } from "lucide-react";
import SidebarButton from "./UI/SidebarButton";
import SidebarSongCard from "./UI/SidebarSongCard";

function SideBar({ progressions, onSelect, onClick, isOpen, onClose }) {
	return (
		<>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/40 z-40 md:hidden"
					onClick={onClose}
				/>
			)}
			<div
				className={`fixed md:static inset-y-0 left-0 z-50 w-72 bg-surface text-primary-text transform transition-transform duration-300 ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} md:translate-x-0 flex flex-col`}
			>
				<div className="flex items-center justify-between p-4">
					<h1 className="text-4xl font-bold">MOTIF</h1>
					{/* <Menu className="md:hidden cursor-pointer" onClick={onClose} /> */}
					<button className="md:hidden cursor-pointer" onClick={onclose}>
						<X />
					</button>
				</div>

				<div className="">
					<SidebarButton
						icon={<Plus />}
						name={"Create"}
						onClick={onClick}
					/>
					{/* <SidebarButton icon={<Music />} name={"Favourites"} onClick={onClick}/> */}
				</div>

				<h2 className="font-medium p-4">All Songs</h2>
				<div className="flex-1 overflow-y-auto">
					{progressions.map((progression) => (
						<SidebarSongCard
							key={progression._id}
							progression={progression}
							onSelect={onSelect}
						/>
					))}
				</div>

				<div className="p-4 border-t border-white/10">
					<button className="text-sm opacity-70 hover:opacity-100 cursor-pointer">Logout</button>
				</div>
			</div>
		</>
	);
}

export default SideBar;
