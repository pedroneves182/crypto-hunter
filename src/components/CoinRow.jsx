export default function CoinRow({image, name, price, variation, market_cap}) {
  return (
    <div className="coin-row market__grid">
      <span className="coin-row__name" >
        <img src={image} alt="" className="coin-row__image" />
        {name}
      </span>
      <p className="coin-row__price">{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <p className="coin-row__variation" style={{ color: variation > 0 ? 'var(--green)' : 'var(--red)' }} >{variation.toFixed(2) + " %"}</p>
      <p className="coin-row__market-cap">{market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
    </div>
  )
}