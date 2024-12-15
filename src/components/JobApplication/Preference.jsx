import React from 'react'
import {  checkValidationAccordingToInputType } from '../../utils/validations';

const Preference = ({ preference, setPreference, validPreference, setValidPreference }) => {
    const validation = {
        location: {
            type: "non-empty",
            error: "Location should not empty"
        },
        noticePeriod: {
            type: "non-empty",
            error: "Notice Period should not empty"
        },
        expectedCTC: {
            type: "non-empty",
            error: "Expected CTC should not empty"
        },
        currentCTC: {
            type: "non-empty",
            error: "Current CTC should not empty"
        },
        department: {
            type: "non-empty",
            error: "Department should not empty"
        }
    };
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        checkValidationAccordingToInputType(validation[name]["type"], setValidPreference, validation, name, value);
        setPreference((prevData) => ({ ...prevData, [name]: value }));
    }
    return (
        <section className="form6 min-h-[800px] flex flex-col gap-10 p-20 border rounded-lg text-lg w-full">
            <h2 className='text-3xl font-semibold text-zinc-200'>Preferances</h2>
            <div className="flex flex-col gap-10" id="preferances">
                <div className="relative flex items-center gap-5 w-full justify-between">
                    <label htmlFor="state" className='text-nowrap'>Location :</label>
                    <select value={preference?.location} name="location" id="location" className="cursor-pointer border border-gray-300 outline-none p-2 rounded-lg w-[70%]" onChange={(e) => handleInput(e)}>
                        <option></option>
                        <option value="ahmedabad">Ahmedabad</option>
                        <option value="surat">Surat</option>
                        <option value="navsari">Navsari</option>
                        <option value="rajkot">Rajkot</option>
                    </select>
                    {!validPreference.location && <span className="absolute -bottom-7 left-[22.5rem] text-red-500 text-sm">{`${validation.location.error}`}</span>}
                </div>
                <div className="relative flex items-center gap-5 w-full justify-between">
                    <label className="font-medium" htmlFor="noticePeriod">Notice period :</label>
                    <input value={preference?.noticePeriod} className="border border-gray-300 outline-none p-2 rounded-lg w-[70%]" type="text"
                        name="noticePeriod" id="noticePeriod" onChange={(e) => handleInput(e)} />
                    {!validPreference.noticePeriod && <span className="absolute -bottom-7 left-[22.5rem] text-red-500 text-sm">{`${validation.noticePeriod.error}`}</span>}
                </div>
                <div className="relative flex items-center gap-5 w-full justify-between">
                    <label className="font-medium" htmlFor="expectedCTC">Expected CTC :</label>
                    <input value={preference?.expectedCTC} className="border border-gray-300 outline-none p-2 rounded-lg w-[70%]" type="text"
                        name="expectedCTC" id="expectedCTC" onChange={(e) => handleInput(e)} />
                    {!validPreference.expectedCTC && <span className="absolute -bottom-7 left-[22.5rem] text-red-500 text-sm">{`${validation.expectedCTC.error}`}</span>}
                </div>
                <div className="relative flex items-center gap-5 w-full justify-between">
                    <label className="font-medium" htmlFor="currentCTC">Current CTC :</label>
                    <input value={preference?.currentCTC} className="border border-gray-300 outline-none p-2 rounded-lg w-[70%]" type="text"
                        name="currentCTC" id="currentCTC" onChange={(e) => handleInput(e)} />
                    {!validPreference.currentCTC && <span className="absolute -bottom-7 left-[22.5rem] text-red-500 text-sm">{`${validation.currentCTC.error}`}</span>}
                </div>
                <div className="relative flex items-center gap-5 w-full justify-between">
                    <label htmlFor="department">Choose a Department:</label>
                    <select value={preference?.department} name="department" id="department" className="cursor-pointer border border-gray-300 outline-none p-2 rounded-lg w-[70%]" onChange={(e) => handleInput(e)}>
                        <option value=""></option>
                        <option value="development">Development</option>
                        <option value="designing">Designing</option>
                        <option value="marketing">Marketing</option>
                    </select>
                    {!validPreference.department && <span className="absolute -bottom-7 left-[22.5rem] text-red-500 text-sm">{`${validation.department.error}`}</span>}
                </div>
            </div>
        </section>
    )
}

export default Preference
