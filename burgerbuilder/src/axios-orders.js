import axios from 'axios'
import fburl from './fburl'
const instance=axios.create({
    baseURL:`${fburl}`})
    export default instance