import { createContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from "@/components/ui/sonner";
import { config } from '../../config';

export const userContextApi = createContext({
    users: [],
    addUser: (user) => { },
    deleteUser: (id) => { },
    updateUser: (id, user) => { },
});

const UserContextApiProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            let res = await fetch(`${config.server}/user-lists`);
            if (!res.ok) throw new Error();
            const { users } = await res.json();
            return setUsers(users);
        } catch (error) {
            console.log(error.toString());
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    const addUser = async (user) => {
        try {
            const res = await fetch(`${config.server}/add-user`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            if (!res.ok) throw new Error();
            toast(`Hello ${user.name}! your form has been submitted`, {
                description: new Date().toLocaleString(),
                action: {
                    label: "✔️",
                    onClick: () => console.log("Undo"),
                },
            })
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async (id) => {
        try {
            const res = await fetch(`${config.server}/delete-user/${id}`, {
                method: 'DELETE'
            })
            if (!res.ok) throw new Error();
            toast(`User Deleted Successfully`, {
                description: new Date().toLocaleString(),
                action: {
                    label: "✔️",
                    onClick: () => console.log("Undo"),
                },
            })
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }
    const updateUser = async ({ id, ...user }) => {
        try {
            const res = await fetch(`${config.server}/update-user/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            if (!res.ok) throw new Error();
            toast(`Hello ${user.name}! your form has been modified`, {
                description: new Date().toLocaleString(),
                action: {
                    label: "✔️",
                    onClick: () => console.log("Undo"),
                },
            })
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    return <userContextApi.Provider value={{ users, addUser, deleteUser, updateUser }}>{children}<Toaster /></userContextApi.Provider>
}
export default UserContextApiProvider