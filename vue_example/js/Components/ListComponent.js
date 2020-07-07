export default {
    template: '#list',
    props: ['data', 'type'],
    computes: {
        keywordType() {
            return this.type === 'keywords'
        },
        HistoryType() {
            return this.type === 'history'
        }
    },
    methods: {
        onClickList(keyword) {
            this.$emit('@click', keyword)

        },
        onRemoveList(keyword) {
            this.$emit('@remove', keyword)

        }
    }
}