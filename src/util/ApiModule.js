import axios from 'axios'

export default {
    loadData(page, keyword) {
        var path = `/v1/api/qna?page=${page}`
        if (keyword) {
            path += `&keyword=${keyword}`
        }
        axios.get(path)
        .then((response) => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log('finally')
        })
        return 'call loadData';
    }
}