<script setup>
import HorizontalBar from './components/HorizontalBar.vue'
import RadarBar from './components/RadarBar.vue'
import Relation from './components/Relation.vue'
import TotalData from './components/TotalData.vue'
import MapChart from './components/MapChart.vue'
import VerticalBar from './components/VerticalBar.vue'
import RadiueBar from './components/RadiueBar.vue'
import WordCloud from './components/WordCloud.vue'
import { getVisualization } from './api/index'
import { ref, onBeforeUnmount } from 'vue'

// 获取数据方法
const allData = ref(null)
const getData = async () => {
  const res = await getVisualization()
  allData.value = res
}
getData()

// 开启定时器
const timeId = setInterval(() => {
  getData()
}, 3000)

// 清除定时器
onBeforeUnmount(() => {
  clearInterval(timeId)
})
</script>

<template>
  <div
    v-if="allData"
    class="container-box bg-cover bg-no-repeat h-screen text-white p-5 flex overflow-hidden"
  >
    <div class="flex-1 mr-5 bg-slate-800/50 flex flex-col p-3">
      <!-- 横向柱状图 -->
      <HorizontalBar class="h-1/3 box-border pb-5" :data="allData.regionData"></HorizontalBar>
      <!-- 雷达图 -->
      <RadarBar class="h-1/3 box-border pb-5" :data="allData.riskData"></RadarBar>
      <!-- 数据关系图 -->
      <Relation class="h-1/3 box-border" :data="allData.relationData"></Relation>
    </div>

    <div class="w-1/2 mr-5 flex flex-col">
      <!-- 数据总揽图 -->
      <TotalData class="p-3 bg-slate-800/50" :data="allData.totalData"></TotalData>
      <!-- 地图可视化 -->
      <MapChart class="p-3 bg-slate-800/50 flex-1 mt-5" :data="allData.mapData"></MapChart>
    </div>

    <div class="flex-1 bg-slate-800/50 flex flex-col p-3">
      <!-- 竖向柱状图 -->
      <VerticalBar class="h-1/3 box-border pb-5" :data="allData.serverData"></VerticalBar>
      <!-- 环形图 -->
      <RadiueBar class="h-1/3 box-border pb-5" :data="allData.abnormalData"></RadiueBar>
      <!-- 词云 -->
      <WordCloud class="h-1/3 box-border" :data="allData.wordCloudData"></WordCloud>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-box {
  background-image: url('./assets/imgs/bg.jpg');
}
</style>
