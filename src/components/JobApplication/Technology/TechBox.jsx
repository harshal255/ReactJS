import React, { useEffect, useState } from 'react';
import { radioValid } from '../../../utils/validations';

const TechBox = ({ title, techStack, setTechStack, validTechnology, setValidTechnology }) => {

    const validation = {
        radio: {
            type: "radio",
            name: title,
            error:`Please select the ${title}`
        }
    };

    const [techObj, setTechObj] = useState({ level: techStack[title]?.level ?? '' });
    const [validTechObj, setValidTechObj] = useState({ level: 1 });

    const handleRadio = (e) => {
        const value = e.target.value;
        setValidTechObj((prevData) => ({ ...prevData, level: radioValid(validation.radio.name) }));
        setTechObj((prevData) => ({ ...prevData, level: value }));
    };

    useEffect(() => {
        setTechStack((prevData) => ({ ...prevData, [title]: techObj }));
    }, [techObj]);

    useEffect(() => {
        setValidTechnology((prevData) => ({ ...prevData, [title]: validTechObj }));
    }, [validTechObj]);

    // console.log("x",validTechObj);
    return (
        <div className="relative flex gap-5 text-xl">
            <span className="relative flex gap-5">
                <label htmlFor={title} className='cursor-pointer capitalize'>{title}</label>
                <input checked='checked' type="checkbox" name="technology" id={title} value={0} onChange={(e) => handleRadio(e)} />
            </span>
            <span className="relative flex gap-5">
                <label htmlFor={`${title}Beginer`} className='cursor-pointer'>Beginer </label>
                <input type="radio" id={`${title}Beginer`} name={title} value="beginer" checked={techObj?.level === 'beginer'} onChange={(e) => handleRadio(e)} />
            </span>
            <span className="relative flex gap-5">
                <label htmlFor={`${title}Mideator`} className='cursor-pointer'>Mideator</label>
                <input type="radio" name={title} id={`${title}Mideator`} value="mideator" checked={techObj?.level === 'mideator'} onChange={(e) => handleRadio(e)} />
            </span>
            <span className="relative flex gap-5">
                <label htmlFor={`${title}Expert`} className='cursor-pointer'>Expert</label>
                <input type="radio" name={title} id={`${title}Expert`} value="expert" checked={techObj?.level === 'expert'} onChange={(e) => handleRadio(e)} />
            </span>
            {!validTechnology[title]?.level && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.radio.error}`}</span>}
        </div>
    )
}

export default TechBox;