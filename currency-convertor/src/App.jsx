import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);

    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  const rate = currencyInfo[to] || 0;

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-6">

        {/* LEFT PANEL (Image Overlay Info) */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl min-h-[420px] relative">
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <p className="text-white text-lg font-semibold">
              1 {from.toUpperCase()} = {rate.toFixed(4)} {to.toUpperCase()}
            </p>
            <p className="text-white/60 text-xs">Live exchange rate</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 w-full md:w-80">

          {/* RESULT CARD */}
          <div className="rounded-xl p-5 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-2">
              You Get
            </p>
            <p className="text-white text-3xl font-bold">
              {convertedAmount.toFixed(2)}
            </p>
            <p className="text-white/80 text-sm uppercase font-medium mt-1">
              {to}
            </p>
            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="text-white/50 text-xs">
                From: {amount} {from.toUpperCase()}
              </p>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="rounded-xl p-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              {/* FROM */}
              <div className="mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              {/* SWAP */}
              <div className="relative w-full h-0.5 my-2">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/30 rounded-md bg-black/70 hover:bg-black text-white px-3 py-1 text-sm transition"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>

              {/* TO */}
              <div className="mt-1 mb-3">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;