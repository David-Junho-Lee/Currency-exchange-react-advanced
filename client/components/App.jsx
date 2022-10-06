import React, { useEffect, useState } from 'react'
import CurrencyInput from './CurrencyInput'
import axios from 'axios'

function App() {
  const [amount1, setAmount1] = useState(0)
  const [amount2, setAmount2] = useState(0)
  const [currency1, setCurrency1] = useState('NZD')
  const [currency2, setCurrency2] = useState('USD')
  const [rates, setRates] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.apilayer.com/fixer/latest?apikey=gyyMG3lFiTP0JsLewtQ9V0PPr4ixRWuz`
      )
      .then((response) => {
        setRates(response.data.rates)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.apilayer.com/fixer/symbols?apikey=gyyMG3lFiTP0JsLewtQ9V0PPr4ixRWuz`
  //     )
  //     .then((response) => {
  //       setRates(response.data.rates)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [currency1])

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.apilayer.com/fixer/symbols?apikey=gyyMG3lFiTP0JsLewtQ9V0PPr4ixRWuz`
  //     )
  //     .then((response) => {
  //       setRates(response.data.rates)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [currency2])

  useEffect(() => {
    if (rates) {
      handleAmount1Change(1)
    }
  }, [rates])

  function handleAmount1Change(amount1) {
    setAmount2((amount1 * rates[currency2]) / rates[currency1])
    setAmount1(amount1)
  }

  function handleCurrency1Change(currency1) {
    setAmount2((amount1 * rates[currency2]) / rates[currency1])
    setCurrency1(currency1)
  }

  function handleAmount2Change(amount2) {
    setAmount1((amount2 * rates[currency1]) / rates[currency2])
    setAmount2(amount2)
  }

  function handleCurrency2Change(currency2) {
    setAmount1((amount2 * rates[currency1]) / rates[currency2])
    setCurrency2(currency2)
  }
  return (
    <>
      <h1>Currency Exchange</h1>
      <div>
        <CurrencyInput
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
        />
        <CurrencyInput
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </div>
    </>
  )
}

export default App
