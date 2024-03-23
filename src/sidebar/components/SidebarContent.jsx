import {
	BellIcon,
	HeartIcon,
	HomeIcon,
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	TagIcon,
} from "@heroicons/react/24/solid";
import SidebarOption from "./SidebarOption";

const SidebarContent = () => (
	<div>
		<SidebarOption icon={HomeIcon} legend={"Inicio"} />
		<SidebarOption icon={MagnifyingGlassIcon} legend={"Buscar"} />
		<SidebarOption icon={BellIcon} legend={"Notificaciones"} />
		<SidebarOption icon={ShoppingBagIcon} legend={"Mis compras"} />
		<SidebarOption icon={HeartIcon} legend={"Mis favoritos"} />
		<SidebarOption icon={TagIcon} legend={"Ofertas"} />
	</div>
);

export default SidebarContent;
