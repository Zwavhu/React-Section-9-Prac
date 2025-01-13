import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { createPortal } from 'react-dom'
import LandingPage from "./components/Landing/LandingPage.jsx";

function App() {
  return (
    <>
        <div className="flex">
            {/*{createPortal(<Sidebar/>, document.body)}*/}
            <Sidebar />
            <LandingPage />
        </div>

    </>
  );
}

export default App;
