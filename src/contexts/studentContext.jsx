import axios from "axios";
import { config } from "../../config";
import { createContext, useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";


export const studentContext = createContext({
    students: [],
    addStudent: (student) => { },
    deleteStudent: (id) => { },
    updateStudent: (student, id) => { }
});

const StudentContextProvider = ({ children }) => {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    const getStudents = async () => {
        try {
            const res = await axios.get(`${config.server}/student-lists`);
            return setStudents(res.data.students);
        } catch (error) {
            setStudents([]);
        }
    }

    const getStudentDetails = async (id) => {
        try {
            const res = await axios.get(`${config.server}/student-details/${id}`);

            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    const addStudent = async (student) => {
        try {
            await axios.post(`${config.server}/add-student`, { ...student });
            toast(`Hello ${student.name}! your form has been submitted`, {
                description: new Date().toLocaleString(),
                action: {
                    label: "✔️",
                    onClick: () => console.log("Undo"),
                },
            });
            getStudents();
            setTimeout(() => {
                navigate(`/function-based/all-students`);
            }, 1200);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteStudent = async (id) => {
        try {
            await axios.delete(`${config.server}/delete-student/${id}`);
            toast(`Student deleted Successfully`, {
                description: new Date().toLocaleString(),
                action: {
                    label: "✔️",
                    onClick: () => console.log("Undo"),
                },
            })
            getStudents();
        } catch (error) {
            console.log(error);
        }
    }
    const updateStudent = async (student, id) => {
        try {
            await axios.put(`${config.server}/update-student/${id}`, { ...student });
            toast(`${student.name} updated Successfully`, {
                description: new Date().toLocaleString(),
                action: {
                    label: "✔️",
                    onClick: () => console.log("Undo"),
                },
            })
            getStudents();
            setTimeout(() => {
                navigate(`/function-based/all-students`);
            }, 1200);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getStudents();
    }, [])


    return <studentContext.Provider value={{ students, getStudentDetails, addStudent, deleteStudent, updateStudent }}>
        {children}<Toaster />
    </studentContext.Provider>
}

export default StudentContextProvider;
