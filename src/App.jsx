import Sidebar from "./components/Sidebar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.jsx';
import Listing from './components/FunctionBased/Listing.jsx';
import ListingClassBased from './components/ClassBased/Listing.jsx';
import Validation from './components/FunctionBased/Valldation.jsx';
import ParentControlState from './pages/ParentControlState.jsx';
import Books from './pages/DynamicRouting.jsx';
import Book from './components/FunctionBased/Book.jsx';
import AddUser from './pages/AddUser.jsx';
import AllUsers from './pages/AllUsers.jsx';
import PropsParent from "./pages/Parent.jsx";
import ClassVirtualization from "./pages/ClassVirtualization.jsx";
import FunctionVirtualization from "./pages/FunctionVirtualization.jsx";
import UserContextProvider from "./contexts/userContext.jsx";
import AllUsersAPI from "./pages/AllUsersAPI.jsx";
import AddUserAPI from "./pages/AddUserAPI.jsx";
import UserContextApiProvider from "./contexts/userContextApi.jsx";
import EditUserAPI from "./pages/EditUserAPI.jsx";
import EditStudent from "./pages/EditStudent.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import AllStudents from "./pages/AllStudents.jsx";
import StudentContextProvider from "./contexts/studentContext.jsx";
import JobApplication from "./pages/JobApplication.jsx";
import EmployeeContextProvider from "./contexts/jobApplicationContext.jsx";
import AllEmployees from "./pages/AllEmployees.jsx";
import ModalBoxTutorial from "./pages/ModalBoxTutorial.jsx";
import ModalContextProvider from "./contexts/modalContext.jsx";
import ErrorBoundaries from "./pages/ErrorBoundaries.jsx";
import ErrorPage from "./components/ClassBased/ErrorPage.jsx";
import UseFieldArray from "./components/useFieldArray.jsx";
import ReduxToolkit from "./pages/ReduxToolkit.jsx";

// import ErrorPage from "./components/ErrorPage.jsx";
// import { ErrorBoundary } from "react-error-boundary";
import { store } from "./redux/store"
import { Provider } from 'react-redux'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
          <Sidebar />
        </>

      ),
    },
    {
      path: "/function-based/virtual-dom",
      element: (
        <>
          <FunctionVirtualization />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/function-based/listing",
      element: (
        <>
          <Listing />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/function-based/validation",
      element: (
        <>
          <Validation />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/function-based/props.child",
      element: (
        <>
          <PropsParent />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/function-based/control-state-from-parent",
      element: (
        <>
          <ParentControlState />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/function-based/dynamic-routing",
      element: (
        <>
          <Books />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/function-based/dynamic-routing/:bookId",
      element: (
        <>
          <Book />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/function-based/add-user",
      element: (
        <UserContextProvider>
          <AddUser />
          <Sidebar />
        </UserContextProvider>
      ),
    },
    {
      path: "/function-based/all-users",
      element: (
        <UserContextProvider>
          <AllUsers />
          <Sidebar />
        </UserContextProvider>
      ),
    },
    {
      path: "/api-integration/all-users",
      element: (
        <UserContextApiProvider>
          <AllUsersAPI />
          <Sidebar />
        </UserContextApiProvider>
      ),
    },
    {
      path: "/api-integration/add-user",
      element: (
        <UserContextApiProvider>
          <AddUserAPI />
          <Sidebar />
        </UserContextApiProvider>
      ),
    },
    {
      path: "/api-integration/edit-user/:userId",
      element: (
        <UserContextApiProvider>
          <EditUserAPI />
          <Sidebar />
        </UserContextApiProvider>
      ),
    },
    {
      path: "/function-based/all-students",
      element: (
        <StudentContextProvider>
          <AllStudents />
          <Sidebar />
        </StudentContextProvider>
      ),
    },
    {
      path: "/function-based/add-student",
      element: (
        <StudentContextProvider>
          <AddStudent />
          <Sidebar />
        </StudentContextProvider>
      ),
    },
    {
      path: "/function-based/edit-student/:studentId",
      element: (
        <StudentContextProvider>
          <EditStudent />
          <Sidebar />
        </StudentContextProvider>
      ),
    },
    {
      path: "/class-based/virtual-dom",
      element: (
        <>
          <ClassVirtualization />
          <Sidebar />
        </>
      )
    },
    {
      path: "/class-based/listing",
      element: (
        <>
          <ListingClassBased />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/job-application",
      element: (
        <EmployeeContextProvider>
          <JobApplication />
          <Sidebar />
        </EmployeeContextProvider>
      ),
    },
    {
      path: "/all-employees",
      element: (
        <EmployeeContextProvider>
          <AllEmployees />
          <Sidebar />
        </EmployeeContextProvider>
      ),
    },
    {
      path: "/job-application/edit-employee/:id",
      element: (
        <EmployeeContextProvider>
          <JobApplication />
          <Sidebar />
        </EmployeeContextProvider>
      ),
    },
    {
      path: "/custom/modal",
      element: (
        <>
          <ModalBoxTutorial />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/error-boundaries",
      element: (
        // <ErrorBoundary FallbackComponent={ErrorPage}>
        <ErrorPage>
          <ErrorBoundaries />
          <Sidebar />
        </ErrorPage>
        // </ErrorBoundary>
      ),
    },
    {
      path: "/use-field-array",
      element: (
        <>
          <UseFieldArray />
          <Sidebar />
        </>
      ),
    },
    {
      path: "/redux-toolkit",
      element: (
        <Provider store={store}>
          <ReduxToolkit />
          <Sidebar />
        </Provider>
      ),
    },
  ]);


  return (
    <ModalContextProvider>
      <RouterProvider router={router} />
    </ModalContextProvider>
  );
}

export default App;
