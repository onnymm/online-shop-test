import { useState } from "react";
import ForwardBar from "../../ui_components/ForwardBar";
import ProductsMenu from "./ProductsMenu";

const ProductsList = () => {
	const [useData, setData] = useState([]);

	const fetchData = async () => {
		const response = await fetch(
			"https://prueba01-backend-72hiwrlbha-wl.a.run.app/productos/"
		);
		const products = await response.json();
		if (products) {
			setData(products);
		}
		console.log("Se ha extraído el JSON del backend");
	};

	if (useData.length === 0) {
		fetchData();
	}

	return (
		<>
			<ForwardBar />
			<ProductsMenu data={useData} />
		</>
	);
};

export default ProductsList;
