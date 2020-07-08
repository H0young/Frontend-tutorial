<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="inputvalue" v-on:keyup="onKeyup" placeholder="검색어를 입력하세요" autofocus />
    <button v-show="inputvalue.length" v-on:click="onReset" type="reset" class="btn-reset"></button>
  </form>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      inputvalue: this.value
    };
  },
  watch: {
    value(newVal, oldVal) {
      this.inputvalue = newVal;
    }
  },
  methods: {
    onSubmit() {
      this.$emit("@submit", this.inputvalue.trim());
    },
    onKeyup() {
      if (!this.inputvalue.length) this.onReset();
    },

    onReset() {
      (this.inputvalue = ""), this.$emit("@reset");
    }
  }
};
</script>