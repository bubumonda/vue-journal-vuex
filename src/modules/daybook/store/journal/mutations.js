export const setEntries = (state,entries) => {

    state.entries=  [...state.entries,  ...entries]
    state.isLoading = false
}
export const updateEntry = (state, entry) => {
    const idx = state.entries.map(e=> e.id).indexOf(entry.id)
    

    state.entries[idx] = entry

}
export const addEntry = (state, entry) => {
    state.entries= [entry, ...state.entries]
    // state=> entries debe de ser la primera

}
export const deleteEntry = (state, id)=>{
    const filterEntries = state.entries.filter((e) => e.id !== id)
    state.entries = [...filterEntries]

}