import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, SetCryptos] = useState(cryptosList?.data.coins);
	if (isFetching) return "Loading...";
	return (
		<>
			<Row gutter={[28, 20]} className="crypto-card-container">
				{cryptos?.map((currency) => (
					<Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
						<Link to={`/crypto/${currency.id}`}>
							<Card
								title={`${currency.rank}. ${currency.name}`}
								extra={<img src={currency.iconUrl} className="crypto-image" />}
								hoverable
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
