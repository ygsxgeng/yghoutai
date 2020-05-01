import React, { Component } from 'react'
import {Card} from "antd"
export default class index extends Component {
    render() {
        return (
            <div className="site-card-border-less-wrapper">
            <Card title="商品列表" bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        )
    }
}
