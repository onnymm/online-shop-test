import {
	Bars3Icon,
	BellAlertIcon,
	ChatBubbleLeftEllipsisIcon,
	ClockIcon,
	Cog6ToothIcon,
	HeartIcon,
	HomeIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	TagIcon,
} from "@heroicons/react/24/solid";
import style from "./Sidebar.module.css";
import OptionButton from "./components/OptionButton";

const Sidebar = ({ showSelf, useShowSelf }) => {
	console.log("Render de Sidebar");

	const show = () => {
		useShowSelf(!showSelf);
	};

	return (
		<aside className={`${style.sidebar} ${showSelf ? style.active : ""}`}>
			<div className={style.container}>
				<div className={style.menu}>
					<button className={style.sideButton} onClick={show}>
						<Bars3Icon />
					</button>
					<div className={style.img}>Logo</div>
				</div>
				<OptionButton Icon={HomeIcon} legend={"Inicio"} />
				<OptionButton Icon={MagnifyingGlassIcon} legend={"Buscar"} />
				<OptionButton Icon={BellAlertIcon} legend={"Notificaciones"} />
				<OptionButton Icon={ShoppingCartIcon} legend={"Mis compras"} />
				<OptionButton Icon={HeartIcon} legend={"Favoritos"} />
				<OptionButton Icon={TagIcon} legend={"Ofertas"} />
				<OptionButton Icon={ClockIcon} legend={"Historial"} />
			</div>

			<footer className={style.footer}>
				<OptionButton
					Icon={ChatBubbleLeftEllipsisIcon}
					legend={"Ayuda"}
				/>
				<OptionButton Icon={Cog6ToothIcon} legend={"Ajustes"} />
			</footer>
		</aside>
	);
};

export default Sidebar;
