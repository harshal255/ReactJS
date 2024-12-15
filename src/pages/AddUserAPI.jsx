import { useNavigate } from "react-router-dom";
import React from "../components/React"
import UserForm from "../components/UserForm";
import { useContext } from "react";
import { userContextApi } from "../contexts/userContextApi";

const AddUserAPI = () => {
  const initialUserData = { email: "", name: "", username: "", password: "" };
  const initialValidationData = { email: 1, name: 1, username: 1, password: 1 };
  const { addUser } = useContext(userContextApi);
  const navigate = useNavigate();

  const submitFunc = (userData) => {
    addUser({ ...userData });
    setTimeout(() => {
      navigate("/api-integration/all-users");
    }, 900);
  }

  return (
    <div className='flex flex-col gap-3 min-h-screen items-center justify-center w-full'>
      <div className="border-2 border-gray-300 p-10 rounded-2 w-[50rem] h-[50rem]">
        <div className="flex items-center justify-center flex-col mb-10">
          <React />
          <span className='text-blue-500 font-semibold  text-center text-2xl'>Add User in the database.</span>
        </div>
        <UserForm initialUserData={initialUserData} initialValidationData={initialValidationData} submitBtn={"Add User"} submitFunc={submitFunc} />

      </div>
    </div>
  )
}

export default AddUserAPI