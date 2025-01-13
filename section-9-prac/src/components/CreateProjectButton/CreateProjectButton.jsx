function CreateProjectButton({buttonType, handleCreateClick}) {

    const button = buttonType === 'landing' ?
            <button onClick={handleCreateClick} className="text-gray-800 p-3 bg-blue-500 rounded mt-4 hover:text-gray-500 hover:bg-blue-300">Create new project</button>
         : buttonType === 'sidebar' ?
            <div className="py-8">
                <button onClick={handleCreateClick} className="p-3 bg-blue-200 rounded text-gray-500 hover:text-gray-700 hover:bg-blue-300">+ Add
                    Project
                </button>
            </div> : null;

    return (
        <>
            {button}
        </>
)
}

export default CreateProjectButton;