import { HomeIcon } from "@heroicons/react/24/solid";
import style from "./SidebarHeader.module.css";

const NavbarHeader = () => (
	<div className={style.header}>
		<button className={style.btn}>
			<HomeIcon />
		</button>

		<div className={style.logo}>Logo</div>
	</div>
);

export default NavbarHeader;
