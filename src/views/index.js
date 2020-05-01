import Loadable from "react-loadable"
import Loading from "../components/loading"

const Goodslist = Loadable({
    loader:()=>import("./goodslist"),
    loading:Loading
})
const Goodslistedit= Loadable({
    loader:()=>import("./goodslist/edit"),
    loading:Loading
})

const Login= Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const Notfound = Loadable({
    loader:()=>import("./notfound"),
    loading:Loading
})
const Settings = Loadable({
    loader:()=>import("./settings"),
    loading:Loading
})
const Signup = Loadable({
    loader:()=>import("./signup"),
    loading:Loading
})

export {
    Goodslist,
    Login,
    Notfound,
    Settings,
    Signup,
    Goodslistedit
}