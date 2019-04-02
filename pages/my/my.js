// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  showAboutMe: function(event){
    wx.navigateTo({
      url: '../aboutMe/aboutMe',
    })
  },
  /*****
   * 电话接口调用
   */
  callHelp: function(){
    wx.makePhoneCall({
      phoneNumber: '13258353231',
    })
  },
  /****
   * 查看余额
   */
  showBalance:function(){
    wx.navigateTo({
      url: '../balance/balance',
    })
  },
  /****
   * 查看红包
   */
  showRedPacket:function(){
    wx.navigateTo({
      url: '../redPacket/redPacket',
    })
  },
  /***
   * 查看金币
   */
  showGoldCoin:function(){
    wx.navigateTo({
      url: '../ticket/ticket',
    })
  }
})