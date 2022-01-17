<template>
  <div class="contents">
    <div class="sol-title">
      <span class="sol-sub-title1">e-ERP</span> 
      <span class="sol-sub-title2">Enterprise Resource Planning</span>
    </div>
    <div class="sol-content">
      <span>
        企業用 e-Enterprise ソリューションで、 APICS （アメリカ生産及び在庫管理協会）標準基盤をベースにした改良形システムであり、<br/>
        流通及び製造関連業に最適化されています。
      </span>
      <table width="610" border="0" cellspacing="0" cellpadding="0" align="center">
        <tbody>
          <tr>
            <td><img :src="images.img1"></td>
            <td><img :src="images.img2"></td>
          </tr>
          <tr>
            <td><img :src="images.img3"></td>
            <td><img :src="images.img4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: {
        img1: require('@/assets/images/solution/erp/solution_tree_erp_ul.png'),
        img2: require('@/assets/images/solution/erp/solution_tree_erp_ur.png'),
        img3: require('@/assets/images/solution/erp/solution_tree_erp_dl.png'),
        img4: require('@/assets/images/solution/erp/solution_tree_erp_dr.png'),
      }
    };
  },
}
</script>

<style scoped>
.contents {
  position: relative;
}

.sol-title {
  position: relative;
  display: block;
  height: 46px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid #021450;

}

.sol-title span {
  float:left;
}

.sol-title .sol-sub-title1 { 
  background-color: #021450;
  padding: 10px 40px;
  font-weight: bold;
  color: #fff;
  position: relative;
  border-radius: 5px 5px 0 0;
}

.sol-title .sol-sub-title2 { 
  margin: 10px;
}

.sol-content {
  width: 100%; 
}

.sol-content span {
  position: relative;
  display: block;
  margin: 0 0 10px 15px;
  text-align: left;

}

.sol-content table {
  position: relative;
  display: block;
  padding-bottom: 10px;
}
</style>