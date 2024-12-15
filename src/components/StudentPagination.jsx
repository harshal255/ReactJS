import { ChevronRight } from "./Icons/ChevronRight"
import { ChevronsRight } from "./Icons/ChevronsRight"

const StudentPagination = ({ state, pages, dispatch }) => {
    return (
        <div className="pagination flex items-center justify-center gap-10 w-full my-5 text-3xl">
            <button onClick={() => dispatch({ type: "start" })} className={`${(state === 1 || state === 0) && "disable"} rotate-180 hover:scale-150 duration-300 cursor-pointer p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold`}><ChevronsRight /></button>
            <button onClick={() => dispatch({ type: "prev" })} className={`${(state === 1 || state === 0) && "disable"} rotate-180 hover:scale-150 duration-300 cursor-pointer p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold`}><ChevronRight /></button>
            <span className='p-5 text-5xl  flex items-center justify-center h-20 w-20 rounded-full bg-black text-yellow-400'>{state}</span>
            <button onClick={() => dispatch({ type: "next" })} className={`${(state === pages || state === 0) && "disable"} hover:scale-150 duration-300 cursor-pointer p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold`}><ChevronRight /></button>
            <button onClick={() => dispatch({ type: "end" })} className={`${(state === pages || state === 0) && "disable"} hover:scale-150 duration-300 cursor-pointer p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold`}><ChevronsRight /></button>
        </div>
    )
}

export default StudentPagination
