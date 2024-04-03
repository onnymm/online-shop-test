import {
	ClockIcon,
	HeartIcon,
	MagnifyingGlassIcon,
	TagIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import SidebarContext from "../contexts/SidebarContext";
import SidebarButton from "./Templates/SidebarButton";
import ButtonSidebarNotifications from "./sidebar/ButonSidebarNotifications";
import ButtonSidebarHome from "./sidebar/ButtonSidebarHome";
import ButtonSidebarProducts from "./sidebar/ButtonSidebarProducts";
import ButtonSidebarPurchases from "./sidebar/ButtonSidebarPurchases";

const Sidebar = ({ display, show }) => {
	const { useSidebarActive, setSidebarActive } = useContext(SidebarContext);
	let showSidebar = "";

	if (useSidebarActive) {
		showSidebar = "active";
	}

	const collapseSidebar = () => {
		setSidebarActive(false);
	};

	return (
		<>
			<aside className={`sidebar ${showSidebar}`}>
				<img
					className="navbar-logo"
					src="https://i.ibb.co/3zHZGKR/logo-white.png"
					alt="Logo de La Casa Del Carpintero"
				/>
				<ButtonSidebarHome />
				<SidebarButton Icon={MagnifyingGlassIcon} legend={"Buscar"} />
				<ButtonSidebarProducts />
				<ButtonSidebarNotifications />
				<ButtonSidebarPurchases />
				<SidebarButton Icon={HeartIcon} legend={"Favoritos"} />
				<SidebarButton Icon={TagIcon} legend={"Ofertas"} />
				<SidebarButton Icon={ClockIcon} legend={"Historial"} />
			</aside>
			<button
				onClick={collapseSidebar}
				className={`modal-background ${showSidebar}`}
			></button>
			<button
				onClick={collapseSidebar}
				className={`close-btn ${showSidebar}`}
			>
				<div className="icon">{<XMarkIcon />}</div>
			</button>
		</>
	);
};

export default Sidebar;
