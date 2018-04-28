// pages/complaint/complaint.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooses:[{text:'欺诈',hid:true},
             { text: '色情', hid: true },
             { text: '政治谣言', hid: true },
             { text: '诱导分享', hid: true }
    ]
  },
  click:function(e){
    var i=e.target.dataset.num;
    var newchoose = this.data.chooses;
    if (newchoose[i].hid == true){
      newchoose[i].hid = false;
      this.setData({
        chooses: newchoose
      })
    }else{
      newchoose[i].hid = true;
      this.setData({
        chooses: newchoose
      })
    }
    console.log(this.data.chooses);
  },
  report:function(){
    var choose = this.data.chooses;
    var show=true;
    for(var i=0;i<choose.length;i++){
      if (choose[i].hid == true) {
        show = true;
      } else {
        show = false;
        break;
      }
    }
    console.log(show);
      if(show==true){
        wx.showModal({
          title:'提示',
          content: '请选择投诉原因',
          success:function(res){
            if (res.confirm) {
              console.log('用户点击确定')
            } 
          }
        })
      }else{
        wx.showModal({
          title: '投诉提交成功',
          
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              wx.navigateTo({
                url: '../index/index',
              })
            }
          }
          
        });
        
      }
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
  
  }
})