import ReactDOM from 'react-dom/client';
import './index.css'
import { Suspense, lazy } from "react";
const App = lazy(() => import("./App"));
import Loader from './components/Loader';
import ErrorPage from './components/ClassBased/ErrorPage';



//for main application
ReactDOM.createRoot(document.getElementById('function')).render(
    // <ErrorBoundary fall={ErrorPage}>
    <ErrorPage>
        <Suspense fallback={<Loader />}>
            <App />
        </Suspense>
    </ErrorPage>
    // </ErrorBoundary>
);

