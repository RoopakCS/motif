function SidebarSongCard({ name, onSelect, progression }) {
	return (
		<button
			className="border boder-black w-full p-2 my-1 cursor-pointer text-left"
			onClick={() => onSelect(progression)}
		>
			{name}
		</button>
	);
}

export default SidebarSongCard;
