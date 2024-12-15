import React from 'react'

const ChildState = ({ color, changeBorder }) => {
    // console.log("child component ", color);

    return (
        <div style={{ border: `2px solid ${color}` }} className={`flex flex-col gap-2 text-2xl text-orange-300  items-center justify-center p-10 w-[20rem] h-[20rem] `}>
            <h1>Child State</h1>
            <button className='text-sm bg-black text-white font-extralight rounded-lg px-10 py-3' onClick={() => { changeBorder("#8b5cf6") }}>Change color from child</button>
        </div>
    )
}

export default ChildState