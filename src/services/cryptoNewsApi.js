import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
	"x-rapidapi-key": "0aec523ff5mshd8352d361e57f06p179f2cjsn1b9b584f6af8",
	"x-rapidapi-host": "real-time-finance-data.p.rapidapi.com",
};

const baseUrl = "https://real-time-finance-data.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getMarketTrends: builder.query({
			query: (count) =>
				createRequest(
					`/market-trends?trend_type=MARKET_INDEXES&country=us?limit=${count}`
				),
		}),
	}),
});

export const { useGetMarketTrendsQuery } = cryptoNewsApi;
