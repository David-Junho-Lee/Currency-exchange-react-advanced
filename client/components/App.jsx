import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const ref = useRef(null)
  let currencyRatio = {
    USD: {
      USD: 1,
      AUD: 1.54,
      NZD: 1.75,
      KRW: 1432.44,
      unit: 'Dollar',
    },
    KRW: {
      USD: 0.0007,
      AUD: 0.0011,
      NZD: 0.0012,
      KRW: 1,
      unit: 'Won',
    },
    AUD: {
      USD: 0.65,
      AUD: 1,
      NZD: 1.13,
      KRW: 928.26,
      unit: 'Dollar',
    },
    NZD: {
      USD: 0.57,
      AUD: 0.88,
      NZD: 1,
      KRW: 818.16,
      unit: 'Dollar',
    },
  }

  let fromCurrency = 'NZD'
  let toCurrency = 'USD'

  function convert(type) {
    let amount = 0
    if (type == 'from') {
      amount = console.log(amount)
    }
  }
  return (
    <>
      <h1>Curreny Exchange</h1>
      <div className="exchange-box">
        <div className="dropdown">
          <button className="dropbtn">
            <img className="flag-img" src="./images/new-zealand.png" />
            NZD
          </button>
          <div className="dropdown-content">
            <p id="USD">
              <img className="flag-img" src="./images/united-states.png" />
              USD
            </p>
            <p id="KRW">
              <img className="flag-img" src="./images/south-korea.png" />
              USD
            </p>
            <p id="AUD">
              <img className="flag-img" src="./images/australia.png" />
              USD
            </p>
            <p id="NZD">
              <img className="flag-img" src="./images/new-zealand.png" />
              USD
            </p>
          </div>
        </div>
        <div className="input-box" onKeyUp={convert('from')}>
          <input type="text" id="from-input" />
          <div id="from-unit">Dollar</div>
        </div>
      </div>
      <h1 className="equal-sign">=</h1>
      <div className="exchange-box">
        <div className="dropdown">
          <button className="dropbtn">
            <img className="flag-img" src="./images/new-zealand.png" />
            NZD
          </button>
          <div className="dropdown-content">
            <p id="USD">
              <img className="flag-img" src="./images/united-states.png" />
              USD
            </p>
            <p id="KRW">
              <img className="flag-img" src="./images/south-korea.png" />
              USD
            </p>
            <p id="AUD">
              <img className="flag-img" src="./images/australia.png" />
              USD
            </p>
            <p id="NZD">
              <img className="flag-img" src="./images/new-zealand.png" />
              USD
            </p>
          </div>
        </div>
        <div className="input-box" onKeyUp={convert()}>
          <input type="text" id="from-input" />
          <div id="from-unit">Dollar</div>
        </div>
      </div>
    </>
  )
}

export default App
