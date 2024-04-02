import { BellIcon } from "@heroicons/react/24/solid";
import SidebarButton from "../Templates/SidebarButton";

const ButtonSidebarNotifications = () => (
	<SidebarButton
		Icon={BellIcon}
		legend={"Notificaciones"}
		url={"/notificaciones"}
	/>
);

export default ButtonSidebarNotifications;
