import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { modalContext } from "./modalContext";
import ModalBox from "../components/Customs/ModalBox";

export const employeeContext = createContext({
    count: null,
    employees: [],
    addEmployee: (employee) => { },
    deleteEmployee: (id) => { },
    updateEmployee: (employee, id) => { }
});

const EmployeeContextProvider = ({ children }) => {

    const [count, setCount] = useState(0);
    const [pageCount, setPageCount] = useState(1);
    const { employees, setEmployees, setToLS } = useLocalStorage("employee-key");
    const navigate = useNavigate();
    const { openModal, handleModal } = useContext(modalContext);
    const [id, setId] = useState(null);

    const addEmployee = (employee) => {
        setToLS([...employees, { ...employee, id: count }]);
        setEmployees((prevData) => ([...prevData, { ...employee, id: count }]));
        setCount((prevData => prevData + 1));
        setTimeout(() => {
            navigate(`/all-employees`);
        }, 1200);
    }

    const deleteEmployeeModal = (id) => {
        setId(id);
        handleModal();
    }

    const deleteEmployee = (id) => {
        const localEmployees = employees.filter(employee => +employee.id !== +id);
        setEmployees(localEmployees);
        setToLS(JSON.stringify(localEmployees));
        handleModal();
    }

    const updateEmployee = (employee, id) => {
        setPageCount(1);
        const localEmployees = employees.filter(employee => +employee.id !== +id);
        setEmployees([...localEmployees, { ...employee, id: +id }]);
        setToLS([...localEmployees, { ...employee, id: +id }]);
        setTimeout(() => {
            navigate(`/all-employees`);
        }, 1200);
    }

    return <employeeContext.Provider value={{ employees, addEmployee, updateEmployee, pageCount, setPageCount, deleteEmployeeModal }}>
        {children}
        {openModal && <ModalBox>
            <div className="flex flex-col gap-10">
                <h1 className="text-4xl text-red-500 font-medium">Are You want to delete this employees data..?</h1>
                <div className="flex items-center justify-evenly w-full">
                    <button className="px-10 py-3 bg-red-300 rounded-lg w-[10rem] text-zinc-900" onClick={handleModal}>Cancel</button>
                    <button className="px-10 py-3 bg-green-300 rounded-lg w-[10rem] text-zinc-900" onClick={() => { deleteEmployee(id) }}>Yes</button>
                </div>
            </div>
        </ModalBox>}
    </employeeContext.Provider>
}

export default EmployeeContextProvider;