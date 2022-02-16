<template>
  <div class="rec-box">
      <div class="row">
        <h1>採用情報</h1>
      </div>
      <div class="row">
        <div class="col-2">募集時期</div>
        <div class="col-10">随時採用</div>
      </div>
      <div class="row">
        <div class="col-2">応募資格</div>
        <div class="col-10">
          仕事に固い意志と情熱がある者 ・海外勤務に欠格事由がない者<br/>
          情報システムに関するシステムエンジニアおよびプログラマ
        </div>
      </div>
      
      <div class="row">
        <div class="col-2">提出書類</div>
        <div class="col-10">
          経歴社員：履歴書、自己紹介書、経歴書、資格証明書及び認証書<br/>
          新入社員：履歴書、自己紹介書、資格証明書及び認証書
        </div>
      </div>

      <div class="row">
        <div class="col-2">採用方法</div>
        <div class="col-10">Ｅメール受付及び訪問受付</div>
      </div>

      <div class="row">
        <div class="col-2">給与等</div>
        <div class="col-10">
          面談後、別途相談<br/>
          経験・能力を考慮の上、当社規定により優遇します。
        </div>
      </div>

      <div class="row">
        <div class="col-2">勤務時間</div>
        <div class="col-10">
          ９：００～１８：００（客先に準ずる）<br/>
          休日：土曜、日曜、祝日、慶弔休暇等
        </div>
      </div>

      <div class="row">
        <div class="col-2">提出先及び<br>採用問い合せ</div>
        <div class="col-10">
          〒101-0031
          東京都千代田区東神田2-10-14<br/>
          日本センヂミアビル401号<br/>
          TEL : 03-5835-3970<br/>
          FAX : 03-5835-3971<br/>
          
          <span class="btn-box">
            <b-button @click="openModalMap()" size="sm" variant="primary">
              <b-icon icon="map-fill" aria-label="地図"></b-icon>
            </b-button>

            <b-button href="mailto:japan@cosmo-global.com" size="sm" variant="primary">
              <b-icon icon="envelope-fill" aria-label="メール"></b-icon>
            </b-button>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col-2">その他</div>
        <div class="col-10">
          履歴・経歴書等に偽りがあった場合には、合格及び入社を取消すことがあります。<br/>
          仕事の特性、職種によって、手続きや応募資格に差があります。<br/>
          詳しいことは当社の採用担当者宛にお問い合わせ下さい。
        </div>
      </div>
      <b-modal ref="modal-map" id="modal-map" size="xl" hide-header centered >
        <template #modal-footer="{ cancel }">
          <b-button size="sm" variant="outline-danger" @click="cancel()">閉じる</b-button>
        </template>
        <div>
          <div id="map" style="height: 400px;"/>
        </div>
      </b-modal>
  </div>
</template>

<script>
import loader from '../api/gmaps'

const location = { lat: 35.6955595, lng: 139.7792479 };

export default {
    name: 'Recruit',
    data() {
      return {
        map: null,
      };
    },
    methods: {
      openModalMap() {
        this.$refs['modal-map'].show();
        loader.load().then((google) => {
            const map = new google.maps.Map(document.getElementById("map"), {
              center: location,
              zoom: 15
            });
            new google.maps.Marker({
              position: location,
              map,
              title: "コスモコンサルタント株式会社",
            });
            this.map = map
        });
      },
      closeModalMap() {
        this.$refs['modal-map'].hide();
      },
    }
}
</script>


<style scoped>

.rec-box {
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  min-height: 500px;
}

.rec-box .col-2, .rec-box .col-10 {
  padding: 0.75rem 1rem 0.75rem 1rem;
  text-align: left;
}

.rec-box .col-2 {
  background-color: rgb(3, 43, 97);
  border-bottom: 1px solid #fff;
  font-weight: bold;
  color: #fff;
}

.rec-box .col-10 {
  border-bottom: 1px solid rgb(53, 54, 58);;
}

.btn-box {
  position: relative;
  margin-top: 5px;
}
.btn-box button {
  margin-right: 5px;
  margin-bottom: 0;
}


</style>