function CreateProjectInput({inputType, label}) {
    const input = inputType === 'textarea' ?

        <div className="flex flex-col">
            <label htmlFor="" className=" text-gray-700 font-bold uppercase">{label}</label>
            <textarea className="bg-gray-200 focus:outline-none focus:border-gray-700 border-b-2" required></textarea>
        </div> :
        <div className="flex flex-col">
            <label className="text-gray-700 font-bold uppercase">{label}</label>
            <input className="bg-gray-200 focus:outline-none focus:border-gray-700 border-b-2" type={inputType} required/>
        </div>
    return (
        <>
            {input}
        </>
)
}

export default CreateProjectInput;