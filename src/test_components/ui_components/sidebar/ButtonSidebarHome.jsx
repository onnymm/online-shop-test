import { HomeIcon } from "@heroicons/react/24/solid";
import SidebarButton from "../Templates/SidebarButton";

const ButtonSidebarHome = () => {
	return <SidebarButton Icon={HomeIcon} legend={"Inicio"} url={"/"} />;
};

export default ButtonSidebarHome;
