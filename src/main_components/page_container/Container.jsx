import DATA from "../data";
import ProductItem from "../product_item/ProductItem";
import style from "./Container.module.css";

const Container = ({ sidebarShow }) => (
	<main
		className={`${style.container}${sidebarShow ? ` ${style.sidebarActive}` : ""}`}
	>
		{DATA.map((item, index) => (
			<ProductItem key={index} {...item} />
		))}
	</main>
);

export default Container;
