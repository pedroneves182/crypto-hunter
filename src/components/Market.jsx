import { useEffect, useState } from "react";
import CoinRow from "./CoinRow"
import { Logger } from "sass";
import Loading from "./Loading";

import '../styles/components/market.scss';

export default function Market(props) {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const apiKey = import.meta.env.VITE_COIN_API_KEY;
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&x_cg_demo_api_key=${apiKey}`;

  useEffect(() => {
    async function fetchApiData() {
      try {
        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) {
          throw new Error("API request failed.");
        }
        const data = await apiResponse.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchApiData();
  }, [currentPage])

  return (
    <section className="market-section">
      <div className="market__content">
        <h2 className="market__title">Market Update</h2>
        <div className="market__stripe market__grid">
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>
        <div className="coin-row-list">
          {data ? (
            data.map((item) => (
              <CoinRow key={item.id} id={item.id} image={item.image} name={item.name} price={item.current_price} variation={item.price_change_percentage_24h} market_cap={item.market_cap} />
            ))
          ) : (
            <Loading />

          )}
        </div>
        <div className="market-pagination">
          <button onClick={() => { setCurrentPage(1) }} className="market-pagination__button">1</button>
          <button onClick={() => { setCurrentPage(2) }} className="market-pagination__button">2</button>
          <button onClick={() => { setCurrentPage(3) }} className="market-pagination__button">3</button>
          <button onClick={() => { setCurrentPage(4) }} className="market-pagination__button">4</button>
          <button onClick={() => { setCurrentPage(5) }} className="market-pagination__button">5</button>
        </div>
      </div>
    </section>
  )
}