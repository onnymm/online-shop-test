import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import SidebarButton from "../Templates/SidebarButton";

const ButtonSidebarProducts = () => (
	<SidebarButton
		Icon={ShoppingBagIcon}
		legend={"Productos"}
		url={"/productos"}
	/>
);

export default ButtonSidebarProducts;
