import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./test_components/Router";
// import App from "./App";
import "./index.css";

const container = document.getElementById("root");

// ReactDOM.createRoot(container).render(<App />);
ReactDOM.createRoot(container).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
