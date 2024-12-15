import React from 'react'
import LanguageBox from './Language/LanguageBox';
import TechBox from './Technology/TechBox';

const LanguageAndTechStack = ({ languages, techStack, setLanguages, setTechStack,validTechnology,setValidTechnology }) => {

    return (
        <section className="form4 min-h-[800px] flex gap-10 p-20 border rounded-lg w-full">
            <div className='flex flex-col gap-5'>
                <h2 className='text-3xl font-semibold text-zinc-200'>Language Known</h2>
                <div className="flex flex-col gap-5 text-xl">
                    <LanguageBox key={"hindi"} title={"hindi"} languages={languages} setLanguages={setLanguages} />
                    <LanguageBox key={"english"} title={"english"} languages={languages} setLanguages={setLanguages} />
                    <LanguageBox key={"gujarati"} title={"gujarati"} languages={languages} setLanguages={setLanguages} />
                </div>
            </div>
            <div className='ml-64 flex flex-col gap-5 text-xl'>
                <h2 className='text-3xl font-semibold text-zinc-200'>Technology You Known</h2>
                <div className="flex flex-col gap-10 text-lg">
                    <TechBox title={"mysql"} techStack={techStack} setTechStack={setTechStack} validTechnology={validTechnology} setValidTechnology={setValidTechnology}/>
                    <TechBox title={"nodejs"} techStack={techStack} setTechStack={setTechStack} validTechnology={validTechnology} setValidTechnology={setValidTechnology}/>
                    <TechBox title={"expressjs"} techStack={techStack} setTechStack={setTechStack} validTechnology={validTechnology} setValidTechnology={setValidTechnology}/>
                    <TechBox title={"reactjs"} techStack={techStack} setTechStack={setTechStack} validTechnology={validTechnology} setValidTechnology={setValidTechnology}/>
                </div>
            </div>
        </section>
    )
}

export default LanguageAndTechStack
