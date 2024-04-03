export async function loader({ params }) {
	const response = await fetch(
		`https://prueba01-backend-72hiwrlbha-wl.a.run.app/productos/codigo/${params.itemId}`
	);
	const data = await response.json();
	console.log(data);
	const qty = params.qty;
	return [data, qty];
}
