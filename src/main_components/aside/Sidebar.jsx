import {
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

const Sidebar = ({ showSelf }) => {
	console.log("Render de Sidebar");

	// let show = " active";

	// if (showSelf) {
	// 	show = " active";
	// 	console.log("Cambio de sidebar a mostrar");
	// } else {
	// 	show = "";
	// 	console.log("Cambio de sidebar a ocultar");
	// }

	return (
		<aside className={`${style.sidebar} ${showSelf ? style.active : ""}`}>
			<div className={style.container}>
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
