<template>
  <div class="contents">
    <div class="sol-title">
      <span class="sol-sub-title1">e-MarketPlace</span> 
    </div>
    <div class="sol-content">
      <span>
        <span class="empha">e-MarketPlaceSystem</span>
          は Web基盤の公開購買システムで、インターネット上で簡単に調達業務が出来ます。<br/>
					また、合理的な購買価額で企業の調達費用を節減し、全社的資源管理(ERP)システムとの連係により<br/>
					購買リードタイムの短縮を実現し、業務生産性を極大化するように支援します。
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
          <tr>
            <td><img :src="images.img5"></td>
            <td><img :src="images.img6"></td>
          </tr>
          <tr>
            <td><img :src="images.img7"></td>
            <td><img :src="images.img8"></td>
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
        img1: require('@/assets/images/solution/mkp/solution_tree_market_ul01.jpg'),
        img2: require('@/assets/images/solution/mkp/solution_tree_market_ur01.jpg'),
        img3: require('@/assets/images/solution/mkp/solution_tree_market_ul02.jpg'),
        img4: require('@/assets/images/solution/mkp/solution_tree_market_ur02.jpg'),

        img5: require('@/assets/images/solution/mkp/solution_tree_market_dl01.jpg'),
        img6: require('@/assets/images/solution/mkp/solution_tree_market_dr01.jpg'),
        img7: require('@/assets/images/solution/mkp/solution_tree_market_dl02.jpg'),
        img8: require('@/assets/images/solution/mkp/solution_tree_market_dr02.jpg'),

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