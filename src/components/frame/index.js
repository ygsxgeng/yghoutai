import React, { Component } from 'react'
import { Layout, Breadcrumb,Menu, Dropdown,Avatar } from 'antd';
import {adminRoute} from "../../router"
import {withRouter} from "react-router-dom"
import "./index.less"
import { DownOutlined } from '@ant-design/icons';
import Logo from "./logo.png"
const { Header, Content, Footer, Sider } = Layout;
const menu = adminRoute.filter(item=>item.isShow===true)
@withRouter
 class index extends Component {
    handleMenu = ({key})=>{
        this.props.history.push({
            pathname:key
        })
    }
    handleMenuClick = ({key})=>{
        localStorage.removeItem("token")
        this.props.history.push(key)
    }
    menu =()=>{
        return (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key={"/admin/settings"}>           
                    个人中心               
                </Menu.Item>
              
                <Menu.Item key={"/login"}>
                    注销
                </Menu.Item>
                   
                   
            </Menu>
          )
    }
    componentDidMount(){
        console.log("kkkk")
        console.log(localStorage.getItem("token"))
        if(!localStorage.getItem("token")){
            this.props.history.push("/login")
        }
    }
    render() {
        let selectedKeysArr = this.props.location.pathname.split("/")
        selectedKeysArr.length = 3
        return (
            <Layout>
                <Header className="header yg-header" >
                <div className="logo" >
                    <img src={Logo}/>
                </div>
                
                <Dropdown overlay={this.menu()} placement="bottomCenter">
                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                       <Avatar style={{position:"relative",top:-4}}  >U</Avatar>
                       <span>你好！小帅哥</span>
                       <DownOutlined/>
                    </div>
                </Dropdown>
               
              
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>超级管理员</Breadcrumb.Item>
               
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[menu[0].pathname]}
                        selectedKeys={[selectedKeysArr.join("/")]}

                        style={{ height: '100%' }}
                        onClick={this.handleMenu}
                    >
                        
                    {
                        menu.map(item=>{                       
                            return <Menu.Item key={item.pathname}>
                                {item.title}
                            </Menu.Item>
                        })
                    }
                       
                     
                    </Menu>
                    </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>{this.props.children}</Content>
                </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>易果生鲜 ©2020 千峰1914-3组有限公司</Footer>
             </Layout>
        )
    }
}


export default index