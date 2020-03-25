import {request} from '@/network/request'

export  function getCatefory(){
  return request({
    url:"/category"
  })
}
export function getCateforyData(maitKey){
  return request({
    url:"/subcategory",
    params:{
      maitKey
    }
  })
}