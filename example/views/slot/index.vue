<template>
  <YcbViewLoading ref="viewLoading" :load="handleLoad">
    Slot
    <template #load>
      <div>
        loading...
      </div>
    </template>

    <template #fail>
      <div @click="handleReload">
        出错啦，点击重新加载
      </div>
    </template>
  </YcbViewLoading>
</template>

<script>
import YcbViewLoading from '../../../dist/vue-view-loading.umd'

export default {
  name: 'SlotTest',
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
        }, 3000)
      })
    },
    handleReload() {
      this.$refs.viewLoading.reload()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
