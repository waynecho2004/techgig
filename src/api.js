import axios from 'axios'

const getAllPositions = (description, location) => {
    let url = 'https://jobs.github.com/positions.json'
    if (description && location) {

    } 
    
    return axios.get(url);
}

export {getAllPositions}

