import React, { useContext, useEffect, useState } from 'react'
import UserCard from '../components/UserCard';
import { userContextApi } from '../contexts/userContextApi';
import { ChevronRight } from '../components/Icons/ChevronRight';
import { ChevronsRight } from '../components/Icons/ChevronsRight';

const AllUsersApi = () => {
  const { users, deleteUser } = useContext(userContextApi);
  const particularRecords = 6;
  const [pages, setPages] = useState(0);
  let [pageValue, setPageValue] = useState(+sessionStorage.getItem("page-value") ? +sessionStorage.getItem("page-value") : 1);

  const nextPage = async () => {
    console.log("next click");
    if (pageValue > 0 && pageValue < pages) {
      sessionStorage.setItem("page-value", ++pageValue);
      setPageValue(pageValue);
      return pageValue;
    }
  };

  const prevPage = async () => {
    console.log("prev click");
    if (pageValue <= pages && pageValue > 1) {
      sessionStorage.setItem("page-value", --pageValue);
      setPageValue(pageValue);
      return pageValue;
    }
  };

  const startingPage = async () => {
    console.log("starting page");
    if (pageValue <= pages && pageValue > 1) {
      sessionStorage.setItem("page-value", 1);
      setPageValue(1);
      return pageValue;
    }
  };

  const endingPage = async () => {
    console.log("ending page");
    if (pageValue > 0 && pageValue < pages) {
      sessionStorage.setItem("page-value", pages);
      setPageValue(pages);
      return pageValue;
    }
  };

  useEffect(() => {
    setPages(Math.ceil(users.length / particularRecords))
  }, [users])


  return (
    <div className='py-10 flex flex-col gap-10 items-center w-full min-h-screen justify-center'>
      <h1 className='text-4xl font-semibold text-yellow-400'>List of All Users from the Database</h1>
      <div className='w-full grid grid-cols-3 gap-5 place-items-center'>
        {users ? users.sort((a, b) => a.id - b.id).slice(particularRecords * pageValue - particularRecords,
        particularRecords * pageValue).map((user, i) => <UserCard key={user.id || i} type="api" user={user} deleteUser={deleteUser} />) : <>Loading...</>}
      </div>

      
      <div className="pagination flex items-center justify-center gap-10 w-full my-5 text-3xl">
        <button onClick={() => startingPage()} className={`${(pageValue === 1 || pageValue === 0) && "disable"} rotate-180 hover:scale-150 duration-300 cursor-pointer p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold`}><ChevronsRight /></button>
        <button onClick={() => prevPage()} className={`${(pageValue === 1 || pageValue === 0) && "disable"} rotate-180 hover:scale-150 duration-300 cursor-pointer p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold`}><ChevronRight /></button>
        <span className='p-5 text-5xl  flex items-center justify-center h-20 w-20 rounded-full bg-black text-yellow-400'>{pageValue}</span>
        <button onClick={() => nextPage()} className={`${(pageValue === pages || pageValue === 0) && "disable"} hover:scale-150 duration-300 cursor-pointer p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold`}><ChevronRight /></button>
        <button onClick={() => endingPage()} className={`${(pageValue === pages || pageValue === 0) && "disable"} hover:scale-150 duration-300 cursor-pointer p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold`}><ChevronsRight /></button>
      </div>
    </div>
  )
}

export default AllUsersApi