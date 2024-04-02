const NotificationItem = ({ Image, title, description, ago }) => (
	<div className="list-item-style">
		<div className="content-img img-box-small">
			<div className="img-small">{<Image />}</div>
		</div>
		<div className="item-container img-small-text">
			<h2>{title}</h2>
			<div className="text-resume">{description}</div>
			<div className="sub-text">{ago}</div>
		</div>
	</div>
);

export default NotificationItem;
