import React from 'react'

const PropsChildren = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
            <div className='text-4xl font-semibold text-yellow-400'>Props.Children</div></div>
    )
}

export default PropsChildren