import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/api/h8',
        // baseURL:'http://152.136.185.210:8000/api/h3',
        // baseURL:'http://106.54.54.237:8000/api/h3',
        timeout:5000
    })
    //请求拦截
    instance.interceptors.request.use(config =>{
        //这里拦截成功的
        // console.log(config);
        return config;  
    },err =>{
        //失败
        console.log(err);
    })
    // 响应拦截
    instance.interceptors.response.use(config =>{
        // console.log(config);
        return config
    },err=>{
        console.log(err);
    })

    return instance(config);
}



export function huiben(config){
    const instance = axios.create({
        baseURL:'http://huiben.littlebobby.com.cn/',
       
        timeout:5000
    })
    //请求拦截
    instance.interceptors.request.use(config =>{
        //这里拦截成功的
        // console.log(config);
        return config;  
    },err =>{
        //失败
        console.log(err);
    })

    // 响应拦截
    instance.interceptors.response.use(config =>{
        //响应
        return config
    },err=>{
        console.log(err);
    })

    return instance(config);
}