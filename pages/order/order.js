// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive:[true,false] 
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
  onClickSendOrder:function(){
    let arr = this.data.isActive;
    arr.forEach((val, index) => {
      arr.splice(index, 1, false);
    })
    arr.splice(0,1,true);
    this.setData({
      isActive: arr
    })
  },
  onClickGetOrder:function(){
    let arr = this.data.isActive;
    arr.forEach((val,index)=>{
      arr.splice(index,1,false);
    })
    arr.splice(1, 1, true);
    this.setData({
      isActive: arr
    })
  }
})