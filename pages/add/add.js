// pages/add/add.js
// 初始化云函数
wx.cloud.init()
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addData:function(event){
    // console.log(event)
    // productsCollection.add({
    //   data:{
    //     title:"product 2",
    //     image:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
    //     tags:["tag1","tag3"],
    //     price:20.12,
    //     color:'blue'
    //   }

    // }).then(res=>{
    //   console.log(res)
    // })

    // 云函数的方法调用addData函数
    wx.cloud.callFunction({
      name:"addData"
    }).then(res=>{
      console.log(res)
    })
  }

})