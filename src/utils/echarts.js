// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'

// 引入 echarts 词云插件
import 'echarts-wordcloud'

// 引入柱状图图表，图表后缀都为 Chart
import {
  BarChart,
  RadarChart,
  GraphChart,
  LinesChart,
  PieChart,
  EffectScatterChart
} from 'echarts/charts'

// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  PolarComponent,
  GeoComponent,
  TimelineComponent
} from 'echarts/components'

// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'

// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  BarChart,
  RadarChart,
  GraphChart,
  LinesChart,
  PieChart,
  EffectScatterChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  PolarComponent,
  GeoComponent,
  TimelineComponent
])

export default echarts
