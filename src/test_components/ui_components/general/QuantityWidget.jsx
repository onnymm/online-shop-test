const QuantityWidget = ({ quant, min, max, unit, setValue }) => {
	// Habilitación de los botones
	let minusActive = "unactive";
	let plusActive = "unactive";

	if (quant > min) {
		minusActive = "main";
	}

	if (quant < max) {
		plusActive = "main";
	}

	// Corrección de la cantidad si se sale del rango mínimo o máximo
	if (quant < min) {
		setValue(min);
	} else if (quant > max) {
		setValue(max);
	}

	// Cambio del valor de forma manual
	const change = (e) => {
		const value = parseInt(e.target.value);
		setValue(value);
	};

	// Llamada al cambio del valor al presionar Enter
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			change(e);
		}
	};

	// Incremento del valor
	const increment = () => {
		const value = parseInt(quant);
		if (value + 1 <= max) {
			setValue(value + 1);
		}
	};

	// Decremento del valor
	const decrement = () => {
		const value = parseInt(quant);
		if (value - 1 >= min) {
			setValue(value - 1);
		}
	};

	// Componente funcional del campo
	const IntField = ({ value }) => {
		return (
			<input
				id="qty-widget"
				className="int-qty-wdg-field"
				type="number"
				defaultValue={value}
				onBlur={change}
				onKeyDown={handleKeyDown}
			/>
		);
	};

	// Renderización con los botones para manipulación de cantidad
	return (
		<div className="int-quantity-widget">
			<button
				className={`int-qty-wdg-btn int-qty-wdg-minus ${minusActive}-btn`}
				onClick={decrement}
			>
				{"-"}
			</button>

			<IntField value={quant} />

			<button
				className={`int-qty-wdg-btn int-qty-wdg-plus ${plusActive}-btn`}
				onClick={increment}
			>
				{"+"}
			</button>
		</div>
	);
};

export default QuantityWidget;
