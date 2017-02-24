Page({
    data: {
        avatar_array: [{
          avatar_path: '../../images/XM.png'
        },
        {
          avatar_path: '../../images/YY.png'
        },
        {
          avatar_path: '../../images/YP.png'
        },
        {
          avatar_path: '../../images/WL.png'
        },
        {
          avatar_path: '../../images/ZY.png'
        },
        {
          avatar_path: '../../images/YF.png'
        },
        {
          avatar_path: '../../images/JH.png'
        }
      ],
        item_array: [{
          image_path: "../../images/teambuilding.png",
          tag: "1form",
          comment: "今天去临潼啦",
          at_number: 4,
          like_number: 2,
          edit_number:5, 
          },
        {
          image_path: "../../images/teambuilding.png",
          tag: "杨帆",
          comment: "玩的真开心",
          at_number: 1,
          like_number: 2,
          edit_number:3 
        },
        {
          image_path: "../../images/teambuilding.png",
          tag: "叔",
          comment: "这个还蛮好玩的",
          at_number: 5,
          like_number: 6,
          edit_number:7 
        },
        {
          image_path: "../../images/teambuilding.png",
          tag: "1form",
          comment: "这个retro有收获！",
          at_number: 3,
          like_number: 6,
          edit_number:3 
        }
      ]
    },
    bindAvatarTap: function() {
        wx.showModal({
            title: '提示',
            content: '跳转到拥有此人tag页面',
            success: function(res) {
                if(res.confirm) {
                    console.log('用户点击确定')
                }
            }
        })
    },
    onShow: function() {
          var allmoments = wx.getStorageSync('mymoment') || []
        
        this.setData({
            allmoments: allmoments            
        })
    }
})