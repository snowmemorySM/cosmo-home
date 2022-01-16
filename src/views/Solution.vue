<template>
  <div class="container">
    <b-tabs content-class="mt-3">
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
.container {
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  min-height: 500px;
}
.container .tab-pane {
  min-height: 500px;
  background-color: aquamarine;
}
</style>