function SidebarSongCard({ onSelect, progression }) {
	return (
		<button
			className="w-full p-2 my-1 cursor-pointer text-left hover:bg-surface-hover"
			onClick={() => onSelect({...progression, isNew: false})}
		>
			{progression.title}
		</button>
	);
}

export default SidebarSongCard;
