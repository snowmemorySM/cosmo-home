import {getPostCode, upload} from './api';


export default {
    async GET_ADDRESS(code) {
        const response = await getPostCode(code)
        // context.commit('Test', response.data)
        console.log(`GET_ADDRESS=${response}`)
        return response
    },

    async CREATE_CANTACT(data) {
        const response = await upload(data)
        console.log(`CREATE_CANTACT=${response}`)
        return response
    }
    // async getAddress(postcode)  {

    //     let response = async() => {
    //         const data = await axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`)
    //         data.then((res) => {
    //             return res
    //         })
    //     }

        
    //     // ƒ response() {
    //     //     return _ref.apply(this, arguments);
    //     //   }
    //     // // var response
    //     // try {
    //     //     response = await axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`)
    //     // } catch (error) {
    //     //     console.log(`error=${error}`)
    //     // }
        

    //     // 모듈 함수 기능 작성
    //     // data = await axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`)
    //     //     .then(async (response) => {
    //     //         if (response.data.results) {
    //     //             return response.data.results[0]
    //     //         }
    //     //     })
    //     //     .catch(error => {
    //     //         console.log(error)
    //     //     })
    //     //     .finally(() => {
    //     //         console.log('finally')
    //     //     })
    //     console.log('ttttt')
    //     console.log(response)
    //     return response.data
    // }
}