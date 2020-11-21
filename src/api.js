import axios from 'axios'

const getAllPositions = (description, location) => {
    const base_url = process.env.REACT_APP_BASE_URL
    let url = base_url + 'https://jobs.github.com/positions.json'
    console.log('url: ' + url)
    if (description && location) {

    } 
    
    return axios.get(url);
}

export {getAllPositions}

