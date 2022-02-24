<template>
    <div id="footer">
        <div class="fot-info-box">
          <div class="left-box">
            <span id="per-info">
              <!-- 개인정보 -->
              <router-link :to="{path: '/privercy/privercy_policy'}" class="per-info-link">個人情報保護方針</router-link>
              <router-link :to="{path: '/privercy/privercy_handing'}" class="per-info-link">個人情報の取り扱いについて</router-link>
              <router-link :to="{path: '/privercy/privercy_disclosure'}" class="per-info-link">開示対象個人情報に関する問合せについてのご案内</router-link>
            </span>
            <span id="cp-right">
              <!-- 회사 -->
              コスモコンサルティング株式会社<br/>
              Copyright(C) 2007 Cosmo Consulting Inc. All Rights Reserved.
            </span>
          </div>
          <div class="right-box">
            <span id="secu-icon">
              <!-- icon -->
              <img src="@/assets/images/pmark/jp/Pmark75_JP.gif"/>
            </span>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style scoped>
#footer {
  position: relative;
  display: block;
  top: 60px;
  margin-top: 20px;
  min-height: 90px;
  border-top: 1px solid #CDCDCD;
  background-color: #fff;
}

#footer .fot-info-box {
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
}

.fot-info-box .left-box {
  position: absolute;
  text-align: left;
  left: 0;
}

.fot-info-box .left-box #per-info,
.fot-info-box .left-box #cp-right {
  display: block;
  padding: 2px 0;
}

#per-info {
  font-size: 15px;
}

#per-info .per-info-link {
  margin-right: 10px;
  color: rgb(53, 54, 58);
  text-decoration: none;
}

.fot-info-box .left-box #cp-right { 
  font-size: 10px;
  margin-top: 10px;
}

.fot-info-box .right-box {
  position: absolute;
  right: 0;
}

.fot-info-box .right-box #secu-icon {
  display: block;
  width: 75px;
  height: 75px;
}

@media (max-width: 790px) {
  #per-info .per-info-link {
    margin-right: 0;
    display: block;
    margin-bottom: 5px;
  }
  
  .fot-info-box .right-box {
    right: -15px; 
  }
}

</style>
