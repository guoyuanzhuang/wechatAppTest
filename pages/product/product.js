// pages/product/product.js
const requestUrl = 'https://gwserv.ddsoucai.com/ddsc-app/app/resource'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    RECOMMEND_HEADER: [],
    RECOMMEND_ACTIVITY: [],
    APP_HOME_BOTTOM: [],
    RECOMMEND_BANNER: [],
    RECOMMEND_NOTICE: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    wx.showToast({
      title: '加载中...',
      icon: 'loading'
    })
    wx.request({
      url: requestUrl,
      data: {
        keys: "RECOMMEND_NOTICE;RECOMMEND_ACTIVITY;RECOMMEND_BANNER;RECOMMEND_HEADER;APP_HOME_BOTTOM"
      },
      success(result) {
        wx.hideToast()
        self.setData({
          loading: false,
          RECOMMEND_HEADER: result.data.result.RECOMMEND_HEADER,
          RECOMMEND_ACTIVITY: result.data.result.RECOMMEND_ACTIVITY,
          APP_HOME_BOTTOM: result.data.result.APP_HOME_BOTTOM,
          RECOMMEND_BANNER: result.data.result.RECOMMEND_BANNER,
          RECOMMEND_NOTICE: result.data.result.RECOMMEND_NOTICE
        })
        console.log('request success', result.data)
      },
      fail({ errMsg }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }, 

  startRequest(){
    
    const self = this

    self.setData({
      loading: true
    })

    wx.request({
      url: requestUrl,
      data: {
        keys: "RECOMMEND_NOTICE;RECOMMEND_ACTIVITY;RECOMMEND_BANNER;RECOMMEND_HEADER;APP_HOME_BOTTOM"
      },
      success(result) {
        wx.showToast({
          title: "请求成功",
          icon: 'success',
          mask: true,
          duration: 3000,
        })
        self.setData({
          loading: false,
          RECOMMEND_HEADER: result.data.result.RECOMMEND_HEADER,
          RECOMMEND_ACTIVITY: result.data.result.RECOMMEND_ACTIVITY,
          APP_HOME_BOTTOM: result.data.result.APP_HOME_BOTTOM,
          RECOMMEND_BANNER: result.data.result.RECOMMEND_BANNER,
          RECOMMEND_NOTICE: result.data.result.RECOMMEND_NOTICE
        })
        console.log('request success', result.data)
      },
      fail({ errMsg }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }

})