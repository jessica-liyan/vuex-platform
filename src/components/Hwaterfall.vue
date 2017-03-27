<template>
    <Waterfall
        :line="line"
        :line-gap="200"
        :min-line-gap="100"
        :max-line-gap="220"
        :single-max-width="300"
        :watch="items"
        ref="waterfall"
      >
        <WaterfallSlot
          v-for="(item, index) in items"
          :width="item.width"
          :height="item.height"
          :order="index"
          :key="item.index"
          class="wrap"
        >
          <div class="item" :style="item.style" :index="item.index"></div>
        </WaterfallSlot>
      </Waterfall>
  </div>
</template>

<script>
import ItemFactory from './../config/item-factory.js'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
  name: 'h-waterfall',
  components: {
    Waterfall,
    WaterfallSlot
  },
  data () {
    return {
      items: ItemFactory.get(40),
      line: 'h',
      align: 'center'
    }
  },
  created () {
    console.log(this.items)
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
