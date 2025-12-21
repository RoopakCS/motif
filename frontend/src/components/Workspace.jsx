function Workspace({selectedProgression}) {
    if(!selectedProgression) {
        return(
            <div className="">
                Select or create a chord progression
            </div>
        )
    }

    return(
        <div className="border border-black">{selectedProgression.title}</div>
    ) 
}

export default Workspace