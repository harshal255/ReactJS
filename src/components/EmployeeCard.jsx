import React, { useContext } from 'react'
import { Edit } from './Icons/Edit'
import { Trash2 } from './Icons/Trash2'
import { employeeContext } from '../contexts/jobApplicationContext'
import { useNavigate } from 'react-router-dom'
import SkillsCard from './JobApplication/WorkExperiences/SkillsCard'

const EmployeeCard = ({ employee }) => {
    const { deleteEmployeeModal } = useContext(employeeContext);
    const navigate = useNavigate();
    const { firstName, lastName, designation, email, phone } = { ...employee.basicDetails };
    const { location, noticePeriod, expectedCTC, currentCTC, department } = { ...employee.preference };
    return (
        employee && (<div className='relative bg-zinc-900 w-full rounded-lg p-12 border border-orange-500 text-xl grid grid-cols-3 gap-10 place-items-center '>
            <div className="information flex flex-col gap-3">
                <h1 className='text-yellow-400 text-2xl font-semibold'>Basic Details</h1>
                <span className="capitalize"> Name : {firstName.concat(" ").concat(lastName)}</span>
                <span className="capitalize"> Designation : {designation}</span>
                <span> Email : {email}</span>
                <span className="capitalize"> Phone No : {phone}</span>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='text-yellow-400 text-2xl font-semibold my-2'>{firstName}'s Skills : </h1>
                {
                    Object.keys(employee.workExperience).map(el => <SkillsCard skills={employee.workExperience[el].skills} key={el} />)
                }
            </div>

            <div className="preference flex flex-col gap-3">
                <h1 className='text-yellow-400 text-2xl font-semibold'>Preference</h1>
                <span className="capitalize"> Location : {location}</span>
                <span className="capitalize"> Notice Period : {noticePeriod}</span>
                <span className="capitalize"> Expected CTC : {expectedCTC}</span>
                <span className="capitalize"> Current CTC : {currentCTC}</span>
                <span className="capitalize"> Department : {department}</span>
            </div>
            <span className="flex items-center gap-3 absolute top-2 right-5">
                <button onClick={() => navigate(`/job-application/edit-employee/${employee.id}`)} className='cursor-pointer z-0 text-lg p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold'>
                    <Edit />
                </button>
                <button onClick={() => deleteEmployeeModal(employee.id)} className='cursor-pointer z-0 text-lg p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold'><Trash2 /></button>
            </span>
        </div>)

    )
}

export default EmployeeCard;