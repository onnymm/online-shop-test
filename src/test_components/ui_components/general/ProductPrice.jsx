const ProductPrice = ({ price }) => (
	<h2 className="highlight">
		{price.toLocaleString("es-MX", {
			style: "currency",
			currency: "MXN",
		})}
	</h2>
);

export default ProductPrice;
