import { NavLink } from "react-router-dom";

const NavbarButton = ({ Icon, func, value, url }) => {
	const activate = () => {
		if (func) {
			func(value);
		}
	};

	let Content = null;

	const Btn = () => (
		<button onClick={activate} className="navbar-btn btn-style">
			<div className="btn-icon">{<Icon />}</div>
		</button>
	);

	if (url) {
		Content = (
			<NavLink to={url}>
				<Btn />
			</NavLink>
		);
	} else {
		Content = <Btn />;
	}
	return Content;
};

export default NavbarButton;
