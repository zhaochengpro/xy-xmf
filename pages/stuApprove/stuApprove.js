// pages/stuApprove/stuApprove.js
Page({
  data: {
    steps: [
      {
        text: '实名认证'
      },
      {
        text: '学生认证'
      },
      {
        text: '绑定手机'
      },
      {
        text: '完成'
      }
    ],
    nowDate: new Date().toLocaleDateString().split("/").join("-"),
    minDate: new Date(2002, 9, 1).getTime(),
    maxDate: new Date().toLocaleDateString().split("/").join("-"),
    active:0,
    intendTime:'请选择',
    rotutePage: ["block", "none", "none", "none"],
    prevDisplay: false
  },
  onClose() {
    this.setData({ showDatePicker: false });
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
  onClickPrev:function(event){
    let oldActive = this.data.active;
    let active = this.data.active == 0 ? 0 : oldActive - 1;
    let oldRotutePage = this.data.rotutePage;
    oldRotutePage.forEach(function (val, index) {
      oldRotutePage.splice(index, 1, 'none');
    })
    let rotutePage = oldRotutePage.splice(active, 1, 'block')
    this.setData({
      active: active,
      rotutePage: oldRotutePage
    })
    this.showSteps();
  },
  showSteps:function(){
    if(this.data.active == 0){
      this.setData({ prevDisplay: false});
    } else{
      this.setData({ prevDisplay: true });
    }
  },
  onClickNext: function(event){
    let oldActive = this.data.active;
    let active = this.data.active == 3 ? 3 : oldActive + 1;
    let oldRotutePage = this.data.rotutePage;
    oldRotutePage.forEach(function(val,index){
      oldRotutePage.splice(index,1,'none');
    })
    let rotutePage = oldRotutePage.splice(active,1,'block')
    this.setData({
      active: active,
      rotutePage: oldRotutePage
    })
    console.log(this.data.active);
    this.showSteps();
  },
  numberFormat:function(num){
    if(String(num).length < 2){
      return "0"+num;
    }else{
      return num;
    }
  },
  /***时间选择器时间选择*****/
  bindDateChange: function(event){
    let nowDate = new Date().getFullYear() + "-" + this.numberFormat((new Date().getMonth() + 1)) + "-" + new Date().getDate();
    if (new Date(event.detail.value) > new Date(this.data.maxDate)){
      this.setData({ nowDate: nowDate, intendTime: nowDate })
    }else{
      this.setData({ nowDate: event.detail.value, intendTime: event.detail.value })
    }
    
  }
})