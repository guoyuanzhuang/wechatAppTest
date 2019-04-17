// pages/home/home.js
let image1 = 'images/banner01.jpg';
let image2 = 'images/banner02.jpg';
let image3 = 'images/banner03.jpg';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: (new Date()).toString(),
    condition: true,
    length: 1,
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    background: [image1, image2, image3],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  clickBtn(){
    wx.navigateTo({
      url: '../index/index',  //banner/banner
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})