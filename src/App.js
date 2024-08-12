import React from "react";
import "./App.css";
import {
	Navbar,
	Homepage,
	Exchanges,
	Cryptocurrencies,
	Cryptodetails,
	News,
} from "./components";
import { Route, Routes, Link } from "react-router-dom";
import { Layout } from "antd";
const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/exchanges" element={<Exchanges />} />
							<Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
							<Route path="/news" element={<News />} />
							<Route path="/crypto/:coinId" element={<Cryptodetails />} />
						</Routes>
					</div>
				</Layout>
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default App;
