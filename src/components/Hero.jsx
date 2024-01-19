import { useEffect, useState } from "react"
import floatingBTC from "../assets/floating_btc.png"
import floatingETH from "../assets/floating_eth.png"
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function Hero(props) {
  const [data, setData] = useState([]);
  const apiKey = import.meta.env.VITE_COIN_API_KEY;
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&x_cg_demo_api_key=${apiKey}`

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
  }, [])

  return (
    <section id='home' className="hero">
      <div className="hero__content">
        <div className="hero__text-container">
          <img className="hero__float hero__float--btc" src={floatingBTC} />
          <h1 className="hero__title">TRACK AND TRADE<br />
            <span className="hero__title--effect">CRYPTO CURRENCIES</span>
          </h1>
          <img className="hero__float hero__float--eth" src={floatingETH} />
        </div>
        <div className="hero__coin-slider">
          {data ? (
            data.map((item) => (
              <Link key={item.id} className="coin-card">
                <img src={item.image} alt={item.name} className="coin-card__image" />
                <h2 className="coin-card__name">{item.name}
                  <span className="coin-card__price--" style={{ color: item.price_change_percentage_24h > 0 ? 'var(--green)' : 'var(--red)' }}> {item.price_change_percentage_24h.toFixed(2) + "%"}</span></h2>
                <p className="coin-card__price">{item.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
              </Link>
            ))
          ) : (
            <Loading />
          )}

        </div>
      </div>
    </section>
  )
}