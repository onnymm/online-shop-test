import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const ProductItem = ({ code, description, place, cost, available }) => {
	let itemAvailability = "unavailable";
	let availabilityLegend = "Agotado";

	if (available) {
		itemAvailability = "available";
		availabilityLegend = "Disponible";
	}

	return (
		<NavLink to={`/producto/${code}`}>
			<div className="list-item">
				<img
					className="item-img"
					src="https://i.ibb.co/8PPtSxc/no-image.jpg"
					alt="No hay imagen disponible"
				/>
				<div className="item-details">
					<div className="item-details-header">
						<div className="item-key">#{code}</div>
						<div
							className={`item-availability ${itemAvailability}`}
						>
							<div className="item-availability-icon">
								{<CheckCircleIcon />}
							</div>
							<div>{availabilityLegend}</div>
						</div>
					</div>
					<div className="item-title">{description}</div>
					<div className="item-price">
						{(cost * 1.5 * 1.16).toLocaleString("es-MX", {
							style: "currency",
							currency: "MXN",
						})}
					</div>
				</div>
			</div>
		</NavLink>
	);
};

export default ProductItem;
