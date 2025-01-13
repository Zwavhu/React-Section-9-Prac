function LandingPage() {

    return (
        <div className="w-[70%] flex flex-col items-center mt-32 gap-5">
            <img className="object-contain w-16 h-16" src="logo.png" alt="logo"/>
            <h3 className=" text-2xl text-gray-600 font-bold"> No Projects Selected</h3>
            <p className="text-gray-500"> Select a project or get started with a new one</p>
            <div className="p-3 bg-blue-500 rounded mt-4 hover:text-gray-500 hover:bg-blue-300">
                <button className="text-gray-800 ">Create new project</button>
            </div>
        </div>
    )
}

export default LandingPage;