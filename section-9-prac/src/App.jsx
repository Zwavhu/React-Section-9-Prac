import Sidebar from "./components/Sidebar/Sidebar.jsx";
import LandingPage from "./components/Landing/LandingPage.jsx";
import {useState} from "react";
import CreateProjectPage from "./components/CreateProject/CreateProjectPage.jsx";

function App() {
    const [showCreatePage, setShowCreatePage] = useState(false);
    const [saveProject, setSaveProject] = useState(false);
    const [cancelSaveProject, setCancelSaveProject] = useState(false);
    console.log('creee',saveProject);
    console.log('creee',cancelSaveProject);

    function handleCreateClick() {
        setShowCreatePage(true);
    }

    function handleSave(){
        setSaveProject(true);
    }

    function handleCancel(){
        setCancelSaveProject(true);
    }

  return (
    <>
        <div className="flex">
            <Sidebar handleCreateClick={handleCreateClick} />
            {showCreatePage ? <CreateProjectPage handleSave={handleSave} handleCancel={handleCancel} /> : !showCreatePage || cancelSaveProject ? <LandingPage handleCreateClick={handleCreateClick} /> : null}
        </div>

    </>
  );
}

export default App;
