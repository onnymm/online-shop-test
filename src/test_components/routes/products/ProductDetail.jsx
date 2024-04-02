import { useLoaderData } from "react-router-dom";
import ForwardBar from "../../ui_components/ForwardBar";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
	const data = useLoaderData();

	return (
		<>
			<ForwardBar />
			<div className="page-container">
				<div className="detail-header">
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
						{/* A arreglar */}
						{/* <div
							className={`item-availability ${itemAvailability}`}
						>
							<div className="item-availability-icon">
								{<CheckCircleIcon />}
							</div>
							<div>{availabilityLegend}</div>
						</div> */}
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
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
