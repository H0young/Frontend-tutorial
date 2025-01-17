export default {
    template: '#search-form',
    props: ['value'],
    data() {
        return {
            inputvalue: this.value
        }
    },
    watch: {
        value(newVal, oldVal) {
            this.inputvalue = newVal

        }
    },
    methods: {
        onSubmit() {
            this.$emit('@submit', this.inputvalue.trim())

        },
        onKeyup() {
            if (!this.inputvalue.length) this.onReset();
        },

        onReset() {
            this.inputvalue = '',
                this.$emit('@reset')

        }
    }
}