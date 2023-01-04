import React from 'react';

function Hero() {
  return (
    <section className="hero wrapper">
      <div className="hero__container">
        <div className="border-result">
          <span>border-top-left-radius: 10px;</span>
          <span>border-top-right-radius: 10px;</span>
          <span>border-bottom-left-radius: 10px;</span>
          <span>border-bottom-right-radius: 10px;</span>
        </div>

        <div className="border-inputs">
          <div className="top-left-container">
            <span className="top-left-label">Superior esquerdo</span>
            <input type="range" className="top-left-input" max="100" />
          </div>

          <div className="top-right-container">
            <span className="top-right-label">Superior direito</span>
            <input type="range" className="top-right-input" max="100" />
          </div>

          <div className="bottom-left-container">
            <span className="bottom-left-label">Inferior esquerdo</span>
            <input type="range" className="bottom-left-input" max="100" />
          </div>

          <div className="bottom-right-container">
            <span className="bottom-right-label">Inferior direito</span>
            <input type="range" className="bottom-right-input" max="100" />
          </div>

          <button className="css-copy-btn">Copiar CSS</button>
        </div>
      </div>
    </section>
  )
}

export default Hero;