function CreateButton({children, handleCreateClick, ...props}) {

    return (
        <>
            <button
                onClick={handleCreateClick}
                className="p-3 bg-blue-200 rounded text-gray-500 hover:text-gray-700 hover:bg-blue-300"
                {...props}
            >
                {children}
            </button>
        </>
    )
}

export default CreateButton;