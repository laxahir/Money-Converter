import React, { useState } from 'react'
import useCurrency from '../usecorrency'
import Currency from '../Component/Corrency'

function Corrency_Converter() {

    const [Amount, setAmount] = useState("")
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [result, setResult] = useState("")

    const currencyinfo = useCurrency(from)

    const options = Object.keys(currencyinfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setResult(Amount)
        setAmount(result)
    }

    const convert = () => {
        setResult(Amount * currencyinfo[to])
    }

    return (
        <>
            <div className='-mt-8 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
                style={{
                    backgroundImage: `url("https://images.pexels.com/photos/29273395/pexels-photo-29273395/free-photo-of-rainy-window-view-in-belfast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load")`
                }}>
                <div className='w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className='w-full mb-1 '>
                            <Currency
                                label="From"
                                Amount={Amount}
                                currencyOptions={options}
                                onCurrencyChange={(Currency) => setAmount(Amount)}
                                selectCurrency={from}
                                onAmountChange={(Amount) => setAmount(Amount)}
                            />
                        </div>
                        <div className='relative w-full h-0.5'>
                            <button
                                type='button'
                                className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className='w-full mt-1 mb-4 '>
                            <Currency
                                label="To"
                                Amount={result}
                                currencyOptions={options}
                                onCurrencyChange={(Currency) => setTo(Currency)}
                                selectCurrency={to}
                                AmountDisable
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg '>
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>

                    </form>
                </div>
            </div >
        </>
    )
}

export default Corrency_Converter
