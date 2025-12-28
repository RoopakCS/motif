import { Menu } from "lucide-react";

function MobileNavbar({onOpen}) {
	<div className="md:hidden flex text-primary py-6 px-2">
		<Menu onClick={onOpen} className="cursor-pointer" />
	</div>;
}

export default MobileNavbar;
