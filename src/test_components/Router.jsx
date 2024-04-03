import { createBrowserRouter } from "react-router-dom";
import TestApp from "../TestApp";
import Home from "./routes/home/Home";
import NewPurchase from "./routes/new_purchase/NewPurchase";
import PaymentPage from "./routes/new_purchase/PaymentPage";
import { loader as purchaseLoader } from "./routes/new_purchase/purchase";
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
				element: <Home />,
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
			{
				path: "/comprar/:itemId/:qty",
				element: <NewPurchase />,
				loader: purchaseLoader,
			},
			{
				path: "/comprar/pago",
				element: <PaymentPage />,
			},
		],
	},
]);

export default router;
