import React from 'react'
import EduBox from './EducationDetails/EduBox'

const EducationDetails = ({ educationDetails, setEducationDetails, validEducationDetails, setValidEducationDetails }) => {

    return (
        <section className="form2 min-h-[800px] flex flex-col gap-10 p-20 border rounded-lg w-full">
            <h2 className='text-3xl font-semibold text-zinc-200'>Education Details</h2>
            {/* <span className='text-xl italic'>You have to fill up <span className='text-green-300'>SSC Form.</span>  either <span className='text-green-300'>SSC + HSC Form.</span> either <span className='text-green-300'>SSC + HSC + Bachlore Form.</span>  either <span className='text-green-300'>SSC + HSC + Bachlore + Master Form.</span> </span> */}
            <div className='grid grid-cols-2 gap-10 w-full text-xl'>
                <EduBox educationDetails={educationDetails} setEducationDetails={setEducationDetails} key={"SSC RESULTS"} title={"SSC RESULTS"} validEducationDetails={validEducationDetails} setValidEducationDetails={setValidEducationDetails} />
                <EduBox educationDetails={educationDetails} setEducationDetails={setEducationDetails} key={"HSC/DIPLOMA RESULTS"} title={"HSC/DIPLOMA RESULTS"} validEducationDetails={validEducationDetails} setValidEducationDetails={setValidEducationDetails} />
                <EduBox educationDetails={educationDetails} setEducationDetails={setEducationDetails} key={"BACHLORE DEGREE"} title={"BACHLORE DEGREE"} validEducationDetails={validEducationDetails} setValidEducationDetails={setValidEducationDetails} />
                <EduBox educationDetails={educationDetails} setEducationDetails={setEducationDetails} key={"MASTER DEGREE"} title={"MASTER DEGREE"} validEducationDetails={validEducationDetails} setValidEducationDetails={setValidEducationDetails} />
            </div>
        </section>
    )
}

export default EducationDetails
