import {
	BellAlertIcon,
	ShoppingCartIcon,
	UserIcon,
} from "@heroicons/react/24/solid";

import style from "./Navbar.module.css";

const Navbar = ({ setBarShow, useBarShow }) => {
	console.log("Render del Navbar");

	// const sidebarHandle = () => {
	// 	console.log("Menu");
	// 	useBarShow(!setBarShow);
	// };

	return (
		<nav
			className={`${style.navbar} ${setBarShow ? style.navbarActive : ""}`}
		>
			{/* MENU */}
			<div className={style.menu}>
				{/* <button className={style.navButton} onClick={sidebarHandle}>
					Menu
				</button> */}
				<div className={style.logo}>Logo</div>
			</div>

			{/* BUSCADOR */}
			<input
				type="text"
				placeholder="Buscar"
				id="main-searcher"
				className={style.search}
			/>

			{/* OPCIONES */}
			<ul className={style.options}>
				<li>
					<button className={`${style.navButton} btn`}>
						<ShoppingCartIcon />
					</button>
				</li>
				<li>
					<button className={`${style.navButton} btn`}>
						<BellAlertIcon />
					</button>
				</li>
				<li>
					<button className={`${style.navButton} btn`}>
						<UserIcon />
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
