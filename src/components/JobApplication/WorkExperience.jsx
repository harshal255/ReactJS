import React, { useContext, useState } from 'react';
import WorkExp from './WorkExperiences/WorkExp';
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { checkBothObjSame, objToValidObj, removeLastElementFromObject } from '../../utils';
import { modalContext } from '../../contexts/modalContext';


const WorkExperience = ({ workExperience, setWorkExperience, validWorkExperience, setValidWorkExperience }) => {
  const workExperienceLength = Object.keys(workExperience).length;
  const WorkExpElement = Array.from({ length: workExperienceLength || 1 }, (v) => WorkExp)
  const [inputFields, setInputFields] = useState(WorkExpElement);
  const { handleModalWithCustomTitle } = useContext(modalContext);

  const addFields = () => {
    if (inputFields.length < 5) {
      const fullFillLastField = checkBothObjSame(objToValidObj(workExperience[inputFields.length]), validWorkExperience[inputFields.length])[0];
      if (fullFillLastField) {
        setInputFields((prevData) => ([...prevData, WorkExp]))
      }
      else {
        handleModalWithCustomTitle("work experience limit", "You can't add field until you fill last field", []);
      }

    } else {
      handleModalWithCustomTitle("work experience limit", "You can't add more then 5 field.", [])
    }
  }

  const removeFields = () => {
    if (inputFields.length > 1) {
      setInputFields((prevData) => (prevData.slice(0, -1)));
      setWorkExperience(removeLastElementFromObject(workExperience));
      setValidWorkExperience(removeLastElementFromObject(validWorkExperience));
    } else {
      handleModalWithCustomTitle("work experience limit", "You have to fill up at least one field.", []);
    }
  }

  return (
    <section className="form3 min-h-[800px] flex flex-col gap-10 p-20 border rounded-lg w-full relative">
      <h2 className='text-3xl font-semibold text-zinc-200'>Work Experience</h2>
      <div className='flex flex-col gap-14 w-full text-xl'>

        {inputFields.map((Field, i) => <Field key={i + 1} title={i + 1} workExperience={workExperience} setWorkExperience={setWorkExperience} validWorkExperience={validWorkExperience} setValidWorkExperience={setValidWorkExperience} />)}

        <div className="flex absolute bottom-5 right-5">
          <button type='button' onClick={() => addFields()} className='cursor-pointer'><IoAddCircleOutline className='h-20 w-20 text-yellow-400' /></button>
          <button type='button' onClick={() => removeFields()} className='cursor-pointer'><IoRemoveCircleOutline className='h-20 w-20 text-yellow-400' /></button>
        </div>

      </div>
    </section>
  )
}

export default WorkExperience;
