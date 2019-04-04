//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabActive:[true,false],
    orders:[
      { index: 0,title:'【肖姐木桶饭】 米饭x1、鸡翅x1、土豆x1、白菜x1',price:'2',name:'外卖小蜜',date:'今天18:07',weight:'大件',startDate:'2019-03-04',endDate:'2019-05-04',place:'11栋317，即刻出发',orderStatus:'抢单',gender:"female",reallyPrice:"30"},
      { index: 1, title: '【肖姐木桶饭】 米饭x1、鸡翅x1、土豆x1、白菜x1', price: '2', name: '外卖小蜜', date: '今天18:07', weight: '大件', startDate: '2019-03-04', endDate: '2019-05-04', place: '11栋317，即刻出发', orderStatus: '抢单', gender: "female", reallyPrice: "30"},
      { index: 2, title: '【肖姐木桶饭】 米饭x1、鸡翅x1、土豆x1、白菜x1', price: '2', name: '外卖小蜜', date: '今天18:07', weight: '大件', startDate: '2019-03-04', endDate: '2019-05-04', place: '11栋317，即刻出发', orderStatus: '抢单', gender: "male", reallyPrice: "30" },
      { index: 3, title: '【肖姐木桶饭】 米饭x1、鸡翅x1、土豆x1、白菜x1', price: '2', name: '外卖小蜜', date: '今天18:07', weight: '大件', startDate: '2019-03-04', endDate: '2019-05-04', place: '11栋317，即刻出发', orderStatus: '抢单', gender: "male", reallyPrice: "30" },
      { index: 4, title: '【肖姐木桶饭】 米饭x1、鸡翅x1、土豆x1、白菜x1', price: '2', name: '外卖小蜜', date: '今天18:07', weight: '大件', startDate: '2019-03-04', endDate: '2019-05-04', place: '11栋317，即刻出发', orderStatus: '抢单', gender: "female", reallyPrice: "30" }
    ],
    unusedOrders:[
      { index: 0, title: '【闲置】 出售小米手机一部，能正常使用，无暗病', price: '30', oldPrice: '100', name: '闲置', date: '今天18:07', orderStatus: '未售', gender: "unused", oldDate: "2017-3", picPath: 'http://tmp/wx5314097ee030810d.o6zAJs7Y6IPPMRt4deyrmbBXRgGU.RuOQPW94l9zH23d20234db7fc0f52bfc395553625771.JPG' },
      { index: 1, title: '【闲置】 出售小米手机一部，能正常使用，无暗病', price: '2', oldPrice: '100', name: '闲置', date: '今天18:07', orderStatus: '未售', gender: "unused", oldDate: "2017-3", picPath: 'http://tmp/wx5314097ee030810d.o6zAJs7Y6IPPMRt4deyrmbBXRgGU.RuOQPW94l9zH23d20234db7fc0f52bfc395553625771.JPG'},
      { index: 2, title: '【闲置】 出售小米手机一部，能正常使用，无暗病', price: '2', oldPrice: '100', name: '闲置', date: '今天18:07', orderStatus: '未售', gender: "unused", oldDate: "2017-3", picPath: 'http://tmp/wx5314097ee030810d.o6zAJs7Y6IPPMRt4deyrmbBXRgGU.RuOQPW94l9zH23d20234db7fc0f52bfc395553625771.JPG' },
      { index: 3, title: '【闲置】 出售小米手机一部，能正常使用，无暗病', price: '2', oldPrice: '100', name: '闲置', date: '今天18:07', orderStatus: '未售', gender: "unused", oldDate: "2017-3", picPath: 'http://tmp/wx5314097ee030810d.o6zAJs7Y6IPPMRt4deyrmbBXRgGU.RuOQPW94l9zH23d20234db7fc0f52bfc395553625771.JPG' },
      { index: 4, title: '【闲置】 出售小米手机一部，能正常使用，无暗病', price: '2', oldPrice: '100', name: '闲置', date: '今天18:07', orderStatus: '未售', gender: "unused", oldDate: "2017-3", picPath: 'http://tmp/wx5314097ee030810d.o6zAJs7Y6IPPMRt4deyrmbBXRgGU.RuOQPW94l9zH23d20234db7fc0f52bfc395553625771.JPG' }
    ]
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
  
  onClickRobTicket:function(){
    wx.navigateTo({
      url: '../detailOrder/detailOrder',
    })
  },
  onClickUnusedItem:function(event){
    let orderJson = JSON.stringify(this.data.unusedOrders[event.currentTarget.id]);
    wx.navigateTo({
      url: '../leaveUnused/leaveUnused?type=detailUnused&json=' + orderJson,
    })
  },
  onClickMenu: function(event){
    wx.navigateTo({
      url: '../addRoder/addRoder?id=' + event.currentTarget.id,
    });
  },
  onClickLeaveUnused: function(){
    wx.navigateTo({
      url: '../leaveUnused/leaveUnused',
    })
  },
  onClickOrder:function(){
    let arr = this.data.tabActive;
    arr.forEach((val, index) => {
      arr.splice(index, 1, false);
    })
    arr.splice(0, 1, true);
    this.setData({
      tabActive: arr
    })
  },
  onClickUnusedOrder:function(){
    let arr = this.data.tabActive;
    arr.forEach((val, index) => {
      arr.splice(index, 1, false);
    })
    arr.splice(1, 1, true);
    this.setData({
      tabActive: arr
    })
  }
})
