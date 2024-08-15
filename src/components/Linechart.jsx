import React from "react";
import { Line } from "react-chartjs-2";
import { Typography, Row, Col } from "antd";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	LineElement,
	PointElement,
	TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
	Legend,
	TimeScale
);

const Linechart = ({ Coinhistory, Currentprice, Coinname }) => {
	const coinPrice = [];
	const coinTimestamp = [];

	for (let i = 0; i < Coinhistory?.data?.history?.length; i += 1) {
		coinPrice.push(Coinhistory?.data?.history[i].price);
	}

	for (let i = 0; i < Coinhistory?.data?.history?.length; i += 1) {
		coinTimestamp.push(
			new Date(Coinhistory?.data?.history[i].timestamp).toLocaleDateString()
		);
	}

	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: "Price In USD",
				data: coinPrice,
				fill: false,
				backgroundColor: "#0071bd",
				borderColor: "#0071bd",
			},
		],
	};

	const options = {
		scales: {
			y: {
				ticks: {
					beginAtZero: true,
				},
			},
		},
	};

	return (
		<>
			<Row className="chart-header">
				<Col span={24}>
					<Typography.Title level={2} className="chart-title">
						{Coinname} Price Chart
					</Typography.Title>
				</Col>
				<Col className="price-container" span={24}>
					<Typography.Title level={5} className="price-change">
						{Coinhistory?.data?.change} %
					</Typography.Title>
					<Typography.Title level={5} className="current-price">
						Current {Coinname} Price: $ {Currentprice}
					</Typography.Title>
				</Col>
			</Row>
			<Line data={data} options={options} />
		</>
	);
};

export default Linechart;
