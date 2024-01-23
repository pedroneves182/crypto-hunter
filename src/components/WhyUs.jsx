import hand from "../assets/hand.png"
import WhyCard from "./WhyCard"
import { IconWallet, IconPencilBolt, IconChecklist, IconDeviceMobileMessage, IconMoneybag, IconStack } from "@tabler/icons-react"

import '../styles/components/whyus.scss';

export default function WhyUs(props) {
  return (
    <section className="why-section" id="about">
      <div className="why__content">
        <h2 className="why__title">WHY <span>CHOOSE US</span></h2>
        <div className="why__grid">
          <div className="why__cards-container">
            <WhyCard icon={<IconWallet/>} title="Connect your wallet" text="Use Trust Wallet or Metamask to connect to the app."/>
            <WhyCard icon={<IconPencilBolt/>} title="Select your quantity" text="Upload your crypto and set a title, description and price."/>
            <WhyCard icon={<IconChecklist/>} title="Confirm transaction" text="Earn by selling your crypto on our marketplace."/>
          </div>
          <div className="why__middle-container">
            <img src={hand} alt="Hand holding a Bitcoin" class />
          </div>
          <div className="why__cards-container">
          <WhyCard icon={<IconDeviceMobileMessage/>} title="Receive your own nfts" text="Invest all your crypto at one place on one platform."/>
          <WhyCard icon={<IconMoneybag/>} title="Take a market to sell" text="Discover, collect the right crypto collections to buy or sell."/>
          <WhyCard icon={<IconStack/>} title="Drive your collection" text="We make it easy to Discover, Invest and manage."/>
          </div>
        </div>
      </div>
    </section>
  )
}