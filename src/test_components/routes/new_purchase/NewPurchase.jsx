import {
	CurrencyDollarIcon,
	ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ForwardBar from "../../ui_components/ForwardBar";
import ButtonOption from "../../ui_components/general/ButtonOption";
import PageContainer from "../../ui_components/general/PageContainer";
import QuantityWidget from "../../ui_components/general/QuantityWidget";

const NewPurchase = () => {
	const [data, qty] = useLoaderData();
	// const item = "3";
	// const qty = 6;
	const [useQty, setQty] = useState(qty);
	console.log(data);
	return (
		<>
			<ForwardBar />
			<PageContainer>
				<div className="v-section vertical-display v-align">
					Estás comprando
					<h1 className="highlight">{data.descripcion}</h1>
					<img
						className="img-medium"
						src="https://i.ibb.co/8PPtSxc/no-image.jpg"
						alt="Imagen del producto"
					/>
					Confirma la cantidad
					<div className="horizontal-display">
						<QuantityWidget
							quant={useQty}
							min={1}
							max={10}
							setValue={setQty}
						/>
						<ButtonOption
							Icon={CurrencyDollarIcon}
							text={"Pagar ahora"}
							type={"main"}
							url={"/comprar/pago"}
						/>
					</div>
				</div>
				<div className="v-section vertical-display v-align">
					O si lo deseas, puedes guardarlo para más tarde
					<div className="horizontal-display">
						<ButtonOption
							Icon={ShoppingCartIcon}
							text={"Agregar al carrito"}
							type={"secondary"}
						/>
					</div>
					<h6 className="text-center">
						Al continuar, aceptas nuestra política de privacidad y
						nuestros términos y condiciones. Esto incluye el uso de
						cookies para mejorar tu experiencia de navegación en
						nuestro sitio web. Puedes revisar nuestra política de
						privacidad y términos y condiciones para obtener más
						información sobre cómo protegemos tus datos personales y
						tus derechos como usuario.
					</h6>
				</div>
			</PageContainer>
		</>
	);
};

export default NewPurchase;
