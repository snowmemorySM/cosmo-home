<template>
  <div class="contents">
    <div class="sol-title">
      <span class="sol-sub-title1">e-SCM</span> 
      <span class="sol-sub-title2">Supply Chain Management</span>
    </div>
    <div class="sol-content">
      <span>
        SCMの一番基本的な思想の情報を適時に提供してその情報を SCMに参加するすべての取り引き担当者らが共有するのと<br/>
        供給網全体の担当者らが共同に計画して実践することで SCMの效果と利益はすべての部分で得られることができます。<br/>
        SCMは再考減少、業務手続きの簡素化、業務処理の時間短縮などの效果を得ることができます。
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
        img1: require('@/assets/images/solution/scm/solution_tree_scm_ul.jpg'),
        img2: require('@/assets/images/solution/scm/solution_tree_scm_ur.jpg'),
        img3: require('@/assets/images/solution/scm/solution_tree_scm_dl.jpg'),
        img4: require('@/assets/images/solution/scm/solution_tree_scm_dr.jpg'),
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