import React from "react";
import ReactDOM from "react-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import DevTabel from "./component/DevTabel.js"
class Mainpanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:1
        }
    }
    onSelect (value){
        this.setState({
            active:value.key
        })
    }
    onSwitch(active){
        if(active ==1){
            return <DevTabel/>
        }else{
            return ""
        }
    }
    render(){
        const Content = this.onSwitch(this.state.active);
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                        onSelect={this.onSelect.bind(this)}
                    >
                        <Menu.Item key="1">设备信息</Menu.Item>
                        <Menu.Item key="2">浏览器信息</Menu.Item>
                        <Menu.Item key="3">请加信息</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {Content}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}

ReactDOM.render(
    <Mainpanel/>,
    document.getElementById("mainpanel")
)