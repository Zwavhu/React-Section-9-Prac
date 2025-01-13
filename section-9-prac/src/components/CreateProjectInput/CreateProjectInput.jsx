function CreateProjectInput({inputType, label}) {
    const input = inputType === 'textarea' ?

        <div className="flex flex-col">
            <label htmlFor="" className=" text-gray-700 font-bold uppercase">{label}</label>
            <textarea className="bg-gray-200"></textarea>
        </div> :
        <div className="flex flex-col">
            <label htmlFor="" className=" text-gray-700 font-bold uppercase">{label}</label>
            <input className="bg-gray-200" type={inputType}/>
        </div>
    return (
        <>
            {input}
        </>
)
}

export default CreateProjectInput;