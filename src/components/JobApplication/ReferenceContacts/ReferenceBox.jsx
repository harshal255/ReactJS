import { useState, useEffect } from 'react';
import {  checkValidationAccordingToInputType } from '../../../utils/validations';

const ReferenceBox = ({ title, referenceContact, setReferenceContact, validReferenceContact, setValidReferenceContact }) => {
    const validation = {
        personName: {
            type: "non-empty",
            error: "company name should not empty."
        },
        contactNo: {
            type: "regex",
            regex: new RegExp(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/),
            error: "Please Enter Correct Phone No"
        },
        relationship: {
            type: "non-empty",
            error: "designation should not empty."
        }
    };

    const [refObj, setRefObj] = useState({ personName: referenceContact[title]?.personName ?? '', contactNo: referenceContact[title]?.contactNo ?? '', relationship: referenceContact[title]?.relationship ?? '' });
    const [validRefObj, setValidRefObj] = useState({ personName: validReferenceContact[title]?.personName || 1, contactNo: validReferenceContact[title]?.contactNo || 1, relationship: validReferenceContact[title]?.relationship || 1 });

    const handleInput = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "contactNo") value = value.replace(/\D/g, "");
        checkValidationAccordingToInputType(validation[name]["type"], setValidRefObj, validation, name, value);
        setRefObj((prevData => ({ ...prevData, [name]: value })));
    }

    useEffect(() => {
        setReferenceContact((prevData) => ({ ...prevData, [title]: refObj }));
    }, [refObj]);

    useEffect(() => {
        setValidReferenceContact((prevData) => ({ ...prevData, [title]: validRefObj }))
    }, [validRefObj]);
    
    return (
        <div className="flex items-center gap-5 justify-between text-lg">
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="personName" className='text-nowrap'>Person Name :</label>
                <input value={refObj.personName} type="text" name='personName' id='personName' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {validReferenceContact[title]?.personName === 0 && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.personName.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="contactNo" className=' text-nowrap'>Contact Number :</label>
                <input value={refObj.contactNo} type="text" name='contactNo' id='contactNo' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {validReferenceContact[title]?.contactNo === 0 && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.contactNo.error}`}</span>}
            </div>
            <div className='relative flex items-center gap-5 w-full justify-between'>
                <label htmlFor="relationship" className='text-nowrap'>Relation :</label>
                <input value={refObj.relationship} type="text" name='relationship' id='relationship' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                {validReferenceContact[title]?.relationship === 0 && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.relationship.error}`}</span>}
            </div>
        </div>
    )
}

export default ReferenceBox;