function SidebarButton({ icon, name }) {
	return (
		<button className="flex items-center gap-2 w-full border border-black p-2 curs">
			{icon}
			<span>{name}</span>
		</button>
	);
}

export default SidebarButton;
