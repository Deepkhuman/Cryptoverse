import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Card } from "antd";
import { useGetMarketTrendsQuery } from "../services/cryptoNewsApi"; // Ensure this path is correct
import { Link } from "react-router-dom";
import Loader from "./Loader";
const { Title } = Typography;

const News = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: cryptoNews, isLoading } = useGetMarketTrendsQuery(count);
	const [news, Setnews] = useState([]);
	useEffect(() => {
		if (cryptoNews?.data?.news) {
			Setnews(cryptoNews.data.news);
		}
	}, [cryptoNews]);
	if (isLoading) return <Loader />;
	return (
		<>
			<Row gutter={[24, 24]}>
				{news?.map((news, i) => (
					<Col key={i} xs={24} xm={12} lg={8}>
						<Card hoverable className="news-card">
							<a href={news.article_url} target="_blank" rel="noreferrer">
								<div className="news-image-container">
									<Title className="news-title" level={5}>
										{news.article_title}
									</Title>
									<img className="img" src={news?.article_photo_url} />
								</div>
								<p>{news.post_time_utc}</p>
								<div style={{ color: "red" }}>
									{" "}
									{news?.stocks_in_news.map((stock, i) => (
										<p key={i} style={{ color: "red" }}>
											{" "}
											{i < 1 ? stock.name : " "}
										</p>
									))}
								</div>
								<p style={{ color: "#0197f6" }}>From : ~{news.source}</p>
							</a>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
};

export default News;
