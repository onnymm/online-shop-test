import { NavLink } from "react-router-dom";

const ButtonOption = ({ Icon, text, type, func, value, url }) => {
	// Uso de clases dinámicas
	let componentType = "secondary-btn";
	if (type === "main") {
		componentType = "main-btn";
	} else if (type === "secondary") {
		componentType = "secondary-btn";
	}

	// Si se ha proporcionado una función como argumento, aquí se ejecuta
	const activate = () => {
		if (func) {
			func(value);
		}
	};

	// Declaración del componente a retornar
	let Component = null;

	// Ícono del botón en caso de tenerlo
	const IconContainer = () => {
		if (Icon) {
			return (
				<div className="int-opt-btn-icon-container">
					<div>
						<Icon />
					</div>
				</div>
			);
		}
	};
	// Estructura del componente
	const Button = () => (
		<button className={`opt-btn ${componentType}`} onClick={activate}>
			<IconContainer />
			{text}
		</button>
	);

	// Se envuelve el componente en un NavLink si se proporcionó URL como argumento
	if (url) {
		Component = (
			<NavLink to={url}>
				<Button />
			</NavLink>
		);
	} else {
		Component = <Button />;
	}

	// Retorno del componente
	return Component;
};

export default ButtonOption;
