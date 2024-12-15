import React, { useState } from 'react';
import { toast } from 'sonner';
import { checkeveryTrueInObject } from '../utils';


const validation = {
    email: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/, "Please enter valid email address"],
    name: [/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/, "Please enter valid name"],
    username: [/^[a-zA-Z0-9._]+$/, "Please enter valid username"],
    password: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!*_])[A-Za-z\d@#$%^&!*_]{8,}$/, "Password must contain at least 8 digit including at least 1 special character, 1 number , 1 Uppercase character and 1 lower case character"],
};


const UserForm = ({ initialUserData, initialValidationData, submitBtn, submitFunc }) => {
    const [userData, setUserData] = useState(initialUserData);
    const [validUser, setValidUser] = useState(initialValidationData);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (!validation[name][0].test(value)) {
            setValidUser({ ...validUser, [name]: 0 })
            console.log(validation[name][1], value);
        } else {
            setValidUser({ ...validUser, [name]: 1 });
        }
        setUserData({ ...userData, [name]: value });
    }


    const submitForm = (e) => {
        e.preventDefault();
        if (!checkeveryTrueInObject(validUser) || !checkeveryTrueInObject(userData)) {
            console.log("validation error");
            toast("Validation error!", {
                description: new Date().toLocaleString(),
                action: {
                    label: "❌",
                    onClick: () => console.log("Undo"),
                },
            })

        } else {
            submitFunc(userData);
            setTimeout(() => {
                setUserData(initialUserData);
            }, 1200);
        }
    }
    return (
        <form className="p-10 text-white flex gap-5 flex-col" onSubmit={(e) => submitForm(e)}>
            <div className="flex flex-col gap-1">
                <input type="text" name='email' id='email' className={`${validUser.email ? "border-gray-500" : "border-red-500"} border px-8 py-2 rounded-lg outline-none`} placeholder="Email" value={userData.email} onChange={(e) => handleInput(e)} />
                {!validUser.email && <span className="text-red-500 text-sm">{`${validation.email[1]}`}</span>}

            </div>
            <div className="flex flex-col gap-1">
                <input type="text" name='name' id='name' className={`${validUser.name ? "border-gray-500" : "border-red-500"} border px-8 py-2 rounded-lg outline-none`} placeholder="Full Name" value={userData.name} onChange={(e) => handleInput(e)} />
                {!validUser.name && <span className="text-red-500 text-sm">{`${validation.name[1]}`}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <input type="text" name='username' id='username' className={`${validUser.username ? "border-gray-500" : "border-red-500"} border px-8 py-2 rounded-lg outline-none`} placeholder="Username" value={userData.username} onChange={(e) => handleInput(e)} />
                {!validUser.username && <span className="text-red-500 text-sm">{`${validation.username[1]}`}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <input type="text" name='password' id='password' className={`${validUser.password ? "border-gray-500" : "border-red-500"} border px-8 py-2 rounded-lg outline-none`} placeholder="Password" value={userData.password} onChange={(e) => handleInput(e)} />
                {!validUser.password && <span className="text-red-500 text-sm">{`${validation.password[1]}`}</span>}
            </div>
            <div className="flex items-center w-full justify-end">
                <button className="rounded-lg bg-blue-500 text-white px-10 py-2 hover:bg-blue-600 w-fit">{submitBtn}</button>

            </div>
        </form>
    )
}

export default UserForm