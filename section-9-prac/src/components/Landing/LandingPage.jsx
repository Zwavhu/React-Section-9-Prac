import CreateProjectButton from "../CreateProjectButton/CreateProjectButton.jsx";

function LandingPage({handleCreateClick}) {
    const type = 'landing';

    return (
        <div className="w-[70%] flex flex-col items-center mt-32 gap-5">
            <img className="object-contain w-16 h-16" src="logo.png" alt="logo"/>
            <h3 className=" text-2xl text-gray-600 font-bold"> No Projects Selected</h3>
            <p className="text-gray-500"> Select a project or get started with a new one</p>
            <CreateProjectButton handleCreateClick={handleCreateClick} buttonType={type}></CreateProjectButton>
        </div>
    )
}

export default LandingPage;