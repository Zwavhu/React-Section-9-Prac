import Sidebar from "./components/Sidebar/Sidebar.jsx";
import LandingPage from "./components/Landing/LandingPage.jsx";
import {useState} from "react";
import CreateProjectPage from "./components/CreateProject/CreateProjectPage.jsx";

function App() {
    const [showCreatePage, setShowCreatePage] = useState(false);
    const [saveProject, setSaveProject] = useState(false);
    const [cancelSaveProject, setCancelSaveProject] = useState(false);

    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
    })

    function handleStartAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,

            };
        })
    }


    function handleAddProject(projectData) {
        setProjectState(prevState => {
            const newProject = {
                ...projectData,
                id: Math.random()
            }

            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
            }
        })
    }

    // function handleSave(){
    //     setSaveProject(true);
    // }
    //
    // function handleCancel(){
    //      setProjectState(prevState => {
    //         return {
    //             ...prevState,
    //             selectedProjectId: undefined,
    //
    //         };
    //     })
    // }

    console.log('State---', projectState)

    let content;

    if (projectState.selectedProjectId === null){
        content = <CreateProjectPage onAddProject={handleAddProject} />;
    } else if (projectState.selectedProjectId === undefined) {
        content = <LandingPage handleCreateClick={handleStartAddProject} />
    }

  return (
    <>
        <div className="flex">
            <Sidebar handleCreateClick={handleStartAddProject} />
            {content}
            {/*<CreateProjectPage handleSave={handleSave} handleCancel={handleCancel} />*/}
            {/*<LandingPage handleCreateClick={handleStartAddProject} />*/}
            {/*{showCreatePage ? <CreateProjectPage handleSave={handleSave} handleCancel={handleCancel} /> : !showCreatePage || cancelSaveProject ? <LandingPage handleCreateClick={handleStartAddProject} /> : null}*/}
        </div>

    </>
  );
}

export default App;
