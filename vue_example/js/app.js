import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query: '', //입력 데이터 받아 저장, v-model: 양 방향
        submitted: false,
        searchResult: []
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
        search(e) {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })

        },
        resetForm(e) {
            this.query = ''
            // todo 검색결과 숨기기
            debugger
        }
    }
})