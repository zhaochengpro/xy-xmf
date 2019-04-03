// pages/leaveUnused/leaveUnused.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    priceShow: false,
    newPriceShow: false,
    marchantDateShow: false,
    currentDate: new Date().getTime(),
    maxDate: new Date().getTime(),
    marchantDate:'',
    detail:'',
    inputDisable: [false, false, false, false, false],
    unUsedOrder: {},
    imgPaths:[null,null,null,null],
    imgDisabled:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type == 'detailUnused'){
      // console.log(options.json)
      let orderJson = JSON.parse(options.json);
      let imagesPath = this.data.imgPaths;
      imagesPath.splice(0, 1, orderJson.picPath)
      this.setData({
        unUsedOrder: orderJson,
        inputDisable: [true, true, true, true, true],
        imgDisabled:true,
        imgDisabled: true,
        imgPaths: imagesPath
      })
    } else if (options.type == "orderUnsued"){
      let json = JSON.parse(options.order);
      let imagesPath = this.data.imgPaths;
      imagesPath.splice(0,1,json.picPath)
      this.setData({
        detail: json.content,
        inputDisable: [true, true, true, true, true],
        imgDisabled:true,
        unUsedOrder: json,
        imgDisabled: true,
        imgPaths: imagesPath
      })
      console.log(JSON.parse(options.order));
    }
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
  onClose:function(){
    this.setData({
      isShow: true,
      priceShow:false,
      newPriceShow: false,
      marchantDateShow: false
    })
  },
  choosePrice: function(){
    this.setData({
      isShow: false,
      priceShow: true
    })
  },
  chooseNewPrice:function(){
    this.setData({
      isShow: false,
      newPriceShow: true
    })
  },
  chooseDate:function(){
    this.setData({
      isShow: false,
      marchantDateShow: true
    })
  },
  onDateInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },
  onConfirm:function(event){
    let date = new Date(event.detail).toLocaleDateString().split("/");
    date.pop();
    this.setData({
      currentDate: event.detail,
      marchantDateShow: false,
      marchantDate: date.join("-")
    });
  },
  addPic:function(event){
    wx.showLoading({
      title: '加载中....',
    })
    setTimeout(()=>{
      wx.hideLoading();
    },500)
    let paths = this.data.imgPaths;
    let _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0]
        paths.splice(event.currentTarget.id.split("")[1], 1, tempFilePaths);
        // console.log(res);
        _this.setData({
          imgPaths: paths
        })
        console.log(_this.data.imgPaths);
      }
    })
  },
  showPicture:function(event){
    console.log(this.data.imgPaths[0]);
    wx.previewImage({
      current: this.data.imgPaths[event.currentTarget.id], // 当前显示图片的http链接
      urls: [this.data.imgPaths[event.currentTarget.id]] // 需要预览的图片http链接列表
    })
  }
})