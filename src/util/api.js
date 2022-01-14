import axios from 'axios'

function getPostCode(code) {
    return axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${code}`)
}

function upload(data) {
    return axios.post('/v1/api/qna/create', data)
}


export {
    getPostCode
    ,upload
}