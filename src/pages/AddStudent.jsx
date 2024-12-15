import React, { useContext } from 'react'
import WrapperForAddStudent from '../styles/AddStudent';
import StudentForm from '../components/StudentForm';
import { studentContext } from '../contexts/studentContext';



const AddStudent = () => {
  const { addStudent } = useContext(studentContext);

  return (
    <WrapperForAddStudent>
      <h1> Add Student</h1>
      <StudentForm onSubmit={addStudent} />
    </WrapperForAddStudent>

  )
}

export default AddStudent