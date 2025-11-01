import Matrix3 from "XrFrame/math/matrix3"

export const setStorage = (key, data) =>{
  try{
    wx.setStorageSync(key, data)
  }catch(error){
    console.error(`存储指定 ${key} 数据发送了异常`,error)
  }
}

export const getStorage = (key) =>{
  try{
    const data = wx.getStorageSync(key)
    if(data){
      return data
    }
  }catch(error){
    console.error(`读取指定 ${key} 数据发送了异常`,error)
  }
}

export const removeStorage = (key) => {
  try{
    wx.removeStorageSync(key)
  }catch(error){
    console.error(`移除指定 ${key} 数据发送了异常`,error)
  }
}

export const clearStorage = () => {
  try{
    wx.clearStorageSync()
  }catch(error){
    console.error(`清除、清空数据发送了异常`,error)
  }
}

export const asyncSetStorage = (key, data) => {
  return new Promise( (resolve) => {
    wx.setStorage({
      key,
      data,
      complete(res) {
        resolve(res)
      }
    })
  })
}

export const asyncGetStorage = (key) => {
  return new Promise( (resolve) => {
    wx.getStorage({
      key,
      complete(res) {
        resolve(res)
      }
    })
  })
}

export const asyncRemoveStorage = (key) => {
  return new Promise( (resolve) => {
    wx.removeStorage({
      key,
      complete(res) {
        resolve(res)
      }
    })
  })
}

export const asyncClearStorage = () => {
  return new Promise( (resolve) => {
    wx.clearStorage({
      complete(res) {
        resolve(res)
      }
    })
  })
}