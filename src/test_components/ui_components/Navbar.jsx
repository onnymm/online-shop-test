import {
	BellIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	UserIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import MenuNavbarButton from "./MenuNavbarButton";
import NavbarButton from "./Templates/NavbarButton";

const Navbar = ({ showSidebar }) => {
	return (
		<nav className="navbar">
			<div className="navbar-start">
				{/* <NavbarButton
					Icon={Bars3Icon}
					func={showSidebar}
					value={true}
				/> */}
				<MenuNavbarButton />
				<NavLink to="/">
					<img
						className="navbar-logo"
						src="https://i.ibb.co/3zHZGKR/logo-white.png"
						// src="https://raw.githubusercontent.com/ecostichp/prueba_iacele_frontend/main/app/public/brand/Logo2021.png"
						alt="Logo de La Casa Del Carpintero"
					/>
				</NavLink>
			</div>
			<div className="navbar-end">
				<NavbarButton Icon={MagnifyingGlassIcon} />
				<NavbarButton Icon={ShoppingCartIcon} />
				<NavbarButton Icon={BellIcon} />
				<NavbarButton Icon={UserIcon} />
			</div>
		</nav>
	);
};

export default Navbar;
