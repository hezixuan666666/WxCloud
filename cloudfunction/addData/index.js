// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 主代码
const db = cloud.database()
const productsCollection = db.collection('products')
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
// 一般是调用web的API收到用户输入的数据，这里学习仅添加固定的数据
  return await productsCollection.add(
    {
      data:{
          title:"product 3",
          image:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
          tags:["tag4","tag3"],
          price:50.12,
          color:'yellow'
      }
    }
  )
}