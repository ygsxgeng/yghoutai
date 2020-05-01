import { 
    Goodslist,
    Login,
    Notfound,
    Settings,
    Signup,
    Goodslistedit
} from "../views"

export const mainRoute =[
    {
        pathname:"/login",
        component:Login
    },
    {
        pathname:"/signup",
        component:Signup
    },
    {
        pathname:'/404',
        component:Notfound
    }
]

export const adminRoute=[
    {
        pathname:"/admin/goodslist",
        component:Goodslist,
        title:"商品列表",
        exact:true,
        isShow:true,
    },
    {
        pathname:'/admin/goodslist/edit/:id',
        component:Goodslistedit,
    },
    {
        pathname:"/admin/settings",
        component:Settings,
        title:'个人中心',
        isShow:true,
    }
]