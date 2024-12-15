import React, { useEffect, useState } from 'react'
import { checkValidationAccordingToInputType } from '../../../utils/validations';
import { IoTrashOutline } from 'react-icons/io5';

const EduBox2 = ({ title, educationDetails, setEducationDetails, validEducationDetails, setValidEducationDetails, educationApi, removeFields }) => {
    const validation = {
        eduType: {
            type: "non-empty",
            error: "education type should not empty"
        },
        nameOfBoard: {
            type: "non-empty",
            error: "Name of board should not empty"
        },
        passingYear: {
            type: "year",
            error: "Invalid Year (example: 2023)"
        },
        percentage: {
            type: "percentage",
            error: "Invalid Percentage (example:85)"
        }
    };



    const [eduObj, setEduObj] = useState({ eduType: educationDetails[title]?.eduType ?? '', nameOfBoard: educationDetails[title]?.nameOfBoard ?? '', passingYear: educationDetails[title]?.passingYear ?? '', percentage: educationDetails[title]?.percentage ?? '' });
    const [validEduObj, setValidEduObj] = useState({ eduType: validEducationDetails[title]?.eduType ?? 1, nameOfBoard: validEducationDetails[title]?.nameOfBoard ?? 1, passingYear: validEducationDetails[title]?.passingYear ?? 1, percentage: validEducationDetails[title]?.percentage ?? 1 });

    // console.log(validEducationDetails[title]?.nameOfBoard ?? 1);

    const handleInput = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "passingYear" || name === "percentage") value = value.replace(/\D/g, "");
        checkValidationAccordingToInputType(validation[name]["type"], setValidEduObj, validation, name, value);
        setEduObj((prevData => ({ ...prevData, [name]: value })));
    }

    useEffect(() => {
        setEducationDetails((prevData) => ({ ...prevData, [title]: eduObj }));
    }, [eduObj]);

    useEffect(() => {
        setValidEducationDetails((prevData) => ({ ...prevData, [title]: validEduObj }))
    }, [validEduObj]);
    return (
        <div className="relative flex flex-col gap-5">
            <h1 className='text-2xl font-semibold text-zinc-200'>{title}</h1>
            <div className="relative flex items-center gap-2 w-full justify-between">
                <label htmlFor="eduType" className='text-nowrap'>Education Type :</label>
                <select value={educationDetails[title]?.eduType} name='eduType' id='eduType' className="cursor-pointer px-8 py-2 border border-gray-300 outline-none p-2 rounded-lg w-[70%]" onChange={(e) => handleInput(e)}>
                    <option value="" selected="selected" disabled="disabled">-- select one --</option>
                    {educationApi.map(education => <option key={education.id} value={education.title} disabled={education.used === 1}>{education.title}</option>)}

                </select>
                {!validEducationDetails[title]?.eduType && <span className="absolute -bottom-5 left-[23rem] text-red-500 text-sm">{`${validation.eduType.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-2 w-full justify-between'>
                <label htmlFor="nameOfBoard" className=''>Name of Board :</label>
                <input value={educationDetails[title]?.nameOfBoard} type="text" name='nameOfBoard' id='nameOfBoard' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {!validEducationDetails[title]?.nameOfBoard && <span className="absolute -bottom-5 left-[23rem] text-red-500 text-sm">{`${validation.nameOfBoard.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-2 w-full justify-between'>
                <label htmlFor="passingYear" className=''>Passing Year :</label>
                <input value={educationDetails[title]?.passingYear} type="text" name='passingYear' id='passingYear' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {!validEducationDetails[title]?.passingYear && <span className="absolute -bottom-5 left-[23rem] text-red-500 text-sm">{`${validation.passingYear.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-2 w-full justify-between'>
                <label htmlFor="percentage" className=''>Percentage :</label>
                <input value={educationDetails[title]?.percentage} type="text" name='percentage' id='percentage' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {!validEducationDetails[title]?.percentage && <span className="absolute -bottom-5 left-[23rem] text-red-500 text-sm">{`${validation.percentage.error}`}</span>}
            </div>
            <button onClick={() => { removeFields(title-1) }} type='button' className='cursor-pointer absolute right-1 top-0'><IoTrashOutline className='h-10 w-10 text-yellow-400 p-2 border border-yellow-400 rounded-full' />  </button>
        </div>
    )
}

export default EduBox2;