import { useNavigate, useParams } from "react-router-dom";
import React from "../components/React"
import UserForm from "../components/UserForm";
import { useContext, useEffect, useState } from "react";
import { userContextApi } from "../contexts/userContextApi";

const EditUserAPI = () => {
    let { userId } = useParams();
    userId = +userId;
    const { updateUser, users } = useContext(userContextApi);
    const [user, setUser] = useState(null);
    const initialValidationData = { email: 1, name: 1, username: 1, password: 1 };
    const navigate = useNavigate();

    console.log({ users });
    const findUserById = (id) => users.find((user) => id === user.id);

    useEffect(() => {
        setUser(findUserById(userId));
    }, [users])
    console.log(user);
    const submitFunc = (userData) => {
        console.log(userData);
        updateUser({ ...userData });
        setTimeout(() => {
            navigate("/api-integration/all-users");
        }, 900);
    }


    return (
        <div className='flex flex-col gap-3 min-h-screen items-center justify-center w-full'>
            <div className="border-2 border-gray-300 p-10 rounded-2 w-[50rem] h-[50rem]">
                <div className="flex items-center justify-center flex-col mb-10">
                    <React />
                    <span className='text-blue-500 font-semibold  text-center text-2xl'>Edit in the database.</span>
                </div>
                {user ? <UserForm initialUserData={user} initialValidationData={initialValidationData} submitBtn={"Edit User"} submitFunc={submitFunc} /> : <>Loading</>}

            </div>
        </div>
    )
}

export default EditUserAPI