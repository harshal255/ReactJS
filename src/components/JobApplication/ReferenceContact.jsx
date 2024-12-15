import React, { useContext, useState } from 'react'
import ReferenceBox from './ReferenceContacts/ReferenceBox'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { checkBothObjSame, objToValidObj, removeLastElementFromObject } from '../../utils';
import { modalContext } from '../../contexts/modalContext';

const ReferenceContact = ({ referenceContact, setReferenceContact, validReferenceContact, setValidReferenceContact }) => {
    const referenceContactsLength = Object.keys(referenceContact).length;
    const referenceBoxElement = Array.from({ length: referenceContactsLength || 1 }, (v) => ReferenceBox)
    const [inputFields, setInputFields] = useState(referenceBoxElement);
    const {handleModalWithCustomTitle} = useContext(modalContext);

    const addFields = () => {
        if (inputFields.length < 5) {
            const fullFillLastField = checkBothObjSame(objToValidObj(referenceContact[inputFields.length]), validReferenceContact[inputFields.length])[0];
            if (fullFillLastField) {
                setInputFields((prevData) => ([...prevData, ReferenceBox]));
            }
            else {
              handleModalWithCustomTitle("reference contacts limit", "You can't add field until you fill last field", []);
            }
            
        } else {
            handleModalWithCustomTitle("reference contacts limit", "You can't add more then 5 field.",[])
        }
    }

    const removeFields = () => {
        if (inputFields.length > 1) {
            setInputFields((prevData) => (prevData.slice(0, -1)));
            setReferenceContact(removeLastElementFromObject(referenceContact));
            setValidReferenceContact(removeLastElementFromObject(validReferenceContact));
        } else {
            handleModalWithCustomTitle("reference contacts limit", "You have to fill up at least one field.",[]);
        }
    }


    return (
        <section className="form5 relative min-h-[800px] flex gap-10 p-20 border rounded-lg w-full">
            <div className='flex flex-col gap-10'>
                <h2 className='text-3xl font-semibold text-zinc-200'>Reference Contact</h2>
                {inputFields.map((Field, i) => <Field key={i + 1} title={i + 1} referenceContact={referenceContact} setReferenceContact={setReferenceContact} validReferenceContact={validReferenceContact} setValidReferenceContact={setValidReferenceContact} />)}

                <div className="flex absolute bottom-5 right-5">
                    <button type='button' onClick={() => addFields()} className='cursor-pointer'><IoAddCircleOutline className='h-20 w-20 text-yellow-400' /></button>
                    <button type='button' onClick={() => removeFields()} className='cursor-pointer'><IoRemoveCircleOutline className='h-20 w-20 text-yellow-400' /></button>
                </div>
            </div>
        </section>
    )
}

export default ReferenceContact
