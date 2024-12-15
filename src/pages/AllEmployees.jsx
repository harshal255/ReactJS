import React, { useContext } from 'react'
import { employeeContext } from '../contexts/jobApplicationContext';
import EmployeeCard from '../components/EmployeeCard';

const AllEmployees = () => {
    const { employees } = useContext(employeeContext);
    // console.log(employees);
    return (
        employees.length > 0 ? (<div className='flex flex-col gap-10 items-center w-full min-h-screen justify-center'>
            <h1 className='text-4xl font-semibold text-yellow-400'>List of All Employees</h1>
            <div className='w-full grid grid-cols-1 gap-5 place-items-center'>
                {Array.from(employees).sort((a, b) => a.id - b.id).map((employee, i) => <EmployeeCard key={employee.id || i} employee={employee} />)}
            </div>
        </div>) : <div className='flex flex-col gap-10 items-center w-full min-h-screen justify-center text-4xl font-semibold text-yellow-500'>Add Employees to see </div>
    )
}

export default AllEmployees;