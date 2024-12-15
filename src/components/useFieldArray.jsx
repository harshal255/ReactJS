import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { IoAddCircle } from 'react-icons/io5';
import DynamicField from './DynamicField';

const UseFieldArray = () => {
    const { register, control, handleSubmit, setValue, getValues, formState, watch, reset, trigger, clearErrors } = useForm({
        defaultValues: {
            items: [{ city: "Mumbai", state: "Maharashtra", check: true }],
        },
        mode: 'onChange',
        reValidateMode: 'onChange',
    });
    const { errors, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful } = formState;
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

    const appendField = async () => {
        const triggerValue = await trigger();
        triggerValue && append({ city: '', state: '', check: false });
    }

    const onSubmit = data => new Promise(resolve => setTimeout(() => {
        resolve();
        console.log("Your Data has been submitted ", data);
    }, 2000));

    console.log(errors, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful,)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 text-xl mt-10' noValidate>
            {fields.map((field, index) => (
                <DynamicField key={field.id} register={register} remove={remove} index={index} setValue={setValue} getValues={getValues} watch={watch} errors={errors} clearErrors={clearErrors} />
            ))}

            <div className="flex items-center w-full justify-between gap-5">
                <button type="button" onClick={() => { appendField() }} className='text-3xl'>
                    <IoAddCircle />
                </button>

                {fields.length > 0 && <button disabled={isSubmitting} type="submit" className='flex items-center bg-blue py-2 px-5 bg-black rounded-lg border-zinc-700 w-[8rem] justify-center'>{isSubmitting && <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                    </path>
                </svg>}Submit</button>}

            </div>
            {isSubmitSuccessful && <div>Your Data has Been Submitted Successful</div>}
        </form>
    );
}
export default UseFieldArray;