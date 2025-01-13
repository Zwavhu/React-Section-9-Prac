import CreateProjectInput from "../CreateProjectInput/CreateProjectInput.jsx";

function CreateProjectPage({}) {


    function handleSave(){

    }

    function handleCancel(){

    }

    return (
        <>
            <div className="w-[70%] flex flex-col p-16 mt-32 gap-5">
                <div className="flex gap-4 items-center justify-end">
                    <button onClick={handleSave} className="bg-white text-gray-700 hover:text-gray-500">Cancel</button>
                    <button onClick={handleCancel} className="py-1.5 px-3.5 text-white bg-blue-500 rounded hover:text-gray-500 hover:bg-blue-400">Save</button>
                </div>

                <CreateProjectInput label="Title" inputType="text" />
                <CreateProjectInput label="Description" inputType="textarea" />
                <CreateProjectInput label="Date" inputType="date" />
            </div>

        </>
    )
}

export default CreateProjectPage;