import journalApi from "@/api/journalApi"


export const loadEntries = async ({commit}) => {
    const {data} = await journalApi.get('/Entries.json')


    if (!data){
        commit('setEntries',[])
        return
    }

    const entries = []
    for ( let id of Object.keys( data )){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries',entries)

}
export const updateEntry = async ({commit},entry) => {
    const {date,text, picture} = entry
    const dataToSave = {
        date,
        text,
        picture
    }
    await journalApi.put(`/Entries/${entry.id}.json`,dataToSave)

    commit('updateEntry',{...entry})


}
export const createEntry = async ({commit}, entry) => {
    const {text,date,picture} = entry
    const dataToSave = {
        text,
        date,
        picture
    }
    const {data} = await journalApi.post('/Entries.json',dataToSave)
    const dataToSend={
        id: data.name,
        date,
        text

    }
    


    commit('addEntry',dataToSend)

    return data.name

}
export const deleteEntry = async({commit}, id)=>{
    await journalApi.delete(`/Entries/${id}.json`)

    commit('deleteEntry',id)

}