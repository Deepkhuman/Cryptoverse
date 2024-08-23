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
		if (screensize < 819) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
			return () => {};
		}
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
				>
					<MenuOutlined></MenuOutlined>
				</Button>
			</div>
			{activeMenu && <Menu theme="dark" items={menuItems}></Menu>}
		</div>
	);
};

export default Navbar;
