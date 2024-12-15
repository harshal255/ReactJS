import { useContext } from "react";
import { createPortal } from "react-dom";
import { modalContext } from "../../contexts/modalContext";
import "../../styles/customModal.css";

const BackDrop = ({ children }) => {
    const { closeModal } = useContext(modalContext);

    return createPortal(
        <div className='backdrop' onClick={closeModal}>
            {children}
        </div>,
        document.getElementById('portal')
    )
}

export default BackDrop;