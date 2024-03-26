import DATA from "../data";
import ProductItem from "../product_item/ProductItem";
import style from "./Container.module.css";

const Container = ({ sidebarShow }) => (
	<main className={style.main}>
		<div
			className={`${style.container}${sidebarShow ? ` ${style.sidebarActive}` : ""}`}
		>
			{DATA.map((item, index) => (
				<ProductItem key={index} {...item} />
			))}
		</div>
	</main>
);

export default Container;
