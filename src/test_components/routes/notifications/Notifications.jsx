import {
	LockClosedIcon,
	ShoppingCartIcon,
	TagIcon,
} from "@heroicons/react/24/solid";

const data = [
	{
		image: ShoppingCartIcon,
		title: "Continúa con tu compra",
		description:
			"Olvidaste terminar tu compra, ¿Deseas revisar tu carrito de compras?",
		ago: "Hace 12m",
	},
	{
		image: TagIcon,
		title: "Descuentos por tiempo limitado",
		description: "¡No dejes pasar estas increíbles promociones!",
		ago: "Ayer",
	},
	{
		image: LockClosedIcon,
		title: "Termina de verificar tu cuenta",
		description:
			"Ya casi lo tienes, sólo necesitas completar un par de datos más",
		ago: "Hace 2d",
	},
];

export default data;
