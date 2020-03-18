const mutations ={
    //全局购物车添加
    // addCart(state,payload){
    //   let oldpayload = state.cartList.find(item => item.iid === payload.iid)
    //   if(oldpayload){
    //     oldpayload.count += 1;
    //   }else{
    //     state.cartList.push(payload);
    //   }
    // },
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      state.cartList.push(payload);
    }
}
export default mutations ;