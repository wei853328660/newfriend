//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    helpt:true,
    userInfo: {},
    
    screenheight:''
  },
  help:function(){
     this.setData({
       helpt:false
     })
  }, 
  know:function(){
    this.setData({
      helpt: true
    })
  },
  jump_complaint:function(){
     wx.navigateTo({
       url: '../complaint/complaint',
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  login:function(e){
    console.log(e);
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {
      //更新数据  
      that.setData({
        userInfo: userInfo
      })
      console.log(that.data.userInfo)
    });
    wx.getSystemInfo({
      success: (res)=> {
        console.log(res.windowHeight);
        that.setData({
          screenheight: res.windowHeight
        }) 
      }
    })
     
   
    
  },
  
})
