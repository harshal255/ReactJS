import React, { useState, useEffect } from 'react'
import ChildState from '../components/FunctionBased/ChildState'

const ParentControlState = () => {
    const [color, setColor] = useState("#f97316");

    const changeBorder = (color) => {
        setColor(color);
    }

    // useEffect(() => {
    //     console.log(color);
    // }, [color])

    return (
        <div className='border border-purple-700 w-[50rem] h-[50rem] flex flex-col items-center justify-center gap-10 p-10'>
            <div className='font-semibold text-4xl text-pink-600'>Parent Control State</div>
            <button onClick={() => { changeBorder("#22c55e") }}>Change color from parent</button>
            <ChildState color={color} changeBorder={changeBorder}/>
        </div>
    )
}

export default ParentControlState