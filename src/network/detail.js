import {request} from './request'

export function getGoodsDetail(iid){
  return request({
    url:'/detail?iid='+iid
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

//创建一个商品的类
//商品信息
export class Goods {
  constructor(itemInfo, columns, services) {  //constructor 为构造器
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
//商家信息

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
//尺码等等信息

export class GoodsParam{
  constructor(info,rule){
    this.image = info.images ? info.images[0] : '';
    this.infos =info.set;
    this.sizes = rule.tables;
  }
}