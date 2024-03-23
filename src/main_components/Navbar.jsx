import style from "./Navbar.module.css";

const Navbar = () => (
	<nav className={style.navbar}>
		{/* MENU */}
		<div className={style.menu}>
			<button className={style.navButton}>Menu</button>
			<div className={style.logo}>Logo</div>
		</div>

		{/* BUSCADOR */}
		<input type="text" id="main-searcher" className={style.search} />

		{/* OPCIONES */}
		<ul className={style.options}>
			<li>
				<button className={style.navButton}>Cart</button>
			</li>
			<li>
				<button className={style.navButton}>Nots</button>
			</li>
			<li>
				<button className={style.navButton}>User</button>
			</li>
		</ul>
	</nav>
);

export default Navbar;
