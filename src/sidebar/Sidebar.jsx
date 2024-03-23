import SidebarContent from "./components/SidebarContent";
import SidebarFooter from "./components/SidebarFooter";
import SidebarHeader from "./components/SidebarHeader";

const Sidebar = () => (
	<aside className="sidebar">
		<header>
			<SidebarHeader />
		</header>
		<div className="sidebar-content">
			<SidebarContent />
			<footer>
				<SidebarFooter />
			</footer>
		</div>
	</aside>
);

export default Sidebar;
