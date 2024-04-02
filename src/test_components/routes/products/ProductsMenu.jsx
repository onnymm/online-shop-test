import ProductItem from "./ProductItem";
import ProductsLoading from "./ProductsLoading";

const ProductsMenu = ({ data }) => {
	if (data.length === 0) {
		return <ProductsLoading />;
	} else {
		return data
			.slice(0, 50)
			.map((product, index) => (
				<ProductItem
					key={product.codigo}
					code={product.codigo}
					description={product.descripcion}
					cost={product.ultimo_costo}
					available={product.estatus}
					place={index}
				/>
			));
	}
};

export default ProductsMenu;
