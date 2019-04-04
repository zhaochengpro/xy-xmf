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
    prevDisplay: false,
    imgPaths:["",""],
    stuAllInfo:{
      name:"",
      gender:"男",
      idcard:"",
      idCardPic:'',
      stuCardPic:"",
      stuNumber:"",
      school:"成都航空职业技术学院",
      department:"",
      major:"",
      enrollmentTime:"",
      phoneNumber:""
    },
    btnActive:false
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
    // console.log('xxx')
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
  next:function(){
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 300)
    let oldActive = this.data.active;
    let active = this.data.active == 3 ? 3 : oldActive + 1;
    let oldRotutePage = this.data.rotutePage;
    oldRotutePage.forEach(function (val, index) {
      oldRotutePage.splice(index, 1, 'none');
    })
    let rotutePage = oldRotutePage.splice(active, 1, 'block')
    this.setData({
      active: active,
      rotutePage: oldRotutePage
    })
    // console.log(this.data.active);
    this.showSteps();
  },
  setStuInfo:function(event,entry){
    let stuInfo = this.data.stuAllInfo;
    stuInfo[entry] = event.detail;
    this.setData({
      stuAllInfo: stuInfo
    })
  },
  radiochange:function(event){
    let stuInfo = this.data.stuAllInfo;
    stuInfo["gender"] = event.detail.value;
    this.setData({
      stuAllInfo: stuInfo
    });
  },
  onChange:function(event){
    switch(event.target.id){
      case "name":{
        this.setStuInfo(event,'name');
      }break;
      case "idcard": {
        this.setStuInfo(event,'idcard');
      } break;
      case "stuNumber": {
        this.setStuInfo(event,'stuNumber');
      } break;
      case "school": {
        this.setStuInfo(event,'school');
      } break;
      case "department": {
        this.setStuInfo(event,'department');
      } break;
      case "major": {
        this.setStuInfo(event,'major');
      } break;
    }

  },
  /*****点击下一步时验证 */
  onClickNext: function(event){
    let index = event.target.id;
    switch(index){
      case '0':{
        let stuAllInfo = this.data.stuAllInfo;
        if (stuAllInfo.name && stuAllInfo.gender && stuAllInfo.idcard && stuAllInfo.idCardPic){
          this.setData({
            btnActive:true
          })
          this.next();
        }else{
          wx.showModal({
            title: '提示',
            content: '请将必填信息填写完整',
          })
          this.setData({
            btnActive: false
          })
        }
      }break;
      case '1': {
        let stuAllInfo = this.data.stuAllInfo;
        if (stuAllInfo.stuNumber && stuAllInfo.school && stuAllInfo.department && stuAllInfo.major && stuAllInfo.enrollmentTime && stuAllInfo.stuCardPic) {
          this.next();
        } else {
          wx.showModal({
            title: '提示',
            content: '请将必填信息填写完整',
          })
        }
      } break;
      case '2': {
        let stuAllInfo = this.data.stuAllInfo;
        if (stuAllInfo.phoneNumber) {
          this.next();
        } else {
          wx.showModal({
            title: '提示',
            content: '请将必填信息填写完整',
          })
        }
      } break;
    }
    // this.next();
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
    let stuInfo = this.data.stuAllInfo;
   
    if (new Date(event.detail.value) > new Date(this.data.maxDate)){
      stuInfo["enrollmentTime"] = nowDate;
      this.setData({ nowDate: nowDate, intendTime: nowDate, stuAllInfo:stuInfo })
    }else{
      stuInfo["enrollmentTime"] = this.data.intendTime;
      this.setData({ nowDate: event.detail.value, intendTime: event.detail.value,stuAllInfo:stuInfo })
    }
  },
  onClickAddPic:function(event){
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 300)
    let paths = this.data.imgPaths;
    let _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0]
        paths.splice(event.currentTarget.id, 1, tempFilePaths);
        console.log(paths);
        let stuInfo = _this.data.stuAllInfo;
        if(event.target.id == 0){
          stuInfo["idCardPic"] = paths[0];
        } else if (event.target.id == 1){
          // console.log("xxx")
          stuInfo["stuCardPic"] = paths[1];
        }
        _this.setData({
          imgPaths: paths,
          stuAllInfo: stuInfo
        })
        // console.log(_this.data.stuAllInfo);
      }
    })
  },
  showImage:function(event){
    wx.previewImage({
      current: this.data.imgPaths[event.currentTarget.id], // 当前显示图片的http链接
      urls: [this.data.imgPaths[event.currentTarget.id]] // 需要预览的图片http链接列表
    })
  }
})