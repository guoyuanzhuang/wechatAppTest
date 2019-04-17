//index.js
//获取应用实例
const app = getApp()

Page({
  
  clickMe() {
    // this.setData({ msg: 'Hello' }),
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: (res) => {
    //     const latitude = res.latitude // 纬度
    //     const longitude = res.longitude // 经度
    //   }
    // })
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {
    // return {
    //   title: '页面跳转',
    //   path: 'page/API/pages/navigator/navigator'
    // }
  }, 

})