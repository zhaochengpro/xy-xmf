// pages/withDraw/withDraw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    balance:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({balance:options.myBalance});
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
  onClickIcon:function(){
    wx.showModal({
      title: '提现说明',
      content: '1.单次提现必须大于0元;\n\n2.已评论订单，金额在评价次日23:59:59后才计入可提现金额；\n\n3.未评价已完成订单，金额须在完成起第七日23:59:59后才计入可提现金额。',
      showCancel: false,
      confirmText: "我明白了"
    })
  }
})