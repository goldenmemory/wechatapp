var date_util = require('../../utils/util.js');

Page({
    data: {
        cameraSrc: "../../images/icon/camera.png",
        // showPreviewImage: false

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
                    previewImageSrcs: tempFilePaths,
                    showPreviewImage: true
                })
            }
        })
    },
    bindDescriptionChange: function (e) {
        this.setData({
            description: e.detail.value
        })
    },
    uploadMessage: function() {
        var that = this;
        var mymoments = wx.getStorageSync('mymoments') || [];
        var newevent = {
            key: "event" + date_util.getMilliSeconds(),
            description: that.data.description,
            imageSrcs: that.data.previewImageSrcs,
        };
        mymoments.unshift(newevent);
        wx.setStorageSync('mymoments', mymoments);
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
        this.setData({showPreviewImage: false});
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