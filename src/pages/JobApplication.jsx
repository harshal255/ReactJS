import React, { useContext, useEffect, useState } from 'react'
import BasicDetails from '../components/JobApplication/BasicDetails'
import EducationDetails from '../components/JobApplication/EducationDetails'
import WorkExperience from '../components/JobApplication/WorkExperience'
import LanguageAndTechStack from '../components/JobApplication/LanguageAndTechStack'
import ReferenceContact from '../components/JobApplication/ReferenceContact'
import Preference from '../components/JobApplication/Preference'
import { employeeContext } from '../contexts/jobApplicationContext'
import { EmptyKeysInObject, checkBothNestedObjSame, checkBothObjSame, objToValidNestedObj, objToValidObj } from '../utils'
import { useParams } from 'react-router-dom'
import { modalContext } from '../contexts/modalContext'
import EducationDetails2 from '../components/JobApplication/EducationDetails2'


const JobApplication = () => {
  const { id } = useParams();
  const { pageCount, setPageCount, employees, addEmployee, updateEmployee } = useContext(employeeContext);
  const { handleModalWithCustomTitle } = useContext(modalContext);

  const [basicDetails, setBasicDetails] = useState({ firstName: "", lastName: "", designation: "", address: "", email: "", phone: "", city: "", zipcode: "", dateOfBirth: "", state: "", gender: "", relationshipStatus: "" })
  const [educationDetails, setEducationDetails] = useState({});
  const [workExperience, setWorkExperience] = useState({});
  const [languages, setLanguages] = useState({});
  const [techStack, setTechStack] = useState({});
  const [referenceContact, setReferenceContact] = useState({});
  const [preference, setPreference] = useState({ location: "", noticePeriod: "", expectedCTC: "", currentCTC: "", department: "" });


  // states for validation 
  const [validBasicDetails, setValidBasicDetails] = useState({ firstName: 1, lastName: 1, designation: 1, address: 1, email: 1, phone: 1, city: 1, zipcode: 1, dateOfBirth: 1, state: 1, gender: 1, relationshipStatus: 1 });
  const [validEducationDetails, setValidEducationDetails] = useState({});
  const [validWorkExperience, setValidWorkExperience] = useState({});
  const [validTechnology, setValidTechnology] = useState({});
  const [validReferenceContact, setValidReferenceContact] = useState({});
  const [validPreference, setValidPreference] = useState({ location: 1, noticePeriod: 1, expectedCTC: 1, currentCTC: 1, department: 1 });


  const multiStepper = [
    { id: 1, root: <BasicDetails key={1} basicDetails={basicDetails} setBasicDetails={setBasicDetails} validBasicDetails={validBasicDetails} setValidBasicDetails={setValidBasicDetails} /> },
    { id: 2, root: <EducationDetails2 key={2} educationDetails={educationDetails} setEducationDetails={setEducationDetails} validEducationDetails={validEducationDetails} setValidEducationDetails={setValidEducationDetails} /> },
    { id: 3, root: <WorkExperience key={3} workExperience={workExperience} setWorkExperience={setWorkExperience} validWorkExperience={validWorkExperience} setValidWorkExperience={setValidWorkExperience} /> },
    { id: 4, root: <LanguageAndTechStack key={4} languages={languages} techStack={techStack} setLanguages={setLanguages} setTechStack={setTechStack} validTechnology={validTechnology} setValidTechnology={setValidTechnology} /> },
    { id: 5, root: <ReferenceContact key={5} referenceContact={referenceContact} setReferenceContact={setReferenceContact} validReferenceContact={validReferenceContact} setValidReferenceContact={setValidReferenceContact} /> },
    { id: 6, root: <Preference key={6} preference={preference} setPreference={setPreference} validPreference={validPreference} setValidPreference={setValidPreference} /> }
  ];


  const errorThrower = (step, obj) => {
    const basicDetailsErrors = {
      "firstName": "Please Enter valid firstName.",
      "lastName": "Please Enter valid lastName.",
      "designation": "Please Enter valid Designation.",
      "address": "Please Enter Valid Address.",
      "email": "Please Enter Valid email.",
      "phone": "Please Enter valid Phone.",
      "city": "Please Enter valid city.",
      "zipcode": "Please Enter valid zipcode.",
      "dateOfBirth": "Please Enter valid Date of birth.",
      "state": "Please Enter valid state.",
      "gender": "Please Enter valid Gender.",
      "relationshipStatus": "Please select relationship status."
    };
    const educationErrors = {
      "eduType": "Please Enter valid Education Type",
      "nameOfBoard": "Please Enter valid name of Board",
      "passingYear": "Please Enter valid passing Year",
      "percentage": "Please Enter valid Percentage"
    };
    const workExpErrors = {
      "companyName": "Please Enter valid company name",
      "designation": "Please Enter valid Designation",
      "from": "Please Enter valid date",
      "to": "Please Enter valid date",
      "skills": "Please Enter valid skills",
    };
    const referenceContactErrors = {
      "personName": "Please Enter valid person name",
      "contactNo": "Please Enter valid contact no",
      "relationship": "Please Enter valid relationship"
    };
    const preferenceErrors = {
      "location": "Please Enter valid location",
      "noticePeriod": "Please Enter valid notice period",
      "expectedCTC": "Please Enter expected CTC",
      "currentCTC": "Please Enter current CTC",
      "department": "Please Enter department"
    }

    if (step == 1 || step == 4 || step == 6) {
      let arr = [];
      Object.keys(obj).map((el) => {
        step == 1 && !obj[el] && arr.push(basicDetailsErrors[el]);
        step == 4 && !obj[el] && arr.push(`Please select a range for ${el}`);
        step == 6 && !obj[el] && arr.push(preferenceErrors[el]);
      })
      return arr;
    }
    if (step == 2 || step == 3 || step == 5) {
      let arr = [];
      Object.keys(obj).map((el) => {
        for (let key in obj[el]) {
          step == 2 && !obj[el][key] && arr.push(`${educationErrors[key]} at ${el}.`);
          step == 3 && !obj[el][key] && arr.push(`${workExpErrors[key]} at ${el}.`);
          step == 5 && !obj[el][key] && arr.push(`${referenceContactErrors[key]} at ${el}.`);
        }
      })
      return arr;
    }
  }

  const validation = (pageCount) => {
    if (pageCount === 1) {
      const emptyFields = EmptyKeysInObject(basicDetails);
      emptyFields.map((field) => setValidBasicDetails((prevData => ({ ...prevData, [field]: 0 }))));
      const errArr = errorThrower(1, checkBothObjSame(objToValidObj(basicDetails), validBasicDetails)[2]);
      errArr.length && handleModalWithCustomTitle("", "Validation Error", errArr);
      return checkBothObjSame(objToValidObj(basicDetails), validBasicDetails)[0] ? 1 : 0;
    }
    else if (pageCount === 2) {
      const mapping = Object.entries(educationDetails);
      mapping.map((el) => {
        const emptyFields = EmptyKeysInObject(el[1]);
        if (emptyFields.length) {
          let obj = { [el[0]]: {} };
          emptyFields.map((field) => {
            obj = { [el[0]]: { ...obj[el[0]], [field]: 0 } }
            setValidEducationDetails((prevData => ({ ...prevData, ...obj })));
          })
        }
      })
      const errArr = errorThrower(2, checkBothNestedObjSame(objToValidNestedObj(educationDetails), validEducationDetails)[2]);
      errArr.length && handleModalWithCustomTitle("", "Validation Error", errArr);
      return Object.values(educationDetails).every((el) => !EmptyKeysInObject(el).length) && Object.values(validEducationDetails).every((el) => !EmptyKeysInObject(el).length);
    }
    else if (pageCount === 3) {
      const mapping = Object.entries(workExperience);
      mapping.map((el) => {
        const emptyFields = EmptyKeysInObject(el[1]);
        if (emptyFields.length) {
          let obj = { [el[0]]: {} };
          emptyFields.map((field) => {
            obj = { [el[0]]: { ...obj[el[0]], [field]: 0 } }
            setValidWorkExperience((prevData => ({ ...prevData, ...obj })));
          })
        }
      });
      const errArr = errorThrower(3, checkBothNestedObjSame(objToValidNestedObj(workExperience), validWorkExperience)[2]);
      errArr.length && handleModalWithCustomTitle("", "Validation Error", errArr);
      return Object.values(workExperience).every((el) => !EmptyKeysInObject(el).length) && Object.values(validWorkExperience).every((el) => !EmptyKeysInObject(el).length);
    }
    else if (pageCount === 4) {
      const mapping = Object.entries(techStack);
      mapping.map((el) => {
        setValidTechnology((prevData => ({ ...prevData, [el[0]]: objToValidObj(el[1]) })));
      })
      const errArr = errorThrower(4, checkBothNestedObjSame(objToValidNestedObj(techStack), validTechnology)[2]);
      errArr.length && handleModalWithCustomTitle("", "Validation Error", errArr);
      return Object.values(techStack).every((el) => !EmptyKeysInObject(el).length) && Object.values(validTechnology).every((el) => !EmptyKeysInObject(el).length);
    }
    else if (pageCount === 5) {
      const mapping = Object.entries(referenceContact);
      mapping.map((el) => {
        const emptyFields = EmptyKeysInObject(el[1]);
        if (emptyFields.length) {
          let obj = { [el[0]]: {} };
          emptyFields.map((field) => {
            obj = { [el[0]]: { ...obj[el[0]], [field]: 0 } }
            setValidReferenceContact((prevData => ({ ...prevData, ...obj })));
          })
        }
      })
      const errArr = errorThrower(5, checkBothNestedObjSame(objToValidNestedObj(referenceContact), validReferenceContact)[2]);
      errArr.length && handleModalWithCustomTitle("", "Validation Error", errArr);
      return Object.values(validReferenceContact).every((el) => !EmptyKeysInObject(el).length) && Object.values(referenceContact).every((el) => !EmptyKeysInObject(el).length);
    }
    else {
      const emptyFields = EmptyKeysInObject(preference);
      const emptyFields2 = EmptyKeysInObject(validPreference);
      emptyFields.map((field) => setValidPreference((prevData => ({ ...prevData, [field]: 0 }))))
      const errArr = errorThrower(6, checkBothObjSame(objToValidObj(preference), validPreference)[2]);
      errArr.length && handleModalWithCustomTitle("", "Validation Error", errArr);
      return !emptyFields.length && !emptyFields2.length;
    }
    // return true;
  }




  const Prev = () => {
    if (pageCount > 1 && pageCount <= multiStepper.length) {
      setPageCount(pageCount - 1);
    }
  }

  const Next = () => {
    if (pageCount < multiStepper.length && validation(pageCount)) {
      if (pageCount === multiStepper.length - 1) {
        //used settimeout due to preventing instance submitting form while pageCount just changing 5 to 6
        setTimeout(() => {
          setPageCount(pageCount + 1);
        }, 100);
        return;
      }
      setPageCount(pageCount + 1);
    }
  }

  const clickToButtons = (pageCount) => {
    let val = 0;
    Array(...Array(pageCount - 1)).map((x, i) => validation(i + 1) ? val++ : val--);
    return val + 1 === pageCount ? setPageCount(pageCount) : console.log("validation error");
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (!validation(multiStepper.length)) {
      handleModalWithCustomTitle("Form Operation", "Validation Error", []);
      return false;
    }
    else {
      const employeeData = { basicDetails, educationDetails, workExperience, languages, techStack, referenceContact, preference };
      id ? updateEmployee(employeeData, id) : addEmployee(employeeData);
      handleModalWithCustomTitle("Form Operation", id ? "User Modified Successfully" : "User Added Successfully", []);
    }
  }

  const style1 = {
    1: { background: `${checkBothObjSame(objToValidObj(basicDetails), validBasicDetails)[1] === 100 ? '#84cc16' : '#facc15'}` },
    2: { background: `${checkBothNestedObjSame(objToValidNestedObj(educationDetails), validEducationDetails)[1] === 100 ? '#84cc16' : '#facc15'}` },
    3: { background: `${checkBothNestedObjSame(objToValidNestedObj(workExperience), validWorkExperience)[1] === 100 ? '#84cc16' : '#facc15'}` },
    4: { background: `${checkBothNestedObjSame(objToValidNestedObj(techStack), validTechnology)[1] === 100 ? '#84cc16' : '#facc15'}` },
    5: { background: `${checkBothNestedObjSame(objToValidNestedObj(referenceContact), validReferenceContact)[1] === 100 ? '#84cc16' : '#facc15'}` },
    6: { background: `${checkBothObjSame(objToValidObj(preference), validPreference)[1] === 100 ? '#84cc16' : '#facc15'}` }
  }

  const style2 = {
    1: { background: `linear-gradient(to right,  #65a30d ${checkBothObjSame(objToValidObj(basicDetails), validBasicDetails)[1]}%, #ef4444 10%)` },
    2: { background: `linear-gradient(to right,  #65a30d ${checkBothNestedObjSame(objToValidNestedObj(educationDetails), validEducationDetails)[1]}%, #ef4444 10%)` },
    3: { background: `linear-gradient(to right,  #65a30d ${checkBothNestedObjSame(objToValidNestedObj(workExperience), validWorkExperience)[1]}%, #ef4444 10%)` },
    4: { background: `linear-gradient(to right,  #65a30d ${checkBothNestedObjSame(objToValidNestedObj(techStack), validTechnology)[1]}%, #ef4444 10%)` },
    5: { background: `linear-gradient(to right,  #65a30d ${checkBothNestedObjSame(objToValidNestedObj(referenceContact), validReferenceContact)[1]}%, #ef4444 10%)` },
    6: { background: `linear-gradient(to right,  #65a30d ${checkBothObjSame(objToValidObj(preference), validPreference)[1]}%, #ef4444 10%)`, },
  }


  useEffect(() => {
    if (id) {
      const employee = employees.find((employee) => parseInt(id) === parseInt(employee.id));
      console.log(employee)
      setBasicDetails(employee?.basicDetails);
      setEducationDetails(employee?.educationDetails);
      setWorkExperience(employee?.workExperience);
      setLanguages(employee?.languages);
      setTechStack(employee?.techStack);
      setReferenceContact(employee?.referenceContact);
      setPreference(employee?.preference);
      setValidEducationDetails(objToValidNestedObj(employee?.educationDetails));
      setValidWorkExperience(objToValidNestedObj(employee?.workExperience));
      setValidTechnology(objToValidNestedObj(employee?.techStack));
      setValidReferenceContact(objToValidNestedObj(employee?.referenceContact));
    }
  }, [id]);


  return (
    <div className='max-w-[1380px] m-auto py-10 flex flex-col gap-10 items-center min-h-screen'>
      <h1 className='text-4xl font-semibold text-yellow-400'>Job Application Form</h1>
      <div className="steps flex gap-5 px-5">
        {
          Array(...Array(multiStepper.length)).map((x, i) => {
            return <div key={i + 1} className='flex gap-5 items-center justify-center'>
              <div style={style1[i + 1]} className={`text-2xl flex items-center justify-center font-medium p-5 border duration-300 text-zinc-950 ${pageCount === i + 1 ? 'scale-125 !bg-[#7dd3fc]' : 'scale-90'}  ${pageCount >= i + 1 ? 'bg-yellow-400  border-zinc-950' : 'bg-zinc-950 border-yellow-400'}  h-20 w-20 rounded-full cursor-pointer`} onClick={() => clickToButtons(i + 1)}>{i + 1}</div>
              {(i + 1) !== multiStepper.length && <div className={`w-44 h-4 rounded-full`} style={style2[i + 1]} />}
            </div>
          })
        }
      </div>
      <form className='w-[1380px]' onSubmit={e => submitForm(e)}>
        {multiStepper.filter(step => step.id === pageCount).map(step => step.root)}

        <div className="w-full flex justify-between my-5">
          <button className={`${pageCount === 1 ? "opacity-40 cursor-default" : "cursor-pointer hover:bg-blue-700"} w-fit border text-white outline-none p-2 px-10 rounded-lg duration-300 bg-blue-600 py-2 `}
            type="button" id="prev" onClick={() => Prev()}>Prev</button>
          {
            pageCount === multiStepper.length ?
              <button className="w-fit border text-white  outline-none p-2 px-10 rounded-lg cursor-pointer duration-300 bg-blue-600 py-2 hover:bg-blue-700"
                id="submit" type="submit">Submit Form</button> :
              <button className="w-fit border text-white outline-none p-2 px-10 rounded-lg cursor-pointer duration-300 bg-blue-600 py-2 hover:bg-blue-700"
                type="button" id="next" onClick={() => Next()}>Next</button>
          }
        </div>
      </form>
    </div>
  )
}

export default JobApplication;