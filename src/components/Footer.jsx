import ReactLogo from '../assets/react.svg'

import '../styles/components/footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>

      <p>Made by Pedro Neves using React.</p>
      <img src={ReactLogo} alt="React Logo" className='footer__logo'/>

    </footer>
  )
}