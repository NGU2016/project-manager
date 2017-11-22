import { Table, Button,Icon } from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import  BrowserConfig from "./config/BrowserConfig.js";
import $ from "jquery"

class BrowserTabel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount () {
        this.getAllBrowserInfo();
    }
    modifyConfig (value,isEdit){
        const values=JSON.parse(JSON.stringify(value))
        this.refs.browsModify.showModal(values,isEdit)
    }
    getAllBrowserInfo(){
        const me=this;
        $.ajax({
            url:"/getAllBrowser",
            type: 'get',
            dataType: 'json',
            success: data => {
                me.setState({
                    data: data
                });
            },
            error: err => {
                console.log(err);
            }
        })
    }

    deleteRaw(){
        const me=this;
        $.ajax({
            url:"/deleteRawBrow",
            type: 'get',
            dataType: 'json',
            success: data => {
                me.getAllBrowserInfo();
            },
            error: err => {
                console.log(err);
            }
        })
    }
    render(){
        const columns = [{
            title: 'IE(版本)',
            dataIndex: 'IE',
            key: 'IE',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '火狐(版本)',
            dataIndex: 'firefox',
            key: 'firefox',
        }, {
            title: '谷歌(版本)',
            dataIndex: 'chrome',
            key: 'chrome',
        }, {
            title: '组员信息',
            dataIndex: 'teammate',
            key: 'teammate',
        }, {
            title: '编辑',
            key: 'action',
            width:"178px",
            render: (text, record) => (
                <span>
                    <Button type="primary" onClick={() => this.modifyConfig(record,true)}>编辑</Button>
                  <span className="ant-divider"/>
                    <Button type="danger" onClick={() => this.deleteRaw(record)}>删除</Button>
                  <span className="ant-divider"/>
                </span>
            )
        }];
        return(
            <div>
                <div style={{ padding: '10px 10px 10px 0px' }}>
                    <BrowserConfig handleVal={this.getAllBrowserInfo.bind(this)} ref="browsModify"/>
                </div>
                <Table columns={columns} dataSource={this.state.data} bordered={true}/>
            </div>
        )
    }
}

export default BrowserTabel;