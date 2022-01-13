<template>
    <div class="overflow-auto">
        <div class="mt-3">
            <h6>Default Pills</h6>
            <b-pagination v-model="currentPage" pills :total-rows="rows" @page-click="pageClick">
                
            </b-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PagingBar',
    data() {
      return {
        rows: 100,
        currentPage: 1
      }
    }, 
    methods: {
        pageClick(button, page) {
            console.log('button : ' + button)
            console.log('page : ' + page)
            this.$emit('next', page);
        },
    }
}
</script>

<style scoped>

</style>