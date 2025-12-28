function SidebarSongCard({ onSelect, progression }) {
	return (
		<button
			className="w-full p-2 my-1 cursor-pointer text-left hover:bg-surface-hover hover:rounded-lg transition-all duration-200 ease-out"
			onClick={() => onSelect({...progression, isNew: false})}
		>
			{progression.title}
		</button>
	);
}

export default SidebarSongCard;
