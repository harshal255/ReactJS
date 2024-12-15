import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import BackDrop from './BackDrop';
import { IoMdClose } from "react-icons/io";
import { modalContext } from '../../contexts/modalContext';
const PortalNode = document.getElementById('portal');


const ModalBox = ({ children, title }) => {
    const { openModal, openModal2, closeModal } = useContext(modalContext);
    return createPortal(
        <BackDrop>
            <div className={`modal relative bg-zinc-900 rounded-xl flex flex-col gap-5 !p-10 z-50 animate-zoom-in ${openModal || openModal2 && '!animate-zoom-in'}`} onClick={(e) => e.stopPropagation()}>
                <h3 className='text-xl capitalize'>{title}</h3>
                {children}
                <IoMdClose className='cursor-pointer text-white text-3xl absolute top-5 right-5' onClick={closeModal}>Close</IoMdClose>
            </div>
        </BackDrop>,
        PortalNode
    )

}

export default ModalBox