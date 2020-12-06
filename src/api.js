import axios from 'axios'

const getAllPositions = (description, location) => {
    const base_url = process.env.REACT_APP_BASE_URL
    let url = base_url + 'https://jobs.github.com/positions.json?'
    let count = 0;
    let param = '';
    if(!isBlank(description)) {
        param = `description=${description}`
        url = url + addParam(param, count)
        count++;
    }
    if(!isBlank(location)) {
        param = `location=${location}`    
        url = url + addParam(param, count)
        count++;
    }
    
    console.log('url: ' + url)
    
    return axios.get(url);
}

// Example: https://jobs.github.com/positions/6b9dce23-5790-46eb-9fbe-8090704eecef.json
const getPositionById = (id) => {
    const base_url = process.env.REACT_APP_BASE_URL
    let url = base_url + `https://jobs.github.com/positions/${id}.json`
    console.log(url);
    return axios.get(url);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function addParam(param, count) {
    if(count > 0) {
        return '&' + param;
    }
    return param;
}

export {getAllPositions, getPositionById}

