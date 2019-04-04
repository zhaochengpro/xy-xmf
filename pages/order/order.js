// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive:[true,false],
    orders:[
      {'index':0, 'type': '美食', 'status': '待接单', 'content':'肖姐木桶饭 米饭x1、鸡翅x1、土豆x1、白菜x1','price':'5.00','place':'11栋316','endTime':'2019-04-02 16:30','startTime':'今天 15:00',weight:'大件',gender:"男"},
      { 'index': 1, 'type': '饮品', 'status': '待接单', 'content': '肖姐木桶饭 米饭x1、鸡翅x1、土豆x1、白菜x1', 'price': '5.00', 'place': '11栋316', 'endTime': '2019-04-02 16:30', 'startTime': '今天 15:00', weight: '大件', gender: "男"}
    ],
    unUsedOrders:[
      { 'index': 2, 'type': '闲置', 'status': '未售出', 'content': '出售一部二手的小米手机，一切正常，无暗病。', 'price': '400.00', 'place': '11栋316', 'endTime': '2019-04-02 16:30', 'startTime': '今天 15:00', picPath: 'http://tmp/wx5314097ee030810d.o6zAJs7Y6IPPMRt4deyrmbBXRgGU.RuOQPW94l9zH23d20234db7fc0f52bfc395553625771.JPG', oldPrice: '100', oldDate: "2017-03" },
      { 'index': 2, 'type': '闲置', 'status': '已售出', 'content': '出售一支未使用的口红，色号为玫瑰红', 'price': '100.00', 'place': '11栋316', 'endTime': '2019-04-02 16:30', 'startTime': '今天 15:00', picPath: 'http://tmp/wx5314097ee030810d.o6zAJs7Y6IPPMRt4deyrmbBXRgGU.RuOQPW94l9zH23d20234db7fc0f52bfc395553625771.JPG', oldPrice: '100', oldDate: "2017-03" },
      { 'index': 2, 'type': '闲置', 'status': '未售出', 'content': '出售一部二手的小米手机，一切正常，无暗病。', 'price': '1200.00', 'place': '11栋316', 'endTime': '2019-04-02 16:30', 'startTime': '今天 15:00', picPath: 'http://tmp/wx5314097ee030810d.o6zAJs7Y6IPPMRt4deyrmbBXRgGU.RuOQPW94l9zH23d20234db7fc0f52bfc395553625771.JPG', oldPrice: '100', oldDate: "2017-03" }
    ]
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
  },
  onClickDetele:function(){
    wx.showModal({
      title: '确认删除订单',
      content: '是否确认删除该订单，删除后将不会被小蜜接单',
      success:function(){

      }
    })
  },
  onClickEdit:function(event){
    let currentOrder = JSON.stringify(this.data.orders[event.currentTarget.id.split('?')[1].split('=')[1]]);
    // console.log(type);
    wx.navigateTo({
      url: '../addRoder/addRoder?order=' + currentOrder,
    })
  },
  onClickEditUnused:function(event){
    let currentOrder = JSON.stringify(this.data.unUsedOrders[event.currentTarget.id.split('?')[1].split('=')[1]]);
    console.log(currentOrder);
    wx.navigateTo({
      url: '../leaveUnused/leaveUnused?type=orderUnsued&order=' + currentOrder,
    })
  }
})