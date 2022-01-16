<template>
  <div class="contents">
    <div class="info-banner">
        <h3>お問い合わせ</h3>        
    </div>
    <div class="input-container">
      <table>
        <tr class="row-first">
          <th><label class="title">お名前</label></th>
          <td class="input-box">
            <b-form-input v-model="name" ></b-form-input>
            <label class="check">(全角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">お名前(ふりがな)</label></th>
          <td>
            <b-form-input v-model="hurigana" ></b-form-input>
            <label class="check">(全角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">メールアドレス</label></th>
          <td>
            <b-form-input type="email" v-model="mail" ></b-form-input>
            <label class="check">(半角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">メールアドレス(確認)</label></th>
          <td>
            <b-form-input type="email" v-model="chkMail" ></b-form-input>
            <label class="check">(半角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">電話番号</label></th>
          <td>
            <b-form-input type="tel" v-model="tel" ></b-form-input>
            <label class="check">(半角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">郵便番号</label></th>
          <td>
            <b-form-input class="input-150" 
                    v-model="postcode" 
                    v-on:keyup="getAddress()" 
                    placeholder="住所自動入力"></b-form-input>
            <label class="check">例）376-0000(半角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">ご住所(都道府県)</label></th>
          <td>
            <b-form-input class="input-150" v-model="address1" ></b-form-input>
            <label class="check">(全角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">ご住所(市区町村以降)</label></th>
          <td>
            <b-form-input v-model="address2" ></b-form-input>
            <label class="check">(全角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">会社名／組織名</label></th>
          <td>
            <b-form-input v-model="company" ></b-form-input>
            <label class="check">(全半角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">部署名</label></th>
          <td>
            <b-form-input v-model="department" ></b-form-input>
            <label class="check">(全半角)</label>
          </td>
        </tr>
        <tr>
          <th><label class="title">お問い合わせ内容</label></th>
          <td>
            <b-form-textarea id="textarea-default" placeholder="内容入力して下さい。" v-model="contents"></b-form-textarea>
          </td>
        </tr>
      </table>
      <div class='btn-box'>
        <b-button variant="success" @click="submitForm">送信</b-button>
      </div>
    </div>
    <!-- <PagingBar v-on:next="nextPage"></PagingBar> -->
  </div>
</template>

<script>
import api from '../api/ApiModul'

const regPostCode = /\d{3}-\d{4}/
// const regTel = /\d{2,4}-\d{2,4}-\d{4}/

export default {
  name: 'QnA',
  components: { 
    
  },
  watch: {
    
  },
  data() {
    return {
      name: '',
      hurigana: '',
      mail:'',
      chkMail: '',
      tel: '',
      postcode: '',
      address1: '',
      address2: '',
      company: '',
      department: '',
      contents: '',
      isLoding: false,
    }
  },
  methods: {
    getAddress() {
      if (regPostCode.test(this.postcode)) {
        api.getAddress(this.postcode)
        .then((response) => {
          if (response.data.results) {
            const result = response.data.results[0]
            this.address1 = result.address1
            this.address2 = result.address2 + result.address3
          } else {
            this.address1 = ''
            this.address2 = ''
            this.postcode = ''
          }
        })
        .catch(error => {
            console.log(error)
        })
      }
    },
    submitForm() {
      const formData = new FormData();
      formData.append('name',this.name)
      formData.append('hurigana',this.hurigana)
      formData.append('email',this.mail)
      formData.append('tel',this.tel)
      formData.append('postCode',this.postcode)
      formData.append('address', this.address1)
      formData.append('addrDetail', this.address2)
      formData.append('company',this.company)
      formData.append('department',this.departent)
      formData.append('contents',this.contents)
      // console.log('submit : ' + formData('name'))
      api.upload(formData)
      .then((response) => {
        console.log(`response => ${response}`)
      })
      .catch(error => {
        console.log(`error => ${error}`)
      })
    }
  }
}
</script>

<style scoped>
.input-container {
  width: 80%;
  margin: 0 auto;
}

tr {
  border-bottom: 1px solid #CDCDCD;
}

.row-first {
  border-top: 1px solid #CDCDCD;
}

table {
  width: 100%;
}

th {
  text-align: left;
  width: 250px;
  padding: 14px 0 10px 14px;
  background-color: #f4f5f7;
  border-right: 1px solid #CDCDCD;
  color: #003cb3;
  font-weight: bold;
}

td {
  position: inherit;
  width: 800px;
  text-align: left;
}

td input {
  width: 300px;
  margin-left: 10px;
  float: left;
}

td .check {
  padding: 6px 0 0 6px;
}

td .input-150 {
  width: 150px;
}

td textarea {
  margin: 5px 0 5px 10px;
  width: 98%;
  min-height: 300px;
}

.btn-box {
  position: relative;
  margin: 20px 0 30px 0;
  text-align: center;
}

.btn-box button {
  padding: 5px 90px;
    font-size: 25px;
    font-weight: bold;
}
</style>