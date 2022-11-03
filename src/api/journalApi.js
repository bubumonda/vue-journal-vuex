import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-98eae-default-rtdb.firebaseio.com'
})

export default journalApi