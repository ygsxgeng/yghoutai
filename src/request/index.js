import axios from "axios"
import { message } from 'antd';
message.config({
    top:350,
  
  });

const app  = axios.create({
    baseURL:"http://localhost:3009"
})

app.interceptors.request.use(config=>{
    if(localStorage.getItem("token")){
        config.headers.token="Bearer"+ localStorage.getItem("token")
    }
    return config
})

app.interceptors.response.use(res=>{
    if(res.status === 200){
        message.success("登录成功")
        return res.data
    }else{
        message.error("登录失败")
    }
})


//登录 
export const loginUser = (userName,password)=>{
    return app.post("/api/v1/auth/manager_login",{userName,password})
}