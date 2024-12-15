import React, { useContext } from 'react'
import "../styles/customModal.css"
import ModalBox from '../components/Customs/ModalBox';
import { modalContext } from '../contexts/modalContext';

const ModalBoxTutorial = () => {
    const { openModal, handleModal } = useContext(modalContext);
    return (
        <div className="modal_container flex items-center w-full min-h-screen justify-center">
            <h1 className='text-[5rem] text-blue-400 font-medium'>Modal Tutorial with React Portals 🚀</h1>
            <button onClick={handleModal}>Open Modal</button>
            {
                openModal && <ModalBox title="Hello World">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ullam inventore temporibus commodi sapiente, molestiae voluptates facere repellat nisi laudantium dolorum minima! Magnam corrupti soluta totam incidunt nesciunt quisquam libero.</p>
                </ModalBox>
            }
        </div>
    )
}

export default ModalBoxTutorial;