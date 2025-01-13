import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { createPortal } from 'react-dom'
import LandingPage from "./components/Landing/LandingPage.jsx";
import {useState} from "react";

function App() {
    const [showCreatePage, setShowCreatePage] = useState(false);
    console.log('Show Create---',showCreatePage);

    function handleCreateClick() {
        setShowCreatePage(true);
    }

  return (
    <>
        <div className="flex">
            <Sidebar handleCreateClick={handleCreateClick} showCreatePage={showCreatePage} />
            <LandingPage handleCreateClick={handleCreateClick} showCreatePage={showCreatePage} />
        </div>

    </>
  );
}

export default App;
