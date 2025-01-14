import CreateProjectInput from "../CreateProjectInput/CreateProjectInput.jsx";
import {useRef, useState} from "react";

function CreateProjectPage({onAddProject, onCancel}) {
    const [saveProject, setSaveProject] = useState(false);

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();


    function handleSave(){
        // setSaveProject(true);
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const date = dateRef.current.value;
        console.log('Refs', titleRef.current);

        onAddProject({
            title: title,
            description: description,
            date: date,
        })

    }

    function handleCancel(){

    }

    return (
        <>
            <div className="w-[70%] flex flex-col p-16 mt-32 gap-5">
                <div className="flex gap-4 items-center justify-end">
                    <button onClick={onCancel} className="bg-white text-gray-700 hover:text-gray-500">Cancel</button>
                    <button onClick={handleSave} className="py-1.5 px-3.5 text-white bg-blue-500 rounded hover:text-gray-500 hover:bg-blue-400">Save</button>
                </div>

                <CreateProjectInput ref={titleRef} label="Title" inputType="text" />
                <CreateProjectInput ref={descriptionRef} label="Description" inputType="textarea" />
                <CreateProjectInput ref={dateRef} label="Date" inputType="date" />
            </div>

        </>
    )
}

export default CreateProjectPage;