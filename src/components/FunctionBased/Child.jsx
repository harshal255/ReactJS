import React from "react";
const ChildComponent = () => {
    console.log("child rendered");
    return (
        <div className="border border-red-400 rounded-xl flex w-full items-center justify-center py-20 p-10 text-3xl">
            Functional based Child Component
        </div>
    )
}

//generally memo used for component re-rendering prevention & useMemo hook used for variable re-rendering prevention
export const Child = React.memo(ChildComponent);  //for prevent Child rendering
// export  Child; //for child rerendering
