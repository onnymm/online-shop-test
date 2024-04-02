import { useNavigate } from "react-router-dom";

const ForwardBar = () => {
	const navigate = useNavigate();

	return (
		<nav className="subnavbar">
			<button
				className="subbutton"
				onClick={() => {
					navigate(-1);
				}}
			>
				{"❮    "}
				Atrás
			</button>
		</nav>
	);
};

export default ForwardBar;
