import CreateProjectButton from "../CreateProjectButton/CreateProjectButton.jsx";

function Sidebar({handleCreateClick}) {
    return (
        <aside className="w-1/3 p-8 h-screen bg-blue-900 mt-12 rounded-tr-2xl">
            <div className=" flex flex-col">
                <h2 className="text-2xl font-bold text-white uppercase">Your Projects</h2>
                <CreateProjectButton handleCreateClick={handleCreateClick} buttonType='sidebar'></CreateProjectButton>
            </div>
        </aside>
    )
}

export default Sidebar;