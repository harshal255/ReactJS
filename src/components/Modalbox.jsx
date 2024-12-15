import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"


import React, { useContext, useRef } from 'react'
import { userContext } from "../contexts/userContext";
import UserForm from "./UserForm";

const ModalBox = ({ children, ...user }) => {
    const { updateUser } = useContext(userContext);
    const closeDialog = useRef(null);
    const { id, name, username, password, email } = { ...user };
    const initialUserData = { email: email, name: name, username: username, password: password };
    const initialValidationData = { email: 1, name: 1, username: 1, password: 1 };

    const submitFunc = (userData) => {
        console.log("user updated successfully", userData);
        updateUser(id, userData);
        closeDialog.current?.click();
    }


    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you want to edit user?</DialogTitle>
                    <UserForm initialUserData={initialUserData} initialValidationData={initialValidationData} submitBtn={"Update User"} submitFunc={submitFunc} />
                </DialogHeader>
                <DialogClose ref={closeDialog} className="w-[1rem]" />
            </DialogContent>
        </Dialog>
    )
}



export default ModalBox