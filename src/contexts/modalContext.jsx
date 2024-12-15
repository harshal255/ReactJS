import { createContext, useState } from "react";
import ModalBox from "../components/Customs/ModalBox";
const htmlNode = document.getElementsByTagName('html')[0];

export const modalContext = createContext({
    openModal: false,
    handleModal: () => { },
});

const ModalContextProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', msg: '', data: [] });

    const handleModal = () => {
        setOpenModal(!openModal);
        scrollTo(0, 0);
        htmlNode.style.height = "100vh";
        htmlNode.style.overflow = "hidden";
    }

    const handleModalWithCustomTitle = (title, msg, data) => {
        setModalContent({ title, msg, data });
        setOpenModal2(!openModal2);
        scrollTo(0, 0);
        htmlNode.style.height = "100vh";
        htmlNode.style.overflow = "hidden";
    }

    const closeModal = () => {
        setOpenModal(false);
        setOpenModal2(false);
        setModalContent({ title: '', msg: '', data: [] });
    }
    return <modalContext.Provider value={{ openModal, handleModal, handleModalWithCustomTitle, closeModal,setOpenModal }}>
        {children}
        {openModal2 && <ModalBox title={modalContent.title}>
            <p className='text-3xl font-semibold text-yellow-500'>
                {modalContent.msg}
            </p>
            <div className="flex flex-col gap-5 items-center justify-center">
                {
                    modalContent.data.length > 0 && modalContent.data.map((el, i) => {
                        return <span key={i + 1}>{el}</span>
                    })
                }
            </div>

            <button onClick={() => closeModal()} className='bg-blue-600 px-10 py-3 rounded-lg'>Okay</button>
        </ModalBox>
        }
    </modalContext.Provider>

}

export default ModalContextProvider;