import { Link } from 'react-router-dom';

export default function CoinCard(props) {
  return (

    <Link key={item.id} className="coin-card">
      <img src={item.image} alt={item.name} className="coin-card__image" />
      <h2 className="coin-card__name">{item.name}
        <span className={"coin-card__price--" + (item.price_change_percentage_24h >= 0 ? "green" : "red")}> {item.price_change_percentage_24h.toFixed(2) + "%"}</span></h2>
      <p className="coin-card__price">{item.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
    </Link>

  )
}