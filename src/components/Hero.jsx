import React, { useState, useEffect, useRef } from 'react';

function Hero() {
  const [borderTopLeftValue, setBorderTopLeftValue] = useState(10);
  const [borderTopRightValue, setBorderTopRightValue] = useState(10);
  const [borderBottomLeftValue, setBorderBottomLeftValue] = useState(10);
  const [borderBottomRightValue, setBorderBottomRightValue] = useState(10);
  const [borderRadiusStyle, setBorderRadiusStyle] = useState({});
  const [cssCopyText, setCssCopyText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const topLeftInput = useRef(null);
  const topRightInput = useRef(null);
  const bottomLeftInput = useRef(null);
  const bottomRightInput = useRef(null);

  useEffect(() => {
    function updateStyle() {
      setBorderRadiusStyle({
        borderTopLeftRadius: `${borderTopLeftValue}px`,
        borderTopRightRadius: `${borderTopRightValue}px`,
        borderBottomLeftRadius: `${borderBottomLeftValue}px`,
        borderBottomRightRadius: `${borderBottomRightValue}px`,
      });
    }

    function updateCssText() {
      setCssCopyText(`border-top-left-radius: ${borderTopLeftValue}px;\nborder-top-right-radius: ${borderTopRightValue}px;\nborder-bottom-left-radius: ${borderBottomLeftValue}px;\nborder-bottom-right-radius: ${borderBottomRightValue}px;`);
    }

    updateStyle();
    updateCssText();
  }, [borderTopLeftValue, borderTopRightValue, borderBottomLeftValue, borderBottomRightValue]);

  function copyCss(e) {
    navigator.clipboard.writeText(cssCopyText);
    setIsCopied(true);
    const timeoutTime = 3000;
    e.target.style.pointerEvents = 'none';


    setTimeout(() => {
      setIsCopied(false);
      e.target.style.pointerEvents = 'unset';
    }, timeoutTime);
  }

  return (
    <section className='hero wrapper'>
      <div className='hero__container'>
        <h1 className='hero-title'>Border Radius Generator</h1>

        <div style={borderRadiusStyle} className='border-result'>
          <span>{`border-top-left-radius: ${borderTopLeftValue}px;`}</span>
          <span>{`border-top-right-radius: ${borderTopRightValue}px;`}</span>
          <span>{`border-bottom-left-radius: ${borderBottomLeftValue}px;`}</span>
          <span>{`border-bottom-right-radius: ${borderBottomRightValue}px;`}</span>
        </div>

        <div className='border-inputs'>
          <div className='top-left-container'>
            <span className='top-left-label'>Superior esquerdo</span>
            <input
              ref={topLeftInput}
              onChange={() => setBorderTopLeftValue(topLeftInput.current.value)}
              type='range'
              className='top-left-input'
              min='0'
              max='100'
              defaultValue={borderBottomLeftValue}
            />
          </div>

          <div className='top-right-container'>
            <span className='top-right-label'>Superior direito</span>
            <input
              ref={topRightInput}
              onChange={() => setBorderTopRightValue(topRightInput.current.value)}
              type='range'
              className='top-right-input'
              min='0'
              max='100'
              defaultValue={borderTopRightValue}
            />
          </div>

          <div className='bottom-left-container'>
            <span className='bottom-left-label'>Inferior esquerdo</span>
            <input
              ref={bottomLeftInput}
              onChange={() => setBorderBottomLeftValue(bottomLeftInput.current.value)}
              type='range'
              className='bottom-left-input'
              min='0'
              max='100'
              defaultValue={borderBottomLeftValue}
            />
          </div>

          <div className='bottom-right-container'>
            <span className='bottom-right-label'>Inferior direito</span>
            <input
              ref={bottomRightInput}
              onChange={() => setBorderBottomRightValue(bottomRightInput.current.value)}
              type='range'
              className='bottom-right-input'
              min='0'
              max='100'
              defaultValue={borderBottomRightValue}
            />
          </div>

          <button onClick={copyCss} className={isCopied ? 'css-copy-btn clicked' : 'css-copy-btn'}>{isCopied ? 'Copiado' : 'Copiar CSS'}</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
