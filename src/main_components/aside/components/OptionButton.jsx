import style from "../Sidebar.module.css";

const OptionButton = ({ Icon, legend }) => (
	<div>
		<button className={style.btn}>
			<div className={style.btnContainer}>
				<div className={style.icon}>
					<Icon />
				</div>
				<div className={style.btnLegend}>{legend}</div>
			</div>
		</button>
	</div>
);

export default OptionButton;
