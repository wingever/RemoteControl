// pages/public/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //tab框
    selected: 0,
    state:"使用中",
    list: ['收藏', '搜索'],
    laundry:[
      {
        image:"/images/public/address.png",
        address:"重庆邮电大学10栋"
      },{
        image:"/images/public/address.png",
        address: "重庆邮电大学20栋"
      }
    ],
    machine: [
      {
        image:"/images/public/machine.png",
        name:"10栋一楼4号机"
      },
      {
        image: "/images/public/machine.png",
        name: "10栋四楼2号机"
      },
      {
        image: "/images/public/machine.png",
        name: "10栋四楼1号机"
      },{
        image: "/images/public/machine.png",
        name: "10栋四楼3号机"
      }
    ]
  },

  selected: function (e) {
    console.log(e)
    let that = this
    let index = e.currentTarget.dataset.index
    console.log(index)
    if (index == 0) {
      that.setData({
        selected: 0
      })
    }else {
      that.setData({
        selected: 1
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})