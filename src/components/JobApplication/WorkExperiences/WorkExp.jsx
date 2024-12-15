import React, { useEffect, useState } from 'react'
import { checkValidationAccordingToInputType } from '../../../utils/validations';
import { IoAddCircle } from "react-icons/io5";
import SkillsCard from './SkillsCard';

const WorkExp = ({ title, workExperience, setWorkExperience, validWorkExperience, setValidWorkExperience }) => {
    const validation = {
        companyName: {
            type: "non-empty",
            error: "company name should not empty"
        },
        designation: {
            type: "non-empty",
            error: "designation should not empty"
        },
        from: {
            type: "regex",
            regex: new RegExp(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/),
            error: "Please Enter correct Date."
        },
        to: {
            type: "regex",
            regex: new RegExp(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/),
            error: "Please Enter correct Date."
        },
        skills: {
            type: "comma-separate",
            minValue: 5,
            error: "You have to add skills by comma separate with non duplicate value.(at least 5)."
        }
    };
    const [workObj, setWorkObj] = useState({ companyName: workExperience[title]?.companyName ?? '', designation: workExperience[title]?.designation ?? '', from: workExperience[title]?.from ?? '', to: workExperience[title]?.to ?? '', skills: workExperience[title]?.skills ?? '' });
    const [validWorkObj, setValidWorkObj] = useState({ companyName: validWorkExperience[title]?.companyName || 1, designation: validWorkExperience[title]?.designation || 1, from: validWorkExperience[title]?.from || 1, to: validWorkExperience[title]?.to || 1, skills: validWorkExperience[title]?.skills || 1 });
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        checkValidationAccordingToInputType(validation[name]["type"], setValidWorkObj, validation, name, value);
        if (name === "skills") {
            setWorkObj((prevData => ({ ...prevData, [name]: [...new Set(value.toUpperCase().split(","))] })))
        } else {
            setWorkObj((prevData => ({ ...prevData, [name]: value })));
        }
    }

    useEffect(() => {
        setWorkExperience((prevData) => ({ ...prevData, [title]: workObj }));
    }, [workObj]);

    useEffect(() => {
        setValidWorkExperience((prevData) => ({ ...prevData, [title]: validWorkObj }))
    }, [validWorkObj]);
    // console.log(validWorkObj, validWorkExperience, workObj, workExperience);

    return (
        <div className="grid grid-cols-2 w-full gap-10">
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="companyName" className=''>Company Name :</label>
                <input value={workObj?.companyName} type="text" name='companyName' id='companyName' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {validWorkExperience[title]?.companyName === 0 && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.companyName.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="designation" className=''>Designation :</label>
                <input value={workObj?.designation} type="text" name='designation' id='designation' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {validWorkExperience[title]?.designation === 0 && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.designation.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="from" className=' text-nowrap'>From :</label>
                <input value={workObj?.from} onClick={(e) => (e.target.showPicker())} type="date" name='from' id='from' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {validWorkExperience[title]?.from === 0 && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.from.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="to" className='text-nowrap'>To :</label>
                <input value={workObj?.to} onClick={(e) => (e.target.showPicker())} type="date" name='to' id='to' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {validWorkExperience[title]?.to === 0 && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.to.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-5 w-full justify-between col-span-2'>
                <label htmlFor="skills" className='text-nowrap'>Skills :</label>
                <input value={workObj?.skills} type="skills" name='skills' id='skills' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {/* <button type='button' className='text-4xl text-blue-500 cursor-pointer'><IoAddCircle /></button> */}
                <div>
                    
                </div>
                {validWorkExperience[title]?.skills === 0 && <span className="absolute -bottom-8 left-[11.5rem] text-red-500 text-sm">{`${validation.skills.error}`}</span>}
            </div>
            <SkillsCard skills={workObj?.skills ? workObj?.skills : []} />
        </div>
    )
}

export default WorkExp