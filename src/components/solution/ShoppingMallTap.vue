<template>
  <div class="contents">
    <div class="sol-title">
      <span class="sol-sub-title1">e-ShoppingMall Wizard</span> 
    </div>
    <div class="sol-content">
      <div style="height: 270px;">
        <span class="shop-box1">
          <span class="empha">ｅ－Ｓｈｏｐｐｉｎｇ ＭａｌｌＷｉｚａｒｄ</span>は<br/>
            次世代型のショッピングモール製作方式エディットです。<br/>
            従来型の規則的で固定化された枠組みだけで作成されたものを企画から提案、作成、<br/>
            立上げまでの一連の作業をオーダーメード形式で多様なプラットフォームを提供し、<br/>
            使用方法が簡単・便利であることを追求した、より質の高いショッピングモールを<br/>
            安価に構築するための作成ツールです。
        </span>
        <span class="shop-box2">
          <img :src="images.img2">
        </span>
      </div>
      <div>
        <span>
          <img :src="images.img1">
        </span>
        <span style="padding-bottom: 20px;">
          HTML、Javaと言った開発言語を知らなくても利用可能<br>
          多様なフォームの提供<br>
          多様なサンプルの提供<br>
          多様なオープン型システム（NT、Linux、UNIX等）への具現化の容易性<br>
          制作方法の簡素化<br>
          維持、補修の利便性向上
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: {
        img1: require('@/assets/images/solution/smw/solution_shop_point.jpg'),
        img2: require('@/assets/images/solution/smw/solution_shop_cart.jpg'),
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

.sol-content .shop-box1, .sol-content .shop-box2 {
  float: left;
}

.sol-content .empha {
  display: contents;
  color: #021450; 
  font-weight: bold;  
}
</style>