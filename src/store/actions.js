const actions = {
  addCart(context,payload){
    
    return new Promise((resolve,reject)=>{
      let oldpayload = context.state.cartList.find(item => item.iid === payload.iid)
      if(oldpayload){
        context.commit('addCounter',oldpayload);
        resolve('当前商品数量+1');
        // oldpayload.count += 1;
      }else{
        context.commit('addToCart',payload);
        resolve('添加新的商品');
        // context.state.cartList.push(payload);
      }
    })
  }
}

export default actions;