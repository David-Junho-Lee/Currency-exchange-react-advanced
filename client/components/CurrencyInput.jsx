import React from 'react'
import PropTypes from 'prop-types'

function CurrencyInput(props) {
  return (
    <div className="exchange-box">
      <input
        className="inputbox"
        type="text"
        value={props.amount}
        onChange={(event) => props.onAmountChange(event.target.value)}
      />
      <select
        className="dropbtn"
        value={props.currency}
        onChange={(event) => props.onCurrencyChange(event.target.value)}
      >
        {props.currencies.map((currency) => (
          <option className="dropdown" key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  )
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
}

export default CurrencyInput
