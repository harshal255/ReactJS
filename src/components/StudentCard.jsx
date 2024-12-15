import { useNavigate } from 'react-router-dom';
import { Edit } from './Icons/Edit';
import { Trash2 } from './Icons/Trash2';
import { useContext } from 'react';
import { studentContext } from '../contexts/studentContext';
import WrapperStudentCard from '../styles/StudentCard';

const StudentCard = (student) => {
    const { id, name, username, email, password } = { ...student };
    const { deleteStudent } = useContext(studentContext);

    const navigate = useNavigate();
    return (
        <WrapperStudentCard>
            <div className='row'>
                <div className='circle'>{id}</div>
                <div>
                    <button className='circle' onClick={() => navigate(`/function-based/edit-student/${id}`)}><Edit /></button>
                    <button className='circle' onClick={() => deleteStudent(id)}><Trash2 /></button>
                </div>
            </div>
            <div className='student_details'>
                <div>Name : {name}</div>
                <div>Email : {email}</div>
                <div>Username : {username}</div>
                <div>Password : {password}</div>
            </div>
        </WrapperStudentCard>
    )
}

export default StudentCard