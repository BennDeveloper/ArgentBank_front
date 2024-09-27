import React from 'react'
import '/src/index.css'
import FeatureItem from '../components/featureItem'

function home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
       <h2 className="sr-only">Features</h2>

        <FeatureItem icon="src/assets/img/icon-chat.webp" 
                     alt="Chat Icon" 
                     title="You are our #1 priority" 
                     paragraphe=" Need to talk to a representative? You can get in touch through our
                     24/7 chat or through a phone call in less than 5 minutes." />
        <FeatureItem icon="src/assets/img/icon-money.webp" 
                    alt="Chat Icon" 
                    title="More savings means higher rates" 
                    paragraphe=" The more you save with us, the higher your interest rate will be!" />
        <FeatureItem icon="src/assets/img/icon-security.webp" 
                    alt="Chat Icon" 
                    title="Security you can trust" 
                    paragraphe="We use top of the line encryption to make sure your data and money
                    is always safe." />
                    
      </section>

    </main>
  )
}

export default home