// pages/khlr/khlr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //地区选择器
    regionValue: ["北京市", "北京市", "朝阳区"],  // 默认选中，不填或者空，就默认第一个
    custom: "全部",

    //时间选择器
    // dateValue: "",   // 日期选中时间
    dateStart: "2019-01-01",   // 日期开始时间
    // dateEnd: "2018-12-30",     // 日期结束时间

    // 普通选择器1
    indexyi: 0,  // 默认选中第几行
    objectArrayyi: [    // 对象数组
      { id: 0, name: '--请选择--' },
      { id: 1, name: '现代简约' },
      { id: 2, name: '北欧' },
      { id: 3, name: '简欧' },
      { id: 4, name: '简美' },
      { id: 5, name: '美式' },
      { id: 6, name: '混搭式' },
      { id: 7, name: '田园' },
      { id: 8, name: '地中海' },
      { id: 9, name: '奢现' },
      { id: 10, name: '欧式' },
      { id: 11, name: '新古典' },
      { id: 12, name: '新中式' },
      { id: 13, name: '中式' },
      { id: 14, name: '其它' },
    ],
    // 普通选择器2
    indexer: 0,  // 默认选中第几行
    objectArrayer: [    // 对象数组
      { id: 0, name: '--请选择--' },
      { id: 1, name: '一室一厅' },
      { id: 2, name: '二室一厅' },
      { id: 3, name: '三室两厅' },
      { id: 4, name: '四室两厅' }      
    ],
    // 普通选择器3
    indexsan: 0,  // 默认选中第几行
    objectArraysan: [    // 对象数组
      { id: 0, name: '--请选择--' },
      { id: 1, name: '半包' },
      { id: 2, name: '全包' },
      { id: 3, name: '整装' }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {

  },

  /*地区选择器*/
  regionChange: function (event) {
    let region = event.detail.value;

    console.log(event);
    this.setData({
      regionValue: region
    });
  },

  /*日期选择器*/
  dateChange: function (event) {
    let date = event.detail.value;
    console.log(event);
    this.setData({
      dateValue: date
    });
  },
  bindChangeyi: function (event) {
    this.setData({
      indexyi: event.detail.value
    })
  },
  cancel: function (event) {
    console.log("取消了");
  },

  bindChangeer: function (event) {
    this.setData({
      indexer: event.detail.value
    })
  },
  bindChangesan: function (event) {
    this.setData({
      indexsan: event.detail.value
    })
  },
  zhuijia: function () {
    wx.navigateTo({
      url: '/pages/khzp/khzp',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    });
    
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