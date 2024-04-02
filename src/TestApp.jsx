import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarContext from "./test_components/contexts/SidebarContext";
import Navbar from "./test_components/ui_components/Navbar";
import Sidebar from "./test_components/ui_components/Sidebar";

const TestApp = () => {
	const [useSidebarActive, setSidebarActive] = useState(false);

	return (
		<SidebarContext.Provider value={{ useSidebarActive, setSidebarActive }}>
			<Navbar />

			<div className="content-section">
				<Sidebar />
				<Outlet />
			</div>
		</SidebarContext.Provider>
	);
};

export default TestApp;
