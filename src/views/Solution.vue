<template>
  <div>
      <e-ERP/>
      <e-SCM/>
      <e-Procurement/>
      <e-MarketPlace/>
      <e-ShoppingMall/>
      <e-HomePage/>
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