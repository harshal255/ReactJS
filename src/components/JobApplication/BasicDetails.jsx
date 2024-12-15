import React from 'react'
import { checkValidationAccordingToInputType } from '../../utils/validations';
import Cities from '../../utils/cities.json';

const BasicDetails = ({ basicDetails, setBasicDetails, validBasicDetails, setValidBasicDetails }) => {

    const validation = {
        firstName: {
            type: "non-empty",
            error: "First Name should not empty"
        },
        lastName: {
            type: "non-empty",
            error: "Last Name should not empty"
        },
        designation: {
            type: "non-empty",
            error: "Designation should not empty"
        },
        address: {
            type: "non-empty",
            error: "Address should not empty"
        },
        email: {
            type: "regex",
            regex: new RegExp(/^[a-z0-9]+@[a-z]+.[a-z]{2,3}$/),
            error: "Please Enter Correct Email"
        },
        phone: {
            type: "regex",
            regex: new RegExp(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/),
            error: "Please Enter Correct Phone No"
        },
        city: {
            type: "non-empty",
            error: "City should not empty"
        },
        zipcode: {
            type: "non-empty",
            error: "Please Enter correct zipcode."
        },
        dateOfBirth: {
            type: "valid-date",
            minAge: 18,
            maxAge: 40,
            error: `Min age 18 & max Age 40`
        },
        state: {
            type: "no-check",
            error: "state should not empty"
        },
        gender: {
            type: "radio",
            name: "gender",
            error: "Please select gender"
        },
        relationshipStatus: {
            type: "non-empty",
            error: "state should not empty"
        }
    };


    const handleInput = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "phone" || name === "zipcode") value = value.replace(/\D/g, "");
        if (name === "city") {
            setBasicDetails((prevData) => ({ ...prevData, state: Cities.find((city) => city.name === value)?.state || '' }))
            setValidBasicDetails((prevData) => ({ ...prevData, state: 1 }));
        }
        checkValidationAccordingToInputType(validation[name]["type"], setValidBasicDetails, validation, name, value);
        setBasicDetails((prevData) => ({ ...prevData, [name]: value }));
    }

    return (
        <section className="form1 min-h-[800px] flex flex-col gap-10 p-20 border rounded-lg w-full">
            <h2 className='text-3xl font-semibold text-zinc-200'>Basic Details</h2>
            <div className='grid grid-cols-2 gap-y-10 gap-x-20 w-full text-xl'>
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor="firstName" className=''>First Name :</label>
                    <input type="text" value={basicDetails.firstName} name='firstName' id='firstName' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                    {!validBasicDetails.firstName && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.firstName.error}`}</span>}
                </div>
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor="lastName" className=''>Last Name :</label>
                    <input type="text" value={basicDetails.lastName} name='lastName' id='lastName' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                    {!validBasicDetails.lastName && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.lastName.error}`}</span>}
                </div>
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor="designation" className=''>Designation :</label>
                    <input type="text" value={basicDetails.designation} name='designation' id='designation' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                    {!validBasicDetails.designation && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.designation.error}`}</span>}
                </div>
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor="address" className=''>Address :</label>
                    <textarea type="text" value={basicDetails.address} name='address' id='address' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                    {!validBasicDetails.address && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.address.error}`}</span>}
                </div>
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor="email" className=''>Email :</label>
                    <input type="text" value={basicDetails.email} name='email' id='email' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                    {!validBasicDetails.email && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.email.error}`}</span>}
                </div>
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor="text" className=''>Phone No :</label>
                    <input type="text" value={basicDetails.phone} name='phone' id='phone' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                    {!validBasicDetails.phone && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.phone.error}`}</span>}
                </div>
                <div className="relative flex items-center gap-5 w-full justify-between">
                    <label htmlFor="city" className=' text-nowrap'>City :</label>
                    <select name='city' value={basicDetails.city ? basicDetails.city : ""} id='city' className="w-[70%] border px-8 py-2 rounded-lg outline-none cursor-pointer" onChange={(e) => handleInput(e)}>
                        <option></option>
                        {
                            Cities.map(city => <option key={city.id} value={city.name} className='capitalize'>{city.name}</option>)
                        }
                    </select>
                    {!validBasicDetails.city && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.city.error}`}</span>}
                </div>
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor="state" className=''>State :</label>
                    <input disabled type="text" value={basicDetails.state} name='state' id='state' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                    {!validBasicDetails.state && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.state.error}`}</span>}
                </div>
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor="zipcode" className=''>Zip Code :</label>
                    <input type="text" value={basicDetails.zipcode} name='zipcode' id='zipcode' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                    {!validBasicDetails.zipcode && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.zipcode.error}`}</span>}
                </div>
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor="dateOfBirth" className=' text-nowrap'>Date Of Birth :</label>
                    <input onClick={(e) => (e.target.showPicker())} type="date" value={basicDetails.dateOfBirth} name='dateOfBirth' id='dateOfBirth' className='w-[70%] border px-8 py-2 rounded-lg outline-none' onChange={(e) => handleInput(e)} />
                    {!validBasicDetails.dateOfBirth && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.dateOfBirth.error}`}</span>}
                </div>

                <div className="relative flex items-center gap-5 w-full justify-between">
                    <label htmlFor="gender" className=' text-nowrap'>Gender :</label>
                    <div className='w-[70%] flex gap-5 py-2 rounded-lg outline-none'>
                        <input type="radio" id="male" name="gender" value="male" onChange={(e) => handleInput(e)} checked={basicDetails.gender === 'male'} />
                        <label htmlFor="male" className='cursor-pointer'>Male</label>
                        <input type="radio" id="female" name="gender" value="female" onChange={(e) => handleInput(e)} checked={basicDetails.gender === 'female'} />
                        <label htmlFor="female" className='cursor-pointer'>Female</label>
                    </div>
                    {!validBasicDetails.gender && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.gender.error}`}</span>}
                </div>
                <div className="relative flex items-center gap-5 w-full justify-between">
                    <label htmlFor="relationshipStatus" className='w-[30%] text-nowrap'>Relationship Status :</label>
                    <select value={basicDetails.relationshipStatus} name="relationshipStatus" id="relationshipStatus" className="w-[60%] border px-8 py-2 rounded-lg outline-none cursor-pointer" onChange={(e) => handleInput(e)}>
                        <option></option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                    </select>
                    {!validBasicDetails.relationshipStatus && <span className="absolute -bottom-7 left-[11.5rem] text-red-500 text-sm">{`${validation.relationshipStatus.error}`}</span>}
                </div>
            </div>

        </section>
    )
}

export default BasicDetails;
