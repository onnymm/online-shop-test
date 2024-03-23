import style from "./SidebarOption.module.css";

const SidebarOption = ({ icon: Icon, legend }) => (
	<button className={style.sidebarOption}>
		<div className={style.iconBtn}>
			<Icon className={style.icon} />
		</div>
		<div className={style.title}>{legend}</div>
	</button>
);

export default SidebarOption;
