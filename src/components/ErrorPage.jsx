import { useContext, useEffect } from "react";
import React from "./React";
import { modalContext } from "../contexts/modalContext";
import ModalBox from "./Customs/ModalBox";


const ErrorPage = ({ error, children }) => {
    const { openModal, handleModal } = useContext(modalContext);
    console.log(children);
    // useEffect(() => {
    //     handleModal();
    // }, [error]);

    return (
        <>
            {children}
            {openModal && <ModalBox>
                <div className="flex flex-col gap-10">
                    <h1 className="text-4xl text-red-500 font-medium">Error Boundaries</h1>
                </div>
            </ModalBox>}
        </>

    );
};

export default ErrorPage;