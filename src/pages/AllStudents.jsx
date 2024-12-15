import { useContext, useEffect, useReducer, useState } from 'react'
import { studentContext } from '../contexts/studentContext'
import StudentCard from '../components/StudentCard';
import WrapperForAllStudents from '../styles/AllStudents';
import StudentPagination from '../components/StudentPagination';

const pageValue = +sessionStorage.getItem("student-page-value") ? +sessionStorage.getItem("student-page-value") : 1;
const particularRecords = 6;


const AllStudents = () => {
  const { students } = useContext(studentContext);
  const [pages, setPages] = useState(0);

  const reducer = (state, action) => {
    if (action.type === "start" && state > 0 && state < pages) {
      sessionStorage.setItem("student-page-value", 1);
      return 1;
    }
    else if (action.type === "prev" && state <= pages && state > 1) {
      sessionStorage.setItem("student-page-value", --state);
      return state;

    }
    else if (action.type === "next") {
      if (state > 0 && state < pages) {
        sessionStorage.setItem("student-page-value", ++state);
        return state;
      }
      else {
        //there are no next state here
        sessionStorage.setItem("student-page-value", pages);
        return pages;
      }
    }
    else if (action.type === "end") {
      if (state > 0 && state < pages) {
        sessionStorage.setItem("student-page-value", pages);
        return pages;
      }
      else {
        //there are no next state here
        sessionStorage.setItem("student-page-value", pages);
        return pages
      }
    }
    else {
      //there is no previous state here
      sessionStorage.setItem("student-page-value", 1);
      return 1;
    }
  }
  let [state, dispatch] = useReducer(reducer, pageValue);


  useEffect(() => {
    setPages(Math.ceil(students.length / particularRecords))
  }, [students]);


  return (
    <WrapperForAllStudents>
      <h1>All Students List</h1>
      <div className="student_grid">
        {
          students.length ? students.sort((a, b) => a.id - b.id).slice(particularRecords * state - particularRecords,
            particularRecords * state).map((student, i) => <StudentCard {...student} key={student.id || i} />) : <>Loading</>
        }
      </div>
      <StudentPagination state={state} pages={pages} dispatch={dispatch}/>
    </WrapperForAllStudents>
  )
}

export default AllStudents