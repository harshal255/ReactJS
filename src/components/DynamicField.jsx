import { useEffect } from 'react';
import Cities from '../utils/cities.json';
import { IoRemoveCircle } from 'react-icons/io5';

const DynamicField = ({ index, register, remove, setValue, getValues, watch, errors,clearErrors}) => {

    const checked = getValues(`items.${index}.check`);

    const handleInput = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name.split(".")[2] === "city") {
            setValue(`items.${index}.state`, Cities.find((city) => city.name === value)?.state || '');
        }
        clearErrors(`items.${index}`) //
    }

    const clickToCheck = (e) => {
        setValue(`items.${index}.check`, true);
        const data = watch();
        const length = data.items.length;
        // console.log(e.target.checked, data.items);
        Array.from({ length }, (v, i) => {
            // console.log(i);
            return i !== index && setValue(`items.${i}.check`, false);
        });
    }
    useEffect(() => {
        watch();
    }, [watch]);

    return (
        <div className='flex gap-5 items-center'>
            <div className="flex flex-col gap-1">
                <div className='relative flex items-center gap-5 w-full justify-between'>
                    <label htmlFor={`items.${index}.city`}>City :</label>
                    <select {...register(`items.${index}.city`, { required: "City is required" })} id={`items.${index}.city`} className="w-[70%] border px-8 py-2 rounded-lg outline-none cursor-pointer" onChange={handleInput}>
                        <option></option>
                        {
                            Cities.map(city => <option key={city.id} value={city.name} className='capitalize'>{city.name}</option>)
                        }
                    </select>
                </div>
                {errors.items && errors.items[index] && <p className="-mt-3 text-sm text-red-600 capitalize text-start">{errors.items[index]?.city?.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <div className="relative flex items-center gap-5 w-full justify-between">
                    <label htmlFor={`items.${index}.state`}>State</label>
                    <input
                        disabled
                        {...register(`items.${index}.state`, { required: "State is required" })}
                        className='rounded-lg outline-none border-0 px-5 py-3'
                        id={`items.${index}.state`}
                    />
                </div>
                {errors.items && errors.items[index] && <p className="-mt-3 text-sm text-red-600 capitalize text-start">{errors.items[index]?.state?.message}</p>}
            </div>
            <div className="flex items-center">
                <input
                    type='checkbox'
                    {...register(`items.${index}.check`)}
                    className='rounded-lg outline-none border-0 px-5 py-3'
                    onClick={(e) => { clickToCheck(e) }}
                />
            </div>

            {!checked && <button type="button" onClick={() => remove(index)} className='text-3xl'>
                <IoRemoveCircle />
            </button>}
        </div>
    )
}

export default DynamicField;