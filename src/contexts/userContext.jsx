import { createContext, useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from "@/components/ui/sonner";

export const userContext = createContext({
    users: [{
        id: 1,
        name: "Harshal Kahar",
        email: "harshalskahar389@gmail.com",
        username:"helloworld",
        password: "Harsh$05"
    }],
    addUser: (user) => { },
    deleteUser: (id) => { },
    updateUser: (id, user) => { },
});

const UserContextProvider = ({ children }) => {
    const usersFromStorage = localStorage.getItem("userkey")
    const [users, setUsers] = useState(usersFromStorage ? JSON.parse(usersFromStorage) : []);
    const addUser = (user) => {
        const localUsers = [...users, { id: users.length && users.length + 1 || 1, ...user }]
        setUsers(localUsers);
        localStorage.setItem("userkey", JSON.stringify(localUsers));
        toast(`Hello ${user.name}! your form has been submitted`, {
            description: new Date().toLocaleString(),
            action: {
                label: "✔️",
                onClick: () => console.log("Undo"),
            },
        })
    }

    const deleteUser = (id) => {
        const localUsers = users.filter(user => user.id !== id);
        setUsers(localUsers);
        localStorage.setItem("userkey", JSON.stringify(localUsers));
        toast(`User deleted Successfully`, {
            description: new Date().toLocaleString(),
            action: {
                label: "✔️",
                onClick: () => console.log("Undo"),
            },
        })
    }
    const updateUser = (id, user) => {
        const localUsers = [...users.filter(user => user.id !== id), { id, ...user }];
        setUsers(localUsers);
        localStorage.setItem("userkey", JSON.stringify(localUsers));
        toast(`Hello ${user.name}! your form has been modified`, {
            description: new Date().toLocaleString(),
            action: {
                label: "✔️",
                onClick: () => console.log("Undo"),
            },
        })
    };

    // const values = useMemo(() => ({ users, addUser, deleteUser, updateUser }), []);



    return <userContext.Provider value={{ users, addUser, deleteUser, updateUser }}>{children}<Toaster /></userContext.Provider>
}
export default UserContextProvider