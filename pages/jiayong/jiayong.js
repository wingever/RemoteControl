// pages/search/ssearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goaircondition: function () {
    wx.navigateTo({
      url: 'aircondition/aircondition',
    })
  },
  gotv: function() {
    wx.navigateTo({
      url: 'controler/control',
    })
  },
  onclickHome: function(event) {
    wx.navigateTo({
      url: '../householdAppliance/house'
    })
  },
  onclickPublic: function(event) {
    wx.navigateTo({
      url: '../public/public'
    })
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

  }
})