<template>
    <div class="overflow-auto">
        <div class="mt-3 search-box">
            <div class="input">
                <b-input-group class="mt-3">
                    <b-form-input v-model="keyword"
                        v-on:keyup.enter="search" 
                        placeholder="検索条件を入力して下さい。">
                    </b-form-input>
                    <b-input-group-append>
                        <b-button variant="primary" v-on:click="search">検索</b-button>
                    </b-input-group-append>
                </b-input-group>
            </div>
        </div>
        <div class="mt-3">
            <b-pagination align="center" 
                    v-model="currentPage" pills 
                    :per-page="perPage"
                    :total-rows="rows" 
                    @page-click="pageClick"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PagingBar',
    data() {
      return {
        rows: 21,
        perPage: 10,
        currentPage: 1,
        page: '1',
        keyword: '',
      }
    }, 
    methods: {
        pageClick(button, page) {
            this.page = page
            this.next(page, this.keyword)
        },
        search() {
            this.next(this.page, this.keyword)
        },
        next(page, keyword) {
            this.$emit('next', page, keyword);
        }
    }
}
</script>

<style scoped>
.search-box {
    height: 50px;
}

.input {
    position: relative;
    display: block;
    width: 300px;
    height: 40px;
    margin: 0 auto;
    top: 5px;
}
</style>