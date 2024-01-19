export default function Header(props) {
  return (
    <header className="header">
      <span className="header__logo">Crypto Tracker</span>
      <nav className="header__navbar">
        <a href="#home" className="header__button">Home</a>
        <a href="#market" className="header__button">Market</a>
        <a href="#about" className="header__button">About</a>
      </nav>
    </header>
  )
}