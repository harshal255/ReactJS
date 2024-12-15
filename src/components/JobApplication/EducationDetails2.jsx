import React, { useContext, useState } from 'react'
import EduBox2 from './EducationDetails/EduBox2'
import { modalContext } from '../../contexts/modalContext';
import { checkBothObjSame, objToValidObj, removeLastElementFromObject, removeSpecificElementFromObject } from '../../utils';
import { IoAddCircleOutline } from 'react-icons/io5';
import educationJson from "../../utils/education.json";

const EducationDetails2 = ({ educationDetails, setEducationDetails, validEducationDetails, setValidEducationDetails }) => {

    const educationDetailsLength = Object.keys(educationDetails).length;
    let eduDetailsElement = Array.from({ length: educationDetailsLength || 1 }, (v) => EduBox2)
    const [inputFields, setInputFields] = useState(eduDetailsElement);
    const { handleModalWithCustomTitle } = useContext(modalContext);

    const [educationApi, setEducationApi] = useState(educationJson);

    const addFields = () => {
        if (inputFields.length < 5) {
            const fullFillLastField = checkBothObjSame(objToValidObj(educationDetails[inputFields.length]), validEducationDetails[inputFields.length])[0];
            if (fullFillLastField) {
                setInputFields((prevData) => ([...prevData, EduBox2]));
                const addedEduField = educationDetails[inputFields.length]["eduType"];
                const chandedEduField = educationApi.filter(data => data.title === addedEduField);

                setEducationApi((prevData) => [...prevData.filter(data => data.title !== addedEduField), { ...chandedEduField[0], used: 1 }]);
            }
            else {
                handleModalWithCustomTitle("education experience limit", "You can't add field until you fill last field", []);
            }

        } else {
            handleModalWithCustomTitle("education experience limit", "You can't add more then 5 field.", [])
        }
    }

    const removeFields = (id) => {
        console.log(id);
        if (inputFields.length > 1) {
            setInputFields((prevData) => ([...prevData.slice(0, id), ...prevData.slice(id + 1)]));
            setEducationDetails(removeSpecificElementFromObject(educationDetails, id));
            setValidEducationDetails(removeSpecificElementFromObject(validEducationDetails, id));
        } else {
            handleModalWithCustomTitle("education experience limit", "You have to fill up at least one field.", []);
        }
    }
    console.log(inputFields, educationDetails, validEducationDetails);

    return (
        <section className="relative form2 min-h-[800px] flex flex-col gap-10 p-20 border rounded-lg w-full">
            <h2 className='text-3xl font-semibold text-zinc-200'>Education Details</h2>

            <div className='flex flex-col gap-14 w-full text-xl'>
                {inputFields.map((Field, i) => <Field key={i + 1} title={i + 1} educationDetails={educationDetails} setEducationDetails={setEducationDetails} validEducationDetails={validEducationDetails} setValidEducationDetails={setValidEducationDetails} educationApi={educationApi} removeFields={removeFields} />)}

                <div className="flex absolute bottom-5 right-5">
                    <button type='button' onClick={() => addFields()} className='cursor-pointer'><IoAddCircleOutline className='h-20 w-20 text-yellow-400' /></button>
                    {/* <button type='button' onClick={() => removeFields()} className='cursor-pointer'><IoRemoveCircleOutline className='h-20 w-20 text-yellow-400' /></button> */}
                </div>

            </div>
        </section>
    )
}

export default EducationDetails2
