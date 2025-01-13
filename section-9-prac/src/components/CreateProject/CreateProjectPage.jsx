import CreateProjectInput from "../CreateProjectInput/CreateProjectInput.jsx";

function CreateProjectPage() {

    return (
        <>
            <div className="w-[70%] flex flex-col p-16 mt-32 gap-5">
                <div className="flex gap-4 items-center justify-end">
                    <button className="bg-white text-gray-700 hover:text-gray-500">Cancel</button>
                    <button className="py-1.5 px-3.5 text-white bg-blue-500 rounded">Save</button>
                </div>

                <CreateProjectInput label="Title" inputType="text" />
                <CreateProjectInput label="Description" inputType="textarea" />
                <CreateProjectInput label="Date" inputType="date" />

                {/*<div className="flex flex-col">*/}
                {/*    <label htmlFor="" className=" text-gray-700 font-bold uppercase">Title</label>*/}
                {/*    <input className="bg-gray-200" type="text"/>*/}
                {/*</div>*/}
            </div>

        </>
    )
}

export default CreateProjectPage;