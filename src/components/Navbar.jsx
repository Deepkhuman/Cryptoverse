import {
	HomeOutlined,
	FundOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
} from "@ant-design/icons";
import { Avatar, Typography, Menu, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";

const Navbar = () => {
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
			</div>
			<Menu theme="dark" items={menuItems}></Menu>
		</div>
	);
};

export default Navbar;
