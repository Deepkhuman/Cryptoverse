import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import "../App.css";

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState([]);

	useEffect(() => {
		if (cryptosList?.data?.coins) {
			setCryptos(cryptosList.data.coins);
		}
	}, [cryptosList]);

	if (isFetching) return "Loading...";

	return (
		<>
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos?.map((currency) => (
					<Col
						xs={24}
						sm={12}
						lg={6}
						className="crypto-card"
						key={currency.uuid}
					>
						<Link to={`/crypto/${currency.uuid}`}>
							<Card
								title={`${currency.rank}. ${currency.name}`}
								extra={<img src={currency.iconUrl} className="crypto-image" />}
								size={30}
								className="ant-card-hover"
							>
								<p style={{ padding: "0px 0px 5px 0px" }}>
									Price : {millify(currency.price)}
								</p>
								<p style={{ padding: "0px 0px 5px 0px" }}>
									Market Cap : {millify(currency.marketCap)}
								</p>
								<p style={{ padding: "0px 0px 8px 0px " }}>
									Daily Change : {millify(currency.change)}%
								</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Cryptocurrencies;
