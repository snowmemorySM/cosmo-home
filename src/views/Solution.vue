<template>
  <div class="solution-box">
    <div class="sol-banner">

    </div>
    <b-tabs nav-class="tabs-box-nav" content-class="mt-3" justified>
      <b-tab title="E-ERP">
        <e-ERP/>
      </b-tab>
      <b-tab title="E-SCM">
        <e-SCM/>
      </b-tab>
      <b-tab title="E-Procurement">
        <e-Procurement/>
      </b-tab>
      <b-tab title="E-MarketPlace">
        <e-MarketPlace/>
      </b-tab>
      <b-tab title="E-ShoppingMall">
        <e-ShoppingMall/>
      </b-tab>
      <b-tab title="E-HomePage">
        <e-HomePage/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import ErpTap from '../components/solution/ErpTap.vue'
import ScmTap from '../components/solution/ScmTap.vue'
import ProcurementTap from '../components/solution/ProcurementTap.vue'
import MarketPlaceTap from '../components/solution/MarketPlace.vue'
import ShoppingMallTap from '../components/solution/ShoppingMallTap.vue'
import HomePageTap from '../components/solution/HomePageTap.vue'

export default {
  name: 'solution',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'e-ERP': ErpTap,
    // eslint-disable-next-line vue/no-unused-components
    'e-SCM': ScmTap,
    // eslint-disable-next-line vue/no-unused-components
    'e-Procurement': ProcurementTap,
    // eslint-disable-next-line vue/no-unused-components
    'e-MarketPlace': MarketPlaceTap,
    // eslint-disable-next-line vue/no-unused-components
    'e-ShoppingMall': ShoppingMallTap,
    // eslint-disable-next-line vue/no-unused-components
    'e-HomePage': HomePageTap
  }
}

</script>

<style scoped>
.solution-box {
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  min-height: 500px;
}

.sol-banner {
  width: 100%;
  height: 100px;
  background-color: darkcyan;  
  margin-bottom: 20px;
}

.solution-box .tab-pane {
  min-height: 500px;
}

@media (max-width: 684px) {
  .solution-box {
    width: 90%;
  }
  
  
}



</style>