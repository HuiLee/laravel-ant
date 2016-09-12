/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

// Vue.component('example', require('./components/ohmygod.vue'));
//
// const app = new Vue({
//   el  : 'body'
// });
import React from 'react';
import ReactDOM from 'react-dom';
import {Menu, Breadcrumb, Icon, Table} from 'antd';
import Layout from './components/layout.jsx';

const columns = [{
  title    : '姓名',
  dataIndex: 'name',
  key      : 'name',
  render   : (text) => <a href="#">{text}</a>,
}, {
  title    : '年龄',
  dataIndex: 'age',
  key      : 'age',
}, {
  title    : '住址',
  dataIndex: 'address',
  key      : 'address',
}, {
  title : '操作',
  key   : 'operation',
  render: (text, record) => (
    <span>
      <a href="#">操作一{record.name}</a>
      <span className="ant-divider"/>
      <a href="#">操作二</a>
      <span className="ant-divider"/>
      <a href="#" className="ant-dropdown-link">
        更多 <Icon type="down"/>
      </a>
    </span>
  ),
}];

const data = [{
  key    : '1',
  name   : '胡彦斌',
  age    : 32,
  address: '西湖区湖底公园1号',
}, {
  key    : '2',
  name   : '胡彦祖',
  age    : 42,
  address: '西湖区湖底公园1号',
}, {
  key    : '3',
  name   : '李大嘴',
  age    : 32,
  address: '西湖区湖底公园1号',
}];


const AsideCollapse = React.createClass({
  getInitialState() {
    return {
      collapse: true,
    };
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  render() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo">
            {collapse ? '淘' : '淘宝网'}
          </div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']} onClick={(item,key,keyPath)=>{
            console.log(keyPath);
          }}>
            <Menu.Item key="user">
              <Icon type="user"/><span className="nav-text">用户管理</span>
            </Menu.Item>
            <Menu.Item key="laptop">
              <Icon type="laptop"/><span className="nav-text">门店管理</span>
            </Menu.Item>
            <Menu.Item key="notification">
              <Icon type="notification"/><span className="nav-text">订单管理</span>
            </Menu.Item>
            <Menu.Item key="folder">
              <Icon type="pie-chart"/><span className="nav-text">评论管理</span>
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="setting"/><span className="nav-text">系统设置</span>
            </Menu.Item>
          </Menu>
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right"/> : <Icon type="left"/>}
          </div>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header"></div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>用户列表</Breadcrumb.Item>
              <Breadcrumb.Item>用户管理</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div>
                <Table columns={columns} dataSource={data}/>
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
             <p>版权所有 © 2016</p>
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<Layout><AsideCollapse/></Layout>, document.getElementById('root'));