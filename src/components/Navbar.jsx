import {
	HomeOutlined,
	FundOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import { Avatar, Typography, Menu, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screensize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleresize = () => setScreenSize(window.innerWidth);
		window.addEventListener("resize", handleresize);
		handleresize();
		return () => window.removeEventListener("resize", handleresize);
	}, []);

	useEffect(() => {
		if (screensize <= 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
		return () => {}; // Clean up the effect when component unmounts to prevent memory leaks.  This is important in React to prevent potential bugs.  It prevents the function from being called when the component is not being displayed anymore.  This is particularly important for event handlers.  Without this, the event handler could potentially cause memory leaks or other issues.  It's a good practice to always clean up any event handlers when they are no longer needed to prevent memory leaks.  The cleanup function is returned by the useEffect hook.  It's a good idea to include it in any effect that might cause side effects, such as setting up a subscription or fetching data.  This prevents the effect from being called every time the component renders, which can lead to unnecessary re-renders.  It's
	}, [screensize]);
	const menuItems = [
		{
			key: "home",
			icon: <HomeOutlined />,
			label: <Link to="/">Home</Link>,
		},
		{
			key: "cryptocurrencies",
			icon: <FundOutlined />,
			label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
		},
		{
			key: "exchanges",
			icon: <MoneyCollectOutlined />,
			label: <Link to="/exchanges">Exchanges</Link>,
		},
		{
			key: "news",
			icon: <BulbOutlined />,
			label: <Link to="/news">News</Link>,
		},
	];
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large"></Avatar>
				<Typography.Title level={2} className="logo">
					<Link to="/">CryptoVerse</Link>
				</Typography.Title>
				<Button
					className="menu-control-container"
					onClick={() => setActiveMenu(!activeMenu)}
				></Button>
			</div>
			{activeMenu && <Menu theme="dark" items={menuItems}></Menu>}
			<MenuOutlined></MenuOutlined>
		</div>
	);
};

export default Navbar;
