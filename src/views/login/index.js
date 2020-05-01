import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {loginUser} from "../../request"
import "./index.less"
export default class index extends Component {
    onFinish=(values)=>{
      
        loginUser(values.username,values.password).then(res=>{
            localStorage.setItem("token",res.token)
            this.props.history.push("/admin/goodslist")
        })
    }
    render() {
        return (
        <div className="yg-login">
            <div className="login">
              
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input  placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                   
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                    </Button>
                </Form.Item>
           
                </Form>
            </div>
            </div>
        )
    }
}
