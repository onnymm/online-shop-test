import { BoltIcon } from "@heroicons/react/24/solid";
import style from "./ProductItem.module.css";

const ProductItem = ({ image, title, price }) => (
	<div className={style.item}>
		<img src={image} alt="Imagen" className={style.img} />
		<div className={style.container}>
			<div className={style.title}>{title}</div>
			<div className={style.price}>{price}</div>
			<div className={style.free}>
				<div className={style.icon}>
					<BoltIcon />
				</div>
				<div className={style.freeLegend}>Envío gratis</div>
			</div>
		</div>
	</div>
);

export default ProductItem;
