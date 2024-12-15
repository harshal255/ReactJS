import React from 'react'

const SkillsCard = ({ skills }) => {
    return (
        <div className="skills col-span-2 flex gap-x-3 items-center flex-wrap">
            {
                skills.map((skill, i) => {
                    return skill && <div key={i} className='text-xl bg-black  border border-orange-500 rounded-lg py-1 px-3 cursor-pointer'>{skill}</div>
                })
            }
        </div>
    )
}

export default SkillsCard