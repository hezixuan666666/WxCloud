// pages/index/index.js

// 获取数据库实例
const db = wx.cloud.database()
const productsCollection = db.collection('products')
const _= db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    productsCollection.get().then(res=>{
      this.setData({
        products:res.data
      })
      // console.log(res)
    })

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

// update data
  productsCollection.get().then(res=>{
    this.setData({
      products:res.data
    },res=>{
      console.log("数据更新完成")
      // 数据刷新完成之后自动停止下拉刷新
      wx.stopPullDownRefresh({
        success: (res) => {},
      })
    })
    // console.log(res)
  })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
// update data
    console.log("触底啦~")

    let page = this.data.page+20;
    
    productsCollection.skip(page).get().then(res=>{
      let new_data=res.data
      let old_data = this.data.products

      this.setData({
        products:old_data.concat(new_data),
        page:page
      },res=>{
        console.log(res);

      })
      // console.log(res)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  click:function(event){

    productsCollection.doc(event.currentTarget.dataset.id).update({
     data:{
      view:_.inc(1)
      }
    })
  }

})