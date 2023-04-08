import axios from 'axios'

//use for hitting all the endpoints of the backend
export default() =>{
    return axios.create({
        baseURL: 'http://localhost:8081/'
    })
}

//returns axios that points to a certain url