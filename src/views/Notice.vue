<template>
    <div>
        <div class="main-title">
            <h2>お知らせ</h2>
        </div>
        <div class="notice-box">
            <b-table id="notice-table" striped hover :items="list" :fields="fields" :per-page="perPage" :current-page="currentPage">
                <template #cell(title)="row">
                    <div class="cell-title">{{row.item.title}}</div>
                </template>
            </b-table>
        </div>  
        <b-pagination 
            v-model="currentPage" 
            :total-rows="totalCount" 
            :per-page="perPage" 
            align="center"
            aria-controls="notice-table">
        </b-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: [
                {key: 'id', label: 'No.', thClass: 'w10'},
                {key: 'title', label: 'タイトル', thClass: 'w70'},
                {key: 'date', label: '登録日', thClass: 'w20'},
            ],
            list: [
                {
                id: 11,
                date: '2022-02-18',
                title: 'test title 5'
                },
                {
                id: 10,
                date: '2022-02-01',
                title: 'test title 4'
                },
                {
                id: 9,
                date: '2022-01-20',
                title: 'test title 3'
                },
                {
                id: 8,
                date: '2021-12-10',
                title: 'test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2'
                },
                {
                id: 7,
                date: '2021-11-29',
                title: 'test title 1'
                },
                {
                id: 6,
                date: '2022-02-18',
                title: 'test title 5'
                },
                {
                id: 5,
                date: '2022-02-01',
                title: 'test title 4'
                },
                {
                id: 4,
                date: '2022-01-20',
                title: 'test title 3'
                },
                {
                id: 3,
                date: '2021-12-10',
                title: 'test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2'
                },
                {
                id: 2,
                date: '2021-11-29',
                title: 'test title 1'
                },
                {
                id: 1,
                date: '2021-11-29',
                title: 'test title 1'
                },
            ],
            perPage: 10,
            currentPage: 1,
            totalCount: 11,
        };
    },
}
</script>

<style scoped>
.main-title,
.notice-box {
    position: relative;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
}

.notice-box {
    min-height: 500px;
}

.cell-title {
    text-align: left;
}
</style>