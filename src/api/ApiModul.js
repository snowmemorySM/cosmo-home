import axios from 'axios'

export default {
    async getAddress(postcode) {
        // 「郵便番号」APIから住所情報を取得する。
        return await axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`)
    },
    async upload(data) {
        // 「お問い合わせ」APIにデータを送信する。
        return await axios.post('/v1/api/qna/create', data)
    }
}