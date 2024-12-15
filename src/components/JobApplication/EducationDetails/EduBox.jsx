import React, { useEffect, useState } from 'react'
import { checkValidationAccordingToInputType } from '../../../utils/validations';

const EduBox = ({ title, educationDetails, setEducationDetails, validEducationDetails, setValidEducationDetails }) => {
    const validation = {
        nameOfBoard: {
            type: "non-empty",
            error: "Name of board should not empty"
        },
        passingYear: {
            type: "year",
            error: "Invalid Year (example: 2023)"
        },
        percentage: {
            type: "regex",
            regex: new RegExp(/\b(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%/),
            error: "Invalid Percentage (example:85%)"
        }
    };

    const [eduObj, setEduObj] = useState({ nameOfBoard: educationDetails[title]?.nameOfBoard ?? '', passingYear: educationDetails[title]?.passingYear ?? '', percentage: educationDetails[title]?.percentage ?? '' });
    const [validEduObj, setValidEduObj] = useState({ nameOfBoard: validEducationDetails[title]?.nameOfBoard ?? 1, passingYear: validEducationDetails[title]?.passingYear ?? 1, percentage: validEducationDetails[title]?.percentage ?? 1 });

    // console.log(validEducationDetails[title]?.nameOfBoard ?? 1);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
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
        <div className="flex flex-col gap-10">
            <h1 className='text-2xl font-semibold text-zinc-200'>{title}</h1>
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="nameOfBoard" className=''>Name of Board :</label>
                <input value={eduObj?.nameOfBoard} type="text" name='nameOfBoard' id='nameOfBoard' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {!validEducationDetails[title]?.nameOfBoard && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.nameOfBoard.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="passingYear" className=''>Passing Year :</label>
                <input value={eduObj?.passingYear} type="text" name='passingYear' id='passingYear' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {!validEducationDetails[title]?.passingYear && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.passingYear.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="percentage" className=''>Percentage :</label>
                <input value={eduObj?.percentage} type="text" name='percentage' id='percentage' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {!validEducationDetails[title]?.percentage && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.percentage.error}`}</span>}
            </div>
        </div>
    )
}

export default EduBox