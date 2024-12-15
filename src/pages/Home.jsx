import { useContext } from "react"
import React from "../components/React"
import Vite from "../components/Vite"
import { modalContext } from "../contexts/modalContext"
import ModalBox from "../components/Customs/ModalBox"


const Home = () => {
    const { openModal, handleModal } = useContext(modalContext);
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <div className="flex items-center gap-5">
                <React />
                <Vite />
            </div>
            <h1 className="text-[7.5rem] font-semibold text-indigo-700">Don{`'`}t React</h1>
            <button onClick={handleModal}>open modal</button>
            {openModal && <ModalBox title="accessing by home page">open modal box</ModalBox>}
        </div>
    )
}

export default Home
