import ForwardBar from "../../ui_components/ForwardBar";
import NotificationItem from "./NotificationItem";
import data from "./Notifications";

const NotificationsPanel = () => {
	const RenderedContent = () =>
		data.map((notification, index) => (
			<NotificationItem
				key={index}
				Image={notification.image}
				title={notification.title}
				description={notification.description}
				ago={notification.ago}
			/>
		));

	return (
		<>
			<ForwardBar />
			<RenderedContent />
		</>
	);
};

export default NotificationsPanel;
