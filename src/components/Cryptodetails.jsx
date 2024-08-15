import React, { useState } from "react";
import HTMLReactParser from "html-react-parser/lib/index";
import { useParams } from "react-router-dom";
import { Col, Row, Typography, Select } from "antd";
import {
	MoneyCollectOutlined,
	DollarCircleOutlined,
	FundOutlined,
	ExclamationCircleOutlined,
	StopOutlined,
	TrophyOutlined,
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

const Cryptodetails = () => {
	const { coinId } = useParams();
	const [timeperiod, Settimeperiod] = useState(0);
	const { data, isFetching } = useGetCryptoDetailsQuery(coinId);

	const time = ["3h", "24h", "7d", "30d", "1y", "5y"];
	return (
		<>
			<Title level={2}>Crypto Details : {coinId}</Title>
		</>
	);
};

export default Cryptodetails;
