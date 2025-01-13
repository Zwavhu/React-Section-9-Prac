function Sidebar() {
    return (
        <div className="p-8 h-screen w-1/3 bg-blue-900 mt-12 rounded-tr-2xl">
            <aside className="w-1/3 flex flex-col">
                <h2 className="text-2xl font-bold text-white">Your Projects</h2>
                <div className="py-8">
                    <button className="p-3 bg-blue-200 rounded text-gray-500 hover:text-gray-700 hover:bg-blue-300">+ Add Project</button>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar;