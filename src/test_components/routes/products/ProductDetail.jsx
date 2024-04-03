import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ForwardBar from "../../ui_components/ForwardBar";
import ButtonOption from "../../ui_components/general/ButtonOption";
import PageContainer from "../../ui_components/general/PageContainer";
import ProductPrice from "../../ui_components/general/ProductPrice";
import QuantityWidget from "../../ui_components/general/QuantityWidget";
import TextContent from "../../ui_components/general/TextContent";

const ProductDetail = () => {
	const data = useLoaderData();
	const [useValue, setValue] = useState(1);

	return (
		<>
			<ForwardBar />
			<PageContainer>
				<div className="horizontal-display">
					<img
						className="img-medium"
						src="https://i.ibb.co/8PPtSxc/no-image.jpg"
						alt="Imagen del producto"
					/>
					<TextContent>
						<h1>{data.descripcion}</h1>
						<ProductPrice price={data.ultimo_costo} />
						<div className="horizontal-display v-tight-margin">
							<QuantityWidget
								quant={useValue}
								setValue={setValue}
								min={1}
								max={10}
							/>

							<ButtonOption
								Icon={ShoppingBagIcon}
								text={"Comprar"}
								type={"main"}
								url={`/comprar/${data.codigo}/${useValue}`}
							/>
							<ButtonOption
								Icon={ShoppingCartIcon}
								text={"Agregar al carrito"}
								type={"secondary"}
							/>
						</div>
					</TextContent>
				</div>
				<div className="vertical-display v-normal-margin">
					<TextContent>
						Pensado para los profesionales más exigentes y los
						aficionados por igual, este producto de se destaca por
						su versatilidad y calidad insuperable. Su diseño
						innovador y su fabricación con los mejores materiales lo
						convierten en una opción ideal para una amplia gama de
						aplicaciones, desde pequeñas reparaciones hasta
						proyectos de construcción a gran escala.
						<br />
						<br />
						Con una reputación bien merecida como líder en su
						categoría, este artículo ofrece un equilibrio perfecto
						entre rendimiento y durabilidad. Desde su fácil manejo
						hasta su capacidad para resistir condiciones adversas,
						cada aspecto de este producto ha sido cuidadosamente
						diseñado para superar las expectativas y brindar
						resultados excepcionales en cada tarea.
					</TextContent>
				</div>
			</PageContainer>
		</>
	);
};

export default ProductDetail;

/* <div className="detail-header">
					<img
						className="detail-img"
						src="https://i.ibb.co/8PPtSxc/no-image.jpg"
						alt="Imagen del producto"
					/>
					<div className="detail-info">
						<div className="detail-info-top">
							<div className="item-key">{data.codigo}</div>
							<div className="detail-price">
								{(
									data.ultimo_costo *
									1.16 *
									1.5
								).toLocaleString("es-MX", {
									style: "currency",
									currency: "MXN",
								})}
							</div>
						</div>
						<h1>{data.descripcion}</h1>
					</div>
				</div>
				<div className="detail-description">
					Pensado para los profesionales más exigentes y los
					aficionados por igual, este producto de se destaca por su
					versatilidad y calidad insuperable. Su diseño innovador y su
					fabricación con los mejores materiales lo convierten en una
					opción ideal para una amplia gama de aplicaciones, desde
					pequeñas reparaciones hasta proyectos de construcción a gran
					escala.
					<br />
					<br />
					Con una reputación bien merecida como líder en su categoría,
					este artículo ofrece un equilibrio perfecto entre
					rendimiento y durabilidad. Desde su fácil manejo hasta su
					capacidad para resistir condiciones adversas, cada aspecto
					de este producto ha sido cuidadosamente diseñado para
					superar las expectativas y brindar resultados excepcionales
					en cada tarea.
				</div> */
