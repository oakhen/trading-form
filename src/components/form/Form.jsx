import { useState } from "react"

function Form() {
  const [tradeState, setTradeState] = useState("buy")
  const [tradeType, setTradeType] = useState("instant")
  return (
    <section className="form-box">
      <header>
        <p
          onClick={() => {
            setTradeState("buy")
          }}
          className={`trade-tab ${tradeState === "buy" && "active"}`}
        >
          BUY BTC
        </p>

        <p
          onClick={() => {
            setTradeState("sell")
          }}
          className={`trade-tab ${tradeState === "sell" && "active"}`}
        >
          SELL BTC
        </p>
      </header>

      <main>
        <div className="trade-switches">
          <p
            onClick={() => {
              setTradeType("instant")
            }}
            className={`tab ${tradeType === "instant" && "active"}`}
          >
            INSTANT TRADE
          </p>
          <p
            onClick={() => {
              setTradeType("limit")
            }}
            className={`tab ${tradeType === "limit" && "active-left"}`}
          >
            LIMIT TRADE
          </p>
        </div>

        <form>
          <label htmlFor="amount">AMOUNT</label>
          <input
            type="number"
            id="amount"
            className="amount"
            placeholder="BTC"
          />

          <label htmlFor="price">PRICE</label>

          <input
            type="number"
            name="price"
            id="price"
            placeholder="BTC"
          />

          <label htmlFor="total">TOTAL</label>
          <input
            type="text"
            id="total"
            placeholder="INR"
          />

          <button>{tradeState} BTC</button>
        </form>
      </main>
    </section>
  )
}
export default Form
