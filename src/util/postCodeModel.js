import axios from 'axios'

export default {
    getAddress(postcode) {
        // 모듈 함수 기능 작성
        axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`)
        .then((response) => {
            console.log(response.data.results)
            return 'test'
        })
        .catch(error => {
            console.log(error)
        })
        // .finally(() => {
        //     console.log('finally')
        // })

        return `call getAddress = ${postcode}`
    }
}