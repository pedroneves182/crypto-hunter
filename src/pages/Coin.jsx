import '../styles/components/coin.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loading from "../components/Loading";

export default function Coin() {
  const { coinId } = useParams()
  const [coin, setCoin] = useState(null);
  const [loadCoin, setLoadCoin] = useState(true);

  const apiKey = import.meta.env.VITE_COIN_API_KEY;
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&developer_data=false&community_data=false&x_cg_demo_api_key=${apiKey}`

  useEffect(() => {
    async function fetchApiData() {
      try {
        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) {
          throw new Error("API request failed.");
        }
        const data = await apiResponse.json();
        setCoin(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchApiData();
  }, [])

  if (!coin) {
    return (
      <div className='coin__content'>
        <Loading />
      </div>
      )
      
   
  }

  function removeAnchorTags(text) {
    const regex = /<a[^>]*>(.*?)<\/a>/gi;
    return text.replace(regex, '$1');
  }

  return (
    <section className="coin-section">
      {coin ? (
        <div className="coin__content">
          <div className="coin__overview">
            <img src={coin.image?.large} alt="" className="coin__image" />
            <h3 className="coin__name">{coin.name}</h3>
            <p className="coin__rank">Rank: {coin.market_data?.market_cap_rank}</p>
          </div>
          <div className="coin__details">
            <div className="coin__data">
              <span>24h Change: <span style={{ color: coin.market_data?.price_change_percentage_24h > 0 ? 'var(--green)' : 'var(--red)' }} >{coin.market_data?.price_change_percentage_24h.toFixed(2) + " %"}</span></span>
              <span>Price: <span style={{ color: coin.market_data?.current_price.usd > 0 ? 'var(--green)' : 'var(--red)' }}>{coin.market_data?.current_price.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span></span>
              <span>Symbol: {coin.symbol}</span>
            </div>
            <div className="coin__description">
              <p>{coin.description ? removeAnchorTags(coin.description.en) : null}</p>
            </div>
          </div>
        </div>
      ) : (<Loading />)
      }
    </section>
  )
}