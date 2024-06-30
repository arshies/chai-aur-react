import { useState } from 'react'
import {InputBox} from './components'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount , setAmount] = useState(8)
  const [from , setFrom] = useState("USD")
  const [to , setTo] = useState("INR")
  const [convertedAmount , setConvertedAmount] = useState("INR")

  const CurrencyInfo = useCurrencyInfo(from)

  const options = Object.keys(CurrencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  const convert = () =>{
    setConvertedAmount(amount * CurrencyInfo[to])
  }


  return (
    <>
      <div
            className="w-screen m-0 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                 label="TO"
                                 amount={convertedAmount}
                                 currencyOptions={options}
                                 onCurrencyChange={(currency) =>{
                                  setTo(currency)
                                 }}
                                selectCurrency={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toLowerCase()} to {to.toLowerCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
