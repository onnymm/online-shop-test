import { useContext } from "react";
import { NavLink } from "react-router-dom";
import SidebarContext from "../../contexts/SidebarContext";

const SidebarButton = ({ Icon, legend, func, value, url }) => {
	const { setSidebarActive } = useContext(SidebarContext);

	const activate = () => {
		if (func) {
			func(value);
		}
		setSidebarActive(false);
	};

	let Content = null;

	const Btn = () => (
		<button onClick={activate} className="sidebar-btn btn-style">
			<div className="btn-icon">
				<div className="icon">{<Icon />}</div>
			</div>
			<div className="legend">{legend}</div>
		</button>
	);

	if (url) {
		Content = <NavLink to={url}>{Btn}</NavLink>;
	} else {
		Content = <Btn />;
	}

	return Content;
};

export default SidebarButton;
