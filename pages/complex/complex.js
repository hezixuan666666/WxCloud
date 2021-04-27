// pages/complex/complex.js
const db=wx.cloud.database()
const productsCollection=db.collection('products')
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  simple:function(event){
    productsCollection.get().then(res=>{
      this.setData({
        products:res.data
      })
    }
    )
  },
  red:function(event){
    productsCollection.where({
      color:"red"
    }).get().then(res=>{
      this.setData({
        products:res.data
      })
    })
  },
// 查询价格小于50
  lt:function(event){
    productsCollection.where({
      price:_.lt(50)
    }).get().then(res=>{
      this.setData({
        products:res.data
      })
    })
  },
  // 查询view为3,4,5
  in:function(event){
    productsCollection.where({
      view:_.in([3,4,5])
    }).get().then(res=>{
      this.setData({
        products:res.data
      })
    })
  },
  // 查询price在20到50
  and:function(event){
    productsCollection.where({
      price:_.gt(20).and(_.lt(50))
    }).get().then(res=>{
      this.setData({
        products:res.data
      })
    })
  },
  // 限制查询10条数据
  limit:function(event){
    productsCollection.limit(10).get().then(res=>{
      this.setData({
        products:res.data
      })
    }
    )
  },
  // 按照访问量降序，价格升序排序
  orderby:function(event){
    productsCollection.orderBy('view','desc').orderBy('price','asc').get().then(res=>{
      this.setData({
        products:res.data
      })
    })
  }

})