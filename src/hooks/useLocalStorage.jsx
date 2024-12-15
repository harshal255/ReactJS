import { useState } from "react";

const useLocalStorage = (localStorageKey) => {
    const dataFromStorage = localStorage.getItem(localStorageKey);
    const [employees, setEmployees] = useState(dataFromStorage ? JSON.parse(dataFromStorage) : []);

    return {
        employees,
        setEmployees,
        setToLS: (value) => {
            localStorage.setItem(localStorageKey, JSON.stringify(value));
        }
    }
}

export default useLocalStorage;