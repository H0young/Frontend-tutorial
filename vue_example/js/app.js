import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'

new Vue({
    el: '#app',
    data: {
        query: '', //입력 데이터 받아 저장, v-model: 양 방향
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        keywords: [],
        searchResult: [],
    },
    created() {
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onKeyup(e) {
            if (!this.query.length) this.resetForm()
        },
        onReset(e) {
            this.resetForm()
        },
        onClickTab(tab) {
            this.selectedTab = tab
        },
        onClickKeyword(keyword) {
            this.query = keyword
            this.search()
        },
        fetchKeyword() {
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        search(e) {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })

        },
        resetForm(e) {
            this.query = ''
            this.submitted = false
            this.searchResult = []
        }
    }
})