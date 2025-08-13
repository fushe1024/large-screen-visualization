<script setup>
import { ref, watch, onMounted } from 'vue'
import echarts from '../utils/echarts'

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
    xAxis: {
      type: 'category',
      data: props.data.servers.map((item) => item.name),
      axisLabel: {
        color: '#9EB1C8'
      }
    },
    yAxis: {
      show: false,
      type: 'value',
      max: (value) => parseInt(value.max * 1.2)
    },
    grid: {
      top: 16,
      right: 0,
      bottom: 26,
      left: -26,
      outerBoundsMode: 'same'
    },
    series: [
      {
        type: 'bar',
        data: props.data.servers.map((item) => {
          return { name: item.name, value: item.value }
        }),
        // 每个轴的样式
        itemStyle: {
          color: '#479AD3',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 5
        },
        // 轴宽度
        barWidth: 12,
        // 轴上的字体
        label: {
          show: true,
          // 设置标签位置为右侧
          position: 'top',
          color: '#fff',
          formatter: '{c}%'
        }
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
    <div>【竖向柱形图】</div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<style scoped></style>
