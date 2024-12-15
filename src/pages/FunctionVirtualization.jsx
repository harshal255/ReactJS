import React from 'react';
import Parent from '../components/FunctionBased/Parent';

const FunctionVirtualization = () => {
  return (
    <div className="w-[99dvw] flex flex-col gap-3 items-center py-10" key={"Function app"}>
      <h1 className="text-5xl font-bold">Function Based Components</h1>
      <Parent />
    </div>
  )
}

export default FunctionVirtualization