// pages/addRoder/addRoder.js
const date = new Date();
const year = date.getFullYear();
const months = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const hourArr = ['立即出发'];
// const tommorw = "明天("+date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + 1+")";
/******数字位数 */
function getDub(num){
  if(String(num).length == 1){
    return num+'0';
  }else{
    return num;
  }
}
for (var i = 1; i < (22 - date.getHours())*2; i++) {
  let orderCanTime;
  if(date.getMinutes !== '00'){
    orderCanTime = new Date(year,months,day,hour + 1,0,0);
    hourArr.push(new Date(orderCanTime.getTime() + 1800000 * i).getHours() + ":" + getDub(new Date(orderCanTime.getTime() + 1800000 * i).getMinutes()));
  }else{

  }
  
}

const dateArr = {
  '今天': hourArr
};
//获得明天，后天的日期
date.setDate(date.getDate()+1);
let tomorrow = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
dateArr["明天(" + tomorrow+")"] = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']
date.setDate(date.getDate() + 1);
let afterTomorrow = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
dateArr["后天(" + afterTomorrow+")"] = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']


Page({

  /**
   * 页面的初始数据
   */
  data: {
    priceActiveArr: [false, true, false, false, false, false],
    priceArr: [1, 2, 3, 4, 5, 6],
    price:"",
    reallyPrice:"",
    choosePrice:"",
    totalPrice:"",
    weightActiveArr: [false, true, false, false, false],
    weights: ["轻件", "小件", "中件", "大件", "超大件"],
    chooseWeight:"",
    genderActiveArr: [false, true, false],
    genders: ["男生", "女生", "不限性别"],
    chooseGender: "",
    /******这里是关于一些弹框的数据 */
    whenShow:false,
    weightShow:false,
    genderShow: false,
    deadline: false,
    show: false,
    isShow: true,
    priceShow: false,
    /********↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */
    textPlaceHoder:"",
    numPage:"",
    orderJson:{},
    currentValue: 50,
    displayValue:12,
    inputDisabledArr: [true, true, true, true, true, true, true, true, true,true],
    columns: [
      {
        values: Object.keys(dateArr),
        className: 'column1'
      },
      {
        values: dateArr['今天'],
        className: 'column2',
        defaultIndex: 2
      }
    ],
    startDate:"",/***行动时间 */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.order){
      let json = JSON.parse(options.order);
      this.setData({
        orderJson: json,
        isShow:true
      })
    }else{
      switch (options.id) {
        case 'delivery': {
          this.setData({
            textPlaceHoder: "可将取件码和收货人姓名填写在此处。示例: “取件码: 3-3-2000，姓名：陈某”。",
            numPage: options.id
          })
        } break;
        case 'fetch': {
          this.setData({
            textPlaceHoder: "示例：帮忙取xxx。",
            numPage: options.id
          })
        } break;
        case 'food': {
          this.setData({
            textPlaceHoder: "示例：鱼香肉丝炒饭一份。",
            numPage: options.id
          })
        } break;
        case 'market': {
          this.setData({
            textPlaceHoder: "示例：一个面包、一包成都香烟、一瓶可口可乐等。",
            numPage: options.id
          })
        } break;
        case 'leaveUnused': {
          this.setData({
            textPlaceHoder: "示例：卖二手xxx手机，9成新，无暗病，可正常使用。",
            numPage: options.id
          })
        } break;
        case 'drink': {
          this.setData({
            textPlaceHoder: "示例：一杯蜂蜜柚子茶。",
            numPage: options.id
          })
        } break;
        case 'server': {
          let arr = this.data.inputDisabledArr;
          arr.splice(0, 1, false);
          arr.splice(1, 1, false);
          arr.splice(2, 1, false);
          arr.splice(7, 1, false);
          this.setData({
            textPlaceHoder: "示例：求做一份ppt、window系统重装。",
            numPage: options.id,
            inputDisabledArr: arr
          })
        } break;
        case 'other': {
          this.setData({
            textPlaceHoder: "勤劳的小蜜们还能为你做点什么.....",
            numPage: options.id
          })
        } break;
      }
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
  onClickReallyPrice: function(){
    this.setData({
      show:true,
      isShow: false,
    })
  },
  onClose: function(){
    this.setData({
      show: false,
      isShow: true,
      priceShow: false,
      whenShow: false,
      weightShow: false,
      genderShow: false,
      deadline: false
    })
  },
  choosePrice: function(){
    this.setData({
      isShow: false,
      priceShow: true
    })
  },
  onChoosePrice:function(event){
    let oldPriceActiveArr = this.data.priceActiveArr;
    oldPriceActiveArr.forEach((val, index) => {
      oldPriceActiveArr.splice(index, 1, "false");
    })
    let newPriceActiveArr = oldPriceActiveArr.splice(event.currentTarget.id, 1, "true");
    if(event.currentTarget.id !== "6"){
      this.setData({
        priceActiveArr: oldPriceActiveArr,
        choosePrice: "￥" + this.data.priceArr[event.currentTarget.id] + "元",
        show: false,
        isShow: true,
        priceShow: false,
        whenShow: false,
        weightShow: false,
        genderShow: false,
        deadline: false,
        totalPrice:this.data.priceArr[event.currentTarget.id] * 100
      })
    }else{
      this.setData({
        priceActiveArr: oldPriceActiveArr,
        choosePrice:"",
      })
    }
  },
  onInput: function(event){
    let value = event.detail.value.split("￥").pop()
    this.setData({ 
      price: "￥" + value+'元',
      totalPrice:value*100
    });
  },
  onClickPriceConfirm:function(){
    this.setData({ 
      price:  this.data.price,
      show: false,
      isShow: true,
      priceShow: false,
      whenShow: false,
      weightShow: false,
      genderShow: false,
      deadline: false
    });
  },
  onInputReallyPrice:function(event){
    this.setData({
      reallyPrice: "￥"+ event.detail + "元"
    })
  },
  onClickReallyPriceConfirm:function(){
    this.setData({
      reallyPrice: this.data.reallyPrice,
      show: false,
      isShow: true,
      priceShow: false,
      whenShow: false,
      weightShow: false,
      genderShow: false,
      deadline: false
    })
  },
  onClickWhen: function(){
    this.setData({
      whenShow: true,
      isShow: false
    })
  },
  onTimeChange: function(event){
    const { picker, value, index } = event.detail;
    picker.setColumnValues(1, dateArr[value[0]]);
    if(index == 0){
      picker.setColumnValues(1, dateArr[value[0]]);
      value[1] = dateArr[value[0]][0]
    }else{
      picker.setColumnValues(1, dateArr[value[0]]);
    }
    
    let date = value[0] + "-" + value[1];
    this.setData({
      startDate: date
    });
  },
  showWeight:function(){
    this.setData({
      weightShow: true,
      isShow: false
    })
  },
  onChooseWeight:function(event){
    let oldWeightActiveArr = this.data.weightActiveArr;
    oldWeightActiveArr.forEach((val, index) => {
      oldWeightActiveArr.splice(index, 1, "false");
    })
    let newWeightActiveArr = oldWeightActiveArr.splice(event.currentTarget.id, 1, "true");
    this.setData({
      weightActiveArr: oldWeightActiveArr,
      chooseWeight: this.data.weights[event.currentTarget.id],
      show: false,
      isShow: true,
      priceShow: false,
      whenShow: false,
      weightShow: false,
      genderShow: false,
      deadline: false
    })
  },
  onChooseGender:function(event){
    let oldgenderActiveArr = this.data.genderActiveArr;
    oldgenderActiveArr.forEach((val, index) => {
      oldgenderActiveArr.splice(index, 1, "false");
    })
    let newGenderActiveArr = oldgenderActiveArr.splice(event.currentTarget.id, 1, "true");
    this.setData({
      genderActiveArr: oldgenderActiveArr,
      chooseGender: this.data.genders[event.currentTarget.id],
      show: false,
      isShow: true,
      priceShow: false,
      whenShow: false,
      weightShow: false,
      genderShow: false,
      deadline: false
    })
  },
  chooseGender: function(){
    this.setData({
      genderShow: true,
      isShow: false
    })
  },
  showDeadLine: function(){
    this.setData({
      deadline: true,
      isShow: false
    })
  },
  onDrag(event) {
    let value = this.data.currentValue / 100 * 24;
    if(value < 1){
      value = 1;
    }else{
      value = Math.floor(value);
    }
    this.setData({
      currentValue: event.detail.value,
      displayValue: value
    });
  },
  onClickDeallineConfirm:function(){
    this.setData({
      show: false,
      isShow: true,
      priceShow: false,
      whenShow: false,
      weightShow: false,
      genderShow: false,
      deadline: false
    })
  },
  onClickConfirm:function(event){
    // console.log(event);
    this.setData({
      show: false,
      isShow: true,
      priceShow: false,
      whenShow: false,
      weightShow: false,
      genderShow: false,
      deadline: false
    })
  },
  onSubmit:function(){
    wx.showLoading({
      title: '发布中....',
    })
  }
})