import Sidebar from "./components/Sidebar/Sidebar.jsx";
import LandingPage from "./components/Landing/LandingPage.jsx";
import {useState} from "react";

function App() {
    const [showCreatePage, setShowCreatePage] = useState(false);
    function handleCreateClick() {
        setShowCreatePage(true);
    }

  return (
    <>
        <div className="flex">
            <Sidebar handleCreateClick={handleCreateClick} />
            <LandingPage handleCreateClick={handleCreateClick} />
        </div>

    </>
  );
}

export default App;
