import { Bars3Icon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import SidebarContext from "../contexts/SidebarContext";
import NavbarButton from "./Templates/NavbarButton";

const MenuNavbarButton = () => {
	const { setSidebarActive } = useContext(SidebarContext);

	return (
		<NavbarButton Icon={Bars3Icon} func={setSidebarActive} value={true} />
	);
};

export default MenuNavbarButton;
