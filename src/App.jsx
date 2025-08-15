import { useState } from 'react'
import Switch from '@mui/material/Switch';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [upperLimit, setUpperLimit] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [step, setStep] = useState(1);
  const [allowNegative, setAllowNegative] = useState(false);

  const increment = () => {
    const nextValue = count + Number(step);
    if (upperLimit === '' || nextValue <= Number(upperLimit)) {
      setCount(nextValue);
    }
  }

  const decrement = () => {
    const nextValue = count - Number(step);
    if (
      (allowNegative || nextValue >= 0) &&
      (lowerLimit === '' || nextValue >= Number(lowerLimit))
    ) {
      setCount(nextValue);
    }
  }
  const reset = () => {
    setCount(0);
  }

  const isIncrementDisabled = upperLimit !== '' && count + Number(step) > Number(upperLimit);
  const isDecrementDisabled =
    (!allowNegative && count - Number(step) < 0) ||
    (lowerLimit !== '' && count - Number(step) < Number(lowerLimit));

  return (
    <div className='bg-[#B1EDE8] w-screen h-screen flex justify-center items-center'>
      <div className='flex justify-center flex-col items-center bg-amber-50/30 p-6 rounded-xl border-[1px] shadow-md border-slate-400'>
        <h1 className='text-7xl font-bold m-4 mt-0'>{count}</h1>


        <div className="buttons flex">
          <button
            className='bg-[#5299D3] text-white rounded-md m-2 hover:bg-[#3f78a6] text-3xl w-[50px] disabled:bg-gray-400'
            onClick={increment}
            disabled={isIncrementDisabled}
          >+</button>
          <button
            className='bg-[#5299D3] text-white rounded-md m-2 hover:bg-[#3f78a6] text-3xl w-[50px] disabled:bg-gray-400'
            onClick={decrement}
            disabled={isDecrementDisabled}
          >-</button>
          <button
            className='bg-[#5299D3] text-white rounded-md m-2 hover:bg-[#3f78a6] text-2xl px-4 py-1'
            onClick={reset}
          >RESET</button>
        </div>


        <h1 className='text-slate-500 text-sm m-1.5 mt-3'>-Personalize Your Counter-</h1>


        <div className="inputs space-y-3 flex flex-col items-center">
          <div>
          <input
            type="number"
            placeholder='Upper Limit'
            className='w-[130px] border m-1 border-gray-400 rounded px-3 py-1 pr-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500'
            value={upperLimit}
            onChange={(e) => setUpperLimit(e.target.value)}
          />
          <input
            type="number"
            placeholder='Lower Limit'
            className='w-[130px] border m-1 border-gray-400 rounded px-3 py-1 pr-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500'
            value={lowerLimit}
            onChange={(e) => setLowerLimit(e.target.value)}
          />
          </div>
          <lable className="text-[16px] text-slate-800">
            Step size : 
          <input
            type="number"
            placeholder='Step Size (Default 1)'
            className='w-[100px] ml-2 border border-gray-400 rounded px-3 py-1 pr-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500'
            value={step}
            onChange={(e) => setStep(e.target.value)}
          />
          </lable>
          <label className="text-[16px] text-slate-800">
            <Switch
              color="primary"
              size="sm"
              variant="soft"
              className='scale-75' 
              checked={allowNegative}
              onChange={(e) => setAllowNegative(e.target.checked)}
            />
            Allow Negative Values
          </label>
        </div>
      </div>
    </div>
  )
}

export default App;
