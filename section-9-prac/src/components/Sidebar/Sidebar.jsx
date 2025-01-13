import CreateButton from "../CreateButton/CreateButton.jsx";

function Sidebar({projects, handleCreateClick}) {
    function handleSelectProject(id) {
        console.log('Id Selected', id)
    }

    return (
        <aside className="w-1/3 p-8 h-screen bg-blue-900 mt-12 rounded-tr-2xl">
            <div className=" flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-white uppercase">Your Projects</h2>
                <div className="py-8">
                    <CreateButton handleCreateClick={handleCreateClick}> + Add Project </CreateButton>
                </div>
                {projects.map((project, id) => {
                    return (
                        <ul key={id} onClick={ (id) => handleSelectProject(id)} className="p-2 hover:bg-blue-300 text-gray-200 hover:text-gray-300 rounded-md">
                            {project.title}
                        </ul>
                    )
                })}

            </div>
        </aside>
    )
}

export default Sidebar;