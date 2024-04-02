import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import SidebarButton from "../../ui_components/Templates/SidebarButton";

const ButtonSidebarPurchases = () => (
	<SidebarButton
		Icon={ShoppingCartIcon}
		legend={"Mis compras"}
		url={"/compras"}
	/>
);

export default ButtonSidebarPurchases;
