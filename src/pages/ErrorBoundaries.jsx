import React, { useContext, useState } from 'react';

import Vite from '../components/Vite';
import { modalContext } from '../contexts/modalContext';

const ErrorBoundaries = () => {
    const { openModal, setOpenModal } = useContext(modalContext);
    const [state, setState] = useState(1);

    if (state >= 10 || state <= -10) {
        setOpenModal(true);
        throw new Error('Your value is >=10 or <= 10');
    }

    return (
        <div className='flex flex-col gap-5 items-center justify-center w-full min-h-screen'>
            <h1 className='text-red-500 text-2xl'>Error Boundaries</h1>
            <Vite />
            <span className='text-2xl font-medium text-orange-500'>{state}</span>
            <button onClick={() => setState((prevState) => prevState + 1)} className='px-10 py-3 capitalize bg-zinc-950 rounded-lg'>Add Count</button>
            <button onClick={() => setState((prevState) => prevState - 1)} className='px-10 py-3 capitalize bg-zinc-950 rounded-lg'>Subtract Count</button>
        </div>
    )
}

export default ErrorBoundaries;