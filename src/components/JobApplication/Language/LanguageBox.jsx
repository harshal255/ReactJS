import React, { useEffect, useState } from 'react'

const LanguageBox = ({ title, setLanguages, languages }) => {

    const [langObj, setLangObj] = useState({ read: languages[title]?.read ?? '', write: languages[title]?.write ?? '', speak: languages[title]?.speak ?? '' });

    const handleCheckBox = (e) => {
        const name = e.target.name;
        const value = e.target.checked ? 1 : 0;
        setLangObj((prevData) => ({ ...prevData, [name]: value }));
    };

    useEffect(() => {
        setLanguages((prevData) => ({ ...prevData, [title]: langObj }));
    }, [langObj]);

    return (
        <div className="relative flex items-center gap-5 text-xl">
            <span className="flex gap-5">
                <label htmlFor={title} className='cursor-pointer capitalize'>{title}</label>
                <input checked='checked' type="checkbox" value={title} name={title} id={title} onChange={(e) => handleCheckBox(e)} />
            </span>
            <span className="flex gap-5">
                <label htmlFor={`${title}Read`} className='cursor-pointer'>Read</label>
                <input checked={langObj?.read ? 'checked' : ''} type="checkbox" name="read" id={`${title}Read`} onChange={(e) => handleCheckBox(e)} />
            </span>
            <span className="flex gap-5">
                <label htmlFor={`${title}Write`} className='cursor-pointer'>Write</label>
                <input checked={langObj?.write ? 'checked' : ''} type="checkbox" name="write" id={`${title}Write`}
                    onChange={(e) => handleCheckBox(e)} />
            </span>
            <span className="flex gap-5">
                <label htmlFor={`${title}Speak`} className='cursor-pointer'>Speak</label>
                <input checked={langObj?.speak ? 'checked' : ''} type="checkbox" name="speak" id={`${title}Speak`}
                    onChange={(e) => handleCheckBox(e)} />
            </span>
        </div>
    )
}

export default LanguageBox