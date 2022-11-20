import request from '@/utils/request'
export default {

  // 添加小节
  addVideo(video) {
    return request({
      url: '/eduservice/video/addVideo',
      method: 'post',
      data: video
    })
  },

  // 删除小节同时删除视频
  deleteVideo(id) {
    return request({
      url: `/eduservice/video/${id}`,
      method: 'delete'
    })
  },
  // 删除视频
  deleteAliyunvod(id) {
    return request({
      url: '/eduvod/video/removeAlyVideo/' + id,
      method: 'delete'
    })
  }
}
