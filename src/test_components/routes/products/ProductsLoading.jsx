import { ArrowPathIcon } from "@heroicons/react/24/solid";

const ProductsLoading = () => (
	<main className="itemslist-loading">
		<div className="icon">{<ArrowPathIcon />}</div>
		<div>Cargando productos</div>
	</main>
);

export default ProductsLoading;
