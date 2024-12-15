import { useContext } from "react";
import React from "../components/React";
import { userContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";



const AddUser = () => {
    const initialUserData = { email: "", name: "", username: "", password: "" };
    const initialValidationData = { email: 1, name: 1, username: 1, password: 1 };
    const { addUser } = useContext(userContext);
    const navigate = useNavigate();

    const submitFunc = (userData) => {
        addUser({ ...userData });
        setTimeout(() => {
            navigate("/function-based/all-users");
        }, 900);
    }

    return (
        <div className='flex flex-col gap-3 min-h-screen items-center justify-center w-full'>
            <div className="border-2 border-gray-300 p-10 rounded-2 w-[50rem] h-[50rem]">
                <div className="flex items-center justify-center flex-col mb-10">
                    <React />
                    <span className='text-blue-500 font-semibold  text-center text-2xl'>Add User.</span>
                </div>
                <UserForm initialUserData={initialUserData} initialValidationData={initialValidationData} submitBtn={"Add User"} submitFunc={submitFunc} />
            </div>
        </div>
    )
}

export default AddUser;
