//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    routers: [
      {
        name: '客户录入',
        url: '/pages/khlr/khlr',
        icon: '/images/dsj/icon1.png',
        code: '10'
      },
      {
        name: '所有客户',
        url: '/pages/sykh/sykh',
        icon: '/images/dsj/icon2.png',
        code: '11'
      },
      {
        name: '工长',
        url: '/pages/gz/gz',
        icon: '/images/dsj/icon5.png',
        code: '10'
      },
      {
        name: '考勤',
        url: '',
        icon: '/images/dsj/icon7.png',
        code: '11'
      },
      {
        name: '申请审批',
        url: '',
        icon: '/images/dsj/icon8.png',
        code: '10'
      },
      {
        name: '工作汇报',
        url: '',
        icon: '/images/dsj/icon9.png',
        code: '11'
      },
      {
        name: '量房报价',
        url: '/pages/lfbj/lfbj',
        icon: '/images/dsj/icon10.png',
        code: '10'
      },
      {
        name: '客户跟踪',
        url: '/pages/khgz/khgz',
        icon: '/images/dsj/icon11.png',
        code: '11'
      },
     
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
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
  }
})
