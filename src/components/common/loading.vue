<template>
<div class="loading">
  <div v-for="(dotNum, index) in dotNums" :key="index" :style="dotTransform(index, dotNums)">
    <span :style="dotAimation(index, dotNums)"></span>
  </div>
</div>
</template>
<script>
export default {
  props: {
    loadingRadiusVal: {
      type: Number,
      required: true,
      default: 168
    },
    dotRadiusVal: {
      type: Number,
      required: true,
      default: 24
    },
    dotColorVal: {
      type: String,
      required: true,
      default: '#d8d8d8'
    },
    dotNums: {
      type: Number,
      required: true,
      default: 10
    }
  },
  methods: {
    dotTransform: function(index, dotNums) {
      let rad = 2 * Math.PI / dotNums * index;
      let dotX = Math.cos(rad) * this.loadingRadiusVal / 2;
      let dotY = Math.sin(rad) * this.loadingRadiusVal / 2;
      return { transform: `translate(${dotX}px,${dotY}px)` };
    },
    dotAimation: function(index, dotNums) {
      let delayTime = `${-1 * (1 + (index + 1) * 1 / dotNums) }s`
      return { animationDelay: delayTime }
    }
  },

}
</script>
<style>
.loading{
  height: 300px;
}
</style>


