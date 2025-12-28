function SidebarButton({ icon, name, onClick }) {
	return (
		<button className="flex items-center gap-2 w-full p-2 my-2 cursor-pointer hover:bg-surface-hover hover:rounded-lg transition-all duration-200 ease-out" onClick={onClick}>
			{icon}
			<span>{name}</span>
		</button>
	);
}

export default SidebarButton;
