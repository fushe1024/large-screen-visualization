<script setup>
import { ref, watch, onMounted } from 'vue'
import echarts from '../utils/echarts'
import { RandomColor } from '../utils/color'

const props = defineProps({
  data: {
    type: Object
  }
})

let mChart = null
const target = ref(null)

// 绘制 echarts
const DrawChart = () => {
  const options = {
    series: [
      {
        // 类型
        type: 'wordCloud',
        // 数据映射文本的大小范围
        sizeRange: [8, 46],
        // 文字旋转范围
        rotationRange: [0, 0],
        // 单词之间的间距
        gridSize: 0,
        // 渲染动画
        layoutAnimation: true,

        // 字体
        textStyle: {
          // 随机色值
          color: () => RandomColor()
        },
        // 高亮字体
        emphasis: {
          textStyle: {
            fontWeight: 'bold',
            color: '#000'
          }
        },
        // 数据
        data: props.data.datas
      }
    ]
  }

  mChart.setOption(options)
}

// 初始化 echart
onMounted(() => {
  mChart = echarts.init(target.value)
  DrawChart()
})

// 监听数据变化
watch(
  () => props.data,
  () => {
    DrawChart()
  }
)
</script>

<template>
  <div>
    <div>【关键词条】</div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<style scoped></style>
