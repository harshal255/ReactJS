import React from 'react'
import PropsChildren from '../components/FunctionBased/PropsChildren';


const PropsParent = () => {
    return (
        <div className='w-full flex items-center justify-center min-h-screen'>
            {/* className works as props in child component */}
            <PropsChildren className="flex flex-col gap-5 items-center justify-center">
                <div className='text-5xl text-green-400'>Hello, How are you ...!</div>
                <p className='text-2xl'>Understanding Props.children</p>
            </PropsChildren>
        </div>
    )
}

export default PropsParent;