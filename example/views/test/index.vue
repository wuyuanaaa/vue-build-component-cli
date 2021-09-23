<template>
  <YcbViewLoading :load="handleLoad">
    Test
  </YcbViewLoading>
</template>

<script>
import YcbViewLoading from '../../../dist/vue-view-loading.umd'

export default {
  name: 'Test',
  components: {
    YcbViewLoading
  },
  methods: {
    handleLoad() {
      return new Promise((reslove, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            reslove()
          } else {
            reject()
          }
        }, 5000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
