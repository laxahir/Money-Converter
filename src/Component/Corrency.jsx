import React, { useId } from 'react'

function Corrency({
    label,
    Amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    AmountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountinputId = useId()

    return (
        <>
            <div className={`bg-white p-3 rounded-lg text-sm flex`}>
                <div className='w-1/2'>
                    <label
                        htmlFor={amountinputId}
                        className=' text-black/40 mb-2 inline-block'>{label}</label>
                    <input
                        id={amountinputId}
                        className='outline-none w-full bg-transparant py-1.5'
                        type="number"
                        placeholder='Amount'
                        disabled={AmountDisable}
                        value={Amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className='w-1/2 flex flex-wrap justify-end text-right'>
                    <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                    <select
                        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((Currency) => (
                            <option
                                key={Currency}
                                value={Currency}>{Currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Corrency
