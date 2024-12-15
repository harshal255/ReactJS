import React from "./React"


const Loader = () => {
    return (
        <div className=" text-cyan-400 flex flex-col gap-5 items-center justify-center my-20">
            <React />
            <h1 className="text-[3rem]">Loading...</h1>
        </div>
    )
}

export default Loader
