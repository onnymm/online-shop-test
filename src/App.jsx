import { useState } from "react";

import Sidebar from "./main_components/aside/Sidebar";
import Navbar from "./main_components/navbar/Navbar";
import Container from "./main_components/page_container/Container";

const App = () => {
	console.log("Render de app");

	// SHOW/HIDE SIDEBAR
	const [setBarShow, useBarShow] = useState(true);

	return (
		<>
			<Navbar setBarShow={setBarShow} useBarShow={useBarShow} />
			<div className="content">
				<Sidebar showSelf={setBarShow} useShowSelf={useBarShow} />
				{/* <div style={{ display: "flex" }}> */}
				<Container sidebarShow={setBarShow} />
				{/* </div> */}
			</div>
		</>
	);
};

export default App;
