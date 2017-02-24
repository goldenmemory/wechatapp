var date_util = require('../../utils/util.js');

Page({
  data: {    
    cameraSrc: "../../images/camera@3x.png"
       
  },
  chooseImage: function() {
      var that = this;
      console.log("chooseImage");
      wx.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {        
            var tempFilePaths = res.tempFilePaths;
            console.log(tempFilePaths[0]);
            that.setData({
                previewImageSrcs: tempFilePaths
                })
        }
      })
  },
  bindDescriptionChange: function (e) {
    console.log(e);
        this.setData({
            description: e.detail.value
        })
    },  
  uploadMessage: function() {
      var that = this;
      var myevents = wx.getStorageSync('myimages') || [];
      console.log(that.data);
      var newevent = {
            key: "event" + date_util.getMilliSeconds(),
            date: that.data.description,            
            imageSrcs: that.data.previewImageSrcs,          
        };
        myevents.unshift(newevent);
        wx.setStorageSync('myevents', myevents);
        console.log('asdf');
        wx.switchTab({
          url: '/pages/show/show'
        })
    
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})