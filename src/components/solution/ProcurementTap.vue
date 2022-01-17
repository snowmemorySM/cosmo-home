<template>
  <div class="contents">
    <div class="sol-title">
      <span class="sol-sub-title1">e-Procurement</span> 
    </div>
    <div class="sol-content">
      <span>
        <span class="empha">e-ProcurementSystem</span>は 
        Web基盤の母企業協業化システムで、インターネット上で調達業務が出来ます。<br/>
        これにより調達費用を節減し、ERPとの連係により購買リードタイム短縮を実現して業務生産性を極大化出来ます。<br/>
        e-ProcurementSystemは Bidding部門と e-Purchasing部門を独立的に運営することが出来ます。<br/>
        この機能により顧客の管理水準と目的に合致する運用が出来ます。
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
        img1: require('@/assets/images/solution/proc/solution_tree_pro_ul.jpg'),
        img2: require('@/assets/images/solution/proc/solution_tree_pro_ur.jpg'),
        img3: require('@/assets/images/solution/proc/solution_tree_pro_dl.jpg'),
        img4: require('@/assets/images/solution/proc/solution_tree_pro_dr.jpg'),
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

.sol-content {
  width: 100%; 
}

.sol-content span {
  position: relative;
  display: block;
  margin: 0 0 10px 15px;
  text-align: left;
}

.sol-content .empha {
  display: contents;
  color: #021450; 
  font-weight: bold;  
}

.sol-content table {
  position: relative;
  display: block;
  padding-bottom: 10px;
}
</style>