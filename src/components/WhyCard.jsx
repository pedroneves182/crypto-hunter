import '../styles/components/whycard.scss';

export default function WhyCard(props) {
  return (
    <div className="why-card">
      <i className="why-card__icon">{props.icon}</i>
      <div className="why-card__text-container">
        <h3 className="why-card__title">{props.title}</h3>
        <p className="why-card__text">{props.text}</p>
      </div>
    </div>
  )
}