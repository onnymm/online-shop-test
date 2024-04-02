import { NavLink, createBrowserRouter } from "react-router-dom";
import TestApp from "../TestApp";
import NotificationsPanel from "./routes/notifications/NotificationsPanel";
import ProductDetail from "./routes/products/ProductDetail";
import ProductsList from "./routes/products/ProductsList";
import { loader as productLoader } from "./routes/products/products";
import Purchases from "./routes/purchases/Purchases";

const router = createBrowserRouter([
	{
		path: "/",
		element: <TestApp />,
		children: [
			{
				index: true,
				element: <NavLink to={"/productos"}>Productos</NavLink>,
			},
			{
				path: "/productos",
				element: <ProductsList />,
			},
			{
				path: "/producto/:productId",
				element: <ProductDetail />,
				loader: productLoader,
			},
			{
				path: "/notificaciones",
				element: <NotificationsPanel />,
			},
			{
				path: "/compras",
				element: <Purchases />,
			},
		],
	},
]);

export default router;
