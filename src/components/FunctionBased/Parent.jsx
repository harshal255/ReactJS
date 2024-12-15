import { useState } from "react";
import React from "../React";
import Vite from "../Vite";
import { Child } from "./Child";

const Parent = () => {
    const [logo, setLogo] = useState(0);
    console.log("Functional Parent is called");


    return (
        <div className="m-10 p-10 border border-purple-200 rounded-xl w-1/2 text-3xl text-purple-500 flex flex-col gap-5 items-center">
            <div> Functional based</div>

            <div className="flex items-center justify-center gap-5">
                {logo === 0 ? <React /> : <Vite />}
            </div>

            <Child />
            <div className="flex items-center justify-around">
                <button onClick={() => logo === 0 ? setLogo(1) : setLogo(0)} className="text-lg bg-black w-fit px-5 py-2 rounded-lg">
                    Change Logo
                </button>
            </div>

        </div>
    )
}

export default Parent;
