//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   curNav: 1,
   "bnrUrl": [{
     "url":"../../images/theone.png"
   },{
       "url": "../../images/thetwo.png"
   },{
       "url":"../../images/thethree.png"
   }],
    hot: [
      {
        text: "阿里新研发某某智能洗衣机"
      }, {
        text: "阿里新研发某某智能洗衣机"
      }, {
        text: "阿里新研发某某智能洗衣机"
      }, {
        text: "阿里新研发某某智能洗衣机"
      }
    ],
    image: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  },
  //事件处理函数
  switchRightTab: function(e){
    let id = e.target.dataset.id;
    console.log(id);
    this.setData({
      curNav:id
    })
  }
})
