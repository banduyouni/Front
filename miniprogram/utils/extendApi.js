

const toast = ({title = '数据加载中...', icon='none', duration=2000, mask=true} = {}) => {
  wx.showToast({
    title,
    icon,
    duration,
    mask
  })
} 

const modal = (options = {}) => {
  return new Promise((resolve) => {

    // 默认参数
    const defaultOpt = {
      title: '提示',
      content: '您确定执行该操作吗？',
      confirmColor:'#f3514f'
    }

    // Object.assign参数合并
    const opts = Object.assign({}, defaultOpt, options)

    wx.showModal({
      ...opts,
      complete({confirm, cancel}){
        confirm&&resolve(true)
        cancel&&resolve(false)
      }
    })

  })
}

wx.toast = toast
wx.modal = modal

export  {toast, modal}