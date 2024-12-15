import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from "../redux/themeSlice"

const ReduxToolkit = () => {

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  console.log(theme);

  const changeTh = () => {
    theme === "light" ? dispatch(changeTheme("dark")) : dispatch(changeTheme("light"))
  }

  useEffect(() => {
    console.log("use effects called")
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(theme);
  }, [theme]);


  return (
    <div className='flex items-center justify-center w-screen min-h-screen bg-white text-black dark:bg-black dark:text-white transition duration-700'>
      <label
        htmlFor="AcceptConditions"
        className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
      >
        <input type="checkbox" id="AcceptConditions" className="peer sr-only" onChange={() => { changeTh() }} />

        <span
          className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
        ></span>
      </label>

      {/* <button onClick={() => dispatch(changeTheme("light"))}>light</button>
      <button onClick={() => dispatch(changeTheme("dark"))}>dark</button> */}
    </div>
  )
}

export default ReduxToolkit;