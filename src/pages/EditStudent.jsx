import React, { useContext, useEffect, useState } from 'react'
import WrapperForAddStudent from '../styles/AddStudent';
import StudentForm from '../components/StudentForm';
import { studentContext } from '../contexts/studentContext';
import { useParams } from 'react-router-dom';



const EditStudent = () => {
  const { studentId } = useParams();
  const { getStudentDetails, updateStudent } = useContext(studentContext);
  const [initialValue, setInitialValue] = useState({})
  const type = "edit";

  const fetchStudentDetails = async () => {
    const data = await getStudentDetails(studentId);
    setInitialValue(data);
  }
  useEffect(() => {
    fetchStudentDetails();
  }, [studentId])

  return (
    <WrapperForAddStudent>
      <h1> Edit Student</h1>
      <StudentForm onSubmit={(data) => { updateStudent(data, +studentId) }} initialValue={initialValue} type={type} />
    </WrapperForAddStudent>

  )
}

export default EditStudent