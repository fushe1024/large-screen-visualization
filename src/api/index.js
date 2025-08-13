import request from '../utils/request'

// 接口
export const getVisualization = () => {    
  return request({
    url: '/visualization',
  })
}
