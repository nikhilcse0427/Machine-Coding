import { useState, useEffect } from "react";
const CRYPTO_CURRENCTY = ["USD", "CNY", "EUR", "GBP"];
const CRYPTO_API = "https://api.frontendeval.com/fake/crypto";

export function Crypto() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("EUR");
  const [conversionRate, setConversionRate] = useState();
  const [conversionAmt, setConversionAmt] = useState(0);
  const [prevAmt, setPrevAmt] = useState(0);

  useEffect(() => {
    async function fetchConversionRate() {
      try {
        const res = await fetch(`${CRYPTO_API}/${currency}`);
        const data = await res.json();
        setConversionRate(data.value);
        console.log(data);
      } catch (err) {
        console.error("Error:", err);
      }
    }
    const timer = setInterval(fetchConversionRate, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currency]);

  useEffect(() => {
    setPrevAmt(conversionAmt);
    setConversionAmt(() => conversionRate * amount);
  }, [conversionRate]);

  return (
    <>
      <label htmlFor="amt">Amount to be converted </label>
      <input
        type="number"
        name="amount"
        id="amt"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label> Select Currency </label>
      <select id="currenc" onChange={(e) => setCurrency(e.target.value)}>
        {CRYPTO_CURRENCTY.map((currency, idx) => {
          return (
            <option key={idx} value={currency}>
              {currency}
            </option>
          );
        })}
      </select>
      <p>WUC Crypto Equivalent {amount * conversionRate}</p>
      <p style={{ color: prevAmt - conversionAmt >= 0 ? "green" : "red" }}>
        Change in currency
        {prevAmt - conversionAmt > 0 ? "🔝" : "⬇️"}
        {prevAmt - conversionAmt}
      </p>
    </>
  );
}
